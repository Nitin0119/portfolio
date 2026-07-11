import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '@/hooks/useCustomCursor';

const findInteractiveState = (target) => {
  let el = target;
  while (el && el !== document) {
    if (el.nodeType === 1) {
      const cursorAttr = el.getAttribute('data-cursor');
      if (cursorAttr === 'project' || cursorAttr === 'cta' || cursorAttr === 'interactive') {
        return cursorAttr;
      }
      const tag = el.tagName?.toLowerCase();
      if (['a', 'button', 'input', 'textarea', 'select', 'label'].includes(tag) || el.getAttribute('role') === 'button') {
        return 'interactive';
      }
    }
    el = el.parentElement || el.parentNode;
  }
  return 'default';
};

export default function CustomCursor() {
  const { cursorX, cursorY } = useCustomCursor();
  const [cursorState, setCursorState] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    const handlePointerMove = (e) => {
      let target = e.target;
      if (!target || target === window || target === document) {
        target = document.elementFromPoint(e.clientX, e.clientY);
      }
      const nextState = findInteractiveState(target);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }

      if (nextState === 'default') {
        timeoutRef.current = setTimeout(() => {
          setCursorState((prev) => prev !== 'default' ? 'default' : prev);
        }, 40);
      } else {
        setCursorState((prev) => prev !== nextState ? nextState : prev);
      }
    };

    window.addEventListener('mouseover', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    
    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mouseover', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: "var(--color-accent)",
      border: "0px solid var(--color-accent)",
      opacity: 1,
      transition: { duration: 0.15, ease: "easeOut" }
    },
    interactive: {
      width: 44,
      height: 44,
      backgroundColor: "rgba(198, 255, 52, 0)",
      border: "2px solid var(--color-accent)",
      opacity: 1,
      transition: {
        duration: 0.12,
        ease: "easeOut",
        backgroundColor: { duration: 0 }
      }
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "var(--color-accent)",
      border: "0px solid var(--color-accent)",
      opacity: 1,
      transition: { duration: 0.15, ease: "easeOut" }
    },
    cta: {
      width: 16,
      height: 16,
      backgroundColor: "rgba(198, 255, 52, 0)",
      border: "0px solid var(--color-accent)",
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%"
      }}
      animate={cursorState}
      variants={variants}
    >
      {cursorState === 'project' && (
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-[12px] text-bg font-bold tracking-tight"
        >
          VIEW →
        </motion.span>
      )}
    </motion.div>
  );
}
