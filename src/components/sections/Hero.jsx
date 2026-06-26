import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, customEase } from '@/lib/animations';
import MagneticButton from '@/components/shared/MagneticButton';
import TypewriterText from '@/components/shared/TypewriterText';

export default function Hero() {
  const name = "Nitin Yadav";
  const nameChars = name.split('');

  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.04,
      }
    }
  };

  const nameCharVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: customEase }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-1200">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="font-mono text-accent mb-4 text-sm md:text-base flex items-center gap-2"
        >
          <span>&gt;</span>
          <span className="w-2 h-4 bg-accent animate-pulse block"></span>
        </motion.div>

        <motion.h1 
          className="text-display font-display font-bold tracking-tighter mb-4 text-text-primary flex"
          variants={nameContainer}
          initial="hidden"
          animate="visible"
        >
          {nameChars.map((char, index) => (
            <motion.span key={index} variants={nameCharVariant}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: customEase }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mb-10 leading-relaxed font-sans"
        >
          <TypewriterText />
          <br />
          Transforming complex datasets into actionable intelligence. Building scalable machine learning systems and driving data-informed decisions for modern enterprises.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, ease: customEase }}
          className="flex flex-wrap items-center gap-4"
        >
          <MagneticButton>
            <a href="#projects" className="inline-block bg-text-primary text-bg px-8 py-3 rounded-[12px] font-medium transition-colors hover:bg-accent hover:text-bg">
              View Work
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="inline-block px-8 py-3 rounded-[12px] font-medium border border-border text-text-primary transition-colors hover:border-accent hover:text-accent">
              Let's Talk
            </a>
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-text-muted font-mono">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
}
