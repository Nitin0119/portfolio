import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import CertBadge from '@/components/shared/CertBadge';

const education = [
  {
    degree: "M.S. in Computer Science",
    school: "Kurukshetra University",
    date: "2022 — 2024",
    details: "Specialization in Cloud Computing and AI. Research focus on distributed representation learning."
  },
  {
    degree: "B.S. in Computer Science",
    school: "Delhi University",
    date: "2019 — 2022",
    details: "Major in Computer Science."
  }
];

const certifications = [
  { name: "Associate Data Analyst", issuer: "DataCamp", year: "2025" },
  { name: "Associate Data Scientist", issuer: "DataCamp", year: "2025" },
  { name: "SQL Associate", issuer: "DataCamp", year: "2025" },
  { name: "SQL Basic", issuer: "HackerRank", year: "2024" }
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-1200">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">05.</span>
            Education & Certs
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row gap-16"
        >
          {/* Education Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-10">
            {education.map((edu, index) => (
              <motion.div key={index} variants={fadeUp} className="relative pl-8 border-l-2 border-border">
                <div className="absolute w-4 h-4 bg-bg border-2 border-accent rounded-full -left-[9px] top-1" />
                <h3 className="text-2xl font-display font-bold text-text-primary mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-text-secondary mb-3">{edu.school}</h4>
                <div className="font-mono text-sm text-text-muted mb-4 bg-bg inline-block px-3 py-1 rounded border border-border">{edu.date}</div>
                <p className="text-text-secondary leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Right Column */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-heading font-bold text-text-primary mb-8">Active Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <CertBadge cert={cert} />
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
