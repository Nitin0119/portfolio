import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import CardSpotlight from '@/components/shared/CardSpotlight';

const skillsData = [
  {
    category: 'Languages',
    skills: ['Python', 'SQL', 'R', 'JavaScript/TypeScript', 'Scala'],
    colSpan: 'lg:col-span-2'
  },
  {
    category: 'Machine Learning',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'Hugging Face', 'OpenCV'],
    colSpan: 'lg:col-span-2 lg:row-span-2'
  },
  {
    category: 'Data Engineering & Cloud',
    skills: ['AWS (SageMaker, S3, EC2)', 'GCP', 'Apache Spark', 'Airflow', 'Snowflake', 'Docker', 'Kubernetes'],
    colSpan: 'lg:col-span-2'
  },
  {
    category: 'BI & Visualization',
    skills: ['Tableau', 'PowerBI', 'Looker', 'Plotly', 'Streamlit'],
    colSpan: 'lg:col-span-2'
  },
  {
    category: 'Tools & Workflows',
    skills: ['Git', 'MLflow', 'DVC', 'Jira', 'Agile/Scrum'],
    colSpan: 'lg:col-span-2'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-bg relative">
      <div className="container mx-auto px-6 max-w-1200">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">02.</span>
            Technical Arsenal
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((group, index) => (
            <motion.div key={index} variants={fadeUp} className={`h-full ${group.colSpan}`}>
              <CardSpotlight className="h-full p-8" data-cursor="interactive">
                <h3 className="text-xl font-heading font-bold text-text-primary mb-6">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, i) => (
                    <code 
                      key={i} 
                      className="px-3 py-1.5 text-sm font-mono bg-[#C6FF34]/10 text-accent rounded border border-accent/20"
                    >
                      {skill}
                    </code>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
