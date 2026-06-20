import React, { useEffect } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

export default function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 20 });
  
  const display = useTransform(spring, (current) => {
    if (decimals > 0) {
      return `${prefix}${current.toFixed(decimals)}${suffix}`;
    }
    return `${prefix}${Math.round(current).toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className="font-mono text-accent font-bold text-xl md:text-2xl">
      {display}
    </motion.span>
  );
}
