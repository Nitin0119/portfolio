import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '@/lib/animations';

export default function TimelineItem({ experience, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const isEven = index % 2 === 0;
  const variant = isEven ? slideLeft : slideRight;

  return (
    <div className={`relative flex items-center justify-between sm:justify-normal sm:odd:flex-row-reverse group w-full mb-16 last:mb-0`}>
      {/* Node Dot */}
      <div className="absolute left-[20px] sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-bg border-4 border-surface z-10 group-hover:border-accent transition-colors">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
      </div>

      {/* Card Content */}
      <motion.div 
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-[calc(100%-60px)] sm:w-[calc(50%-40px)] ml-auto sm:ml-0"
      >
        <div className="p-6 sm:p-8 rounded-[12px] bg-surface border border-border transition-colors hover:border-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]" data-cursor="interactive">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4 gap-2">
            <div>
              <h3 className="text-xl font-display font-bold text-text-primary">{experience.role}</h3>
              <h4 className="text-lg text-text-secondary">{experience.company}</h4>
            </div>
            <span className="font-mono text-text-muted text-sm shrink-0 bg-bg px-3 py-1 rounded border border-border self-start lg:self-auto">
              {experience.date}
            </span>
          </div>
          <p className="text-text-secondary leading-relaxed mb-6">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span key={i} className="px-2 py-1 text-xs font-mono bg-bg text-text-secondary rounded border border-border">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
