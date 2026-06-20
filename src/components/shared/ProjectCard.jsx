import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

export default function ProjectCard({ project }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group rounded-[12px] border border-border bg-surface p-6 h-full flex flex-col transition-all hover:border-accent hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      data-cursor="project"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-display font-bold text-text-primary">{project.title}</h3>
        <div className="flex gap-2 z-10 relative">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
              <Github size={20} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-text-secondary mb-8 flex-grow leading-relaxed">{project.description}</p>
      
      <div className="mb-6 grid grid-cols-2 gap-4">
        {project.metrics.map((metric, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-xs text-text-muted uppercase tracking-wider mb-1">{metric.label}</span>
            <AnimatedCounter 
              value={metric.value} 
              prefix={metric.prefix} 
              suffix={metric.suffix} 
              decimals={metric.decimals} 
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tools.map((tool, i) => (
          <span key={i} className="px-2 py-1 text-[13px] font-mono bg-bg text-text-secondary rounded border border-border">
            {tool}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
