import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCustomCursor } from '@/hooks/useCustomCursor';

export default function CustomCursor() {
  const { cursorX, cursorY } = useCustomCursor();
  const [cursorState, setCursorState] = useState('default');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    
    const handleMouseOver = (e) => {
      const target = e.target;
      
      const projectCard = target.closest('[data-cursor="project"]');
      const ctaButton = target.closest('[data-cursor="cta"]');
      const interactive = target.closest('a, button, input, textarea, [data-cursor="interactive"]');

      if (projectCard) {
        setCursorState('project');
      } else if (ctaButton) {
        setCursorState('cta');
      } else if (interactive) {
        setCursorState('interactive');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mouseover', handleMouseOver);
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
    },
    interactive: {
      width: 40,
      height: 40,
      backgroundColor: "transparent",
      border: "2px solid var(--color-accent)",
      opacity: 1,
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "var(--color-accent)",
      border: "0px solid var(--color-accent)",
      opacity: 1,
    },
    cta: {
      width: 16,
      height: 16,
      backgroundColor: "transparent",
      border: "0px solid var(--color-accent)",
      opacity: 0,
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
      transition={{ duration: 0.15, ease: "linear" }}
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
