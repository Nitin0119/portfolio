import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function CertBadge({ cert }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-5 bg-bg border border-border rounded-[12px] flex items-start gap-4 transition-colors hover:border-accent group"
      data-cursor="interactive"
    >
      <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 group-hover:border-accent group-hover:text-accent transition-colors">
        <Award size={20} className="text-text-muted group-hover:text-accent transition-colors" />
      </div>
      <div>
        <h4 className="text-text-primary font-bold mb-1 leading-tight">{cert.name}</h4>
        <p className="text-text-secondary text-sm mb-2">{cert.issuer}</p>
        <span className="font-mono text-xs text-text-muted bg-surface px-2 py-1 rounded border border-border">
          {cert.year}
        </span>
      </div>
    </motion.div>
  );
}
