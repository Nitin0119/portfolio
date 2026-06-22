import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineItem from '@/components/shared/TimelineItem';

const experiences = [
  {
    role: "LLM Post Training Intern",
    company: "Ethara AI",
    date: "Apr 2026 — May 2026",
    description: "Evaluated AI generated responses, assessed accuracy, relevance, safety, and quality, providing detailed feedback to improve large language model performance consistently.",
    technologies: ["Python", "Data Annotation", "Data Quality Assurance", "Data Labelling"]
  },
  {
    role: "Data Analyst Intern",
    company: "Fancy Odds",
    date: "Sep 2021 — Dec 2021",
    description: "Analyzed website traffic using Python, SQL, and Power BI, developed dashboards, identified trends, generated insights, and supported data-driven decisions.",
    technologies: ["Python", "SQL", "Power BI"]
  },
  // {
  //   role: "Data Analyst",
  //   company: "Quantum Logistics",
  //   date: "2018 — 2020",
  //   description: "Built automated KPI dashboards replacing 15 hours of weekly manual reporting. Conducted A/B testing for routing algorithms.",
  //   technologies: ["R", "SQL", "PowerBI", "Python"]
  // }
];

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-24 bg-bg relative">
      <div className="container mx-auto px-6 max-w-1200">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">03.</span>
            Professional Experience
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Vertical SVG Line */}
          <div className="absolute left-[20px] sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 flex justify-center">
            {/* Background track line */}
            <div className="absolute w-[2px] h-full bg-border" />
            {/* Animated drawing line */}
            <svg className="absolute w-2 h-full" preserveAspectRatio="none">
              <motion.line
                x1="4" y1="0" x2="4" y2="100%"
                stroke="var(--color-accent)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          <div className="flex flex-col relative z-10 pt-8 pb-8">
            {experiences.map((exp, index) => (
              <TimelineItem key={index} experience={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
