import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TypewriterText() {
  const titles = ['Data Scientist', 'ML Engineer', 'Analyst'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <span className="inline-block relative min-w-[180px] text-left text-accent font-mono font-medium">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {titles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible whitespace-nowrap">Data Scientist</span>
    </span>
  );
}
