import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { slideLeft, slideRight } from '@/lib/animations';

import Lanyard from '../Lanyard/Lanyard';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-bg relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-1200">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">01.</span>
            About Me
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Avatar/Stats Column (Left) */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col gap-6"
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Avatar Card */}
            <div className="w-full h-[400px] md:h-[400px] relative flex items-center justify-center -mt-10">
              <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            </div>

            {/* Currently Badge */}
            <div className="flex items-center gap-4 p-5 border border-border rounded-[12px] bg-surface">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-text-muted uppercase tracking-wider">Currently</span>
                <span className="font-mono text-text-primary text-sm mt-1">Ethara AI</span>
              </div>
            </div>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download="Nitin_Yadav_Resume.pdf"
              className="inline-flex justify-center items-center gap-2 w-full py-4 bg-transparent border border-accent text-accent font-mono font-bold rounded-[12px] transition-colors hover:bg-accent hover:text-bg"
            >
              [ Resume ↓ ]
            </a>
          </motion.div>

          {/* Bio Column (Right) */}
          <motion.div
            className="w-full lg:w-2/3"
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="prose prose-lg prose-invert max-w-none text-text-secondary">
              <p className="mb-6 leading-relaxed">
                I'm a Data Scientist and Machine Learning Engineer passionate about building scalable, intelligent systems. My journey started in traditional statistical analysis, but I quickly pivoted to deep learning and predictive modeling when I realized the power of AI to solve complex, high-dimensional problems.
              </p>
              <p className="mb-6 leading-relaxed">
                At Ethara AI, I focus on optimizing LLM architectures and creating custom embedding models for enterprise knowledge bases. My work typically involves bridging the gap between cutting-edge research and production-ready applications, ensuring that ML pipelines are robust, scalable, and mathematically sound.
              </p>
              <p className="mb-6 leading-relaxed">
                Beyond modeling, I have a strong foundation in data engineering and MLOps. I firmly believe that the best algorithms are useless without the infrastructure to support them. That's why I spend as much time designing efficient vector databases and distributed training systems as I do tuning hyperparameters.
              </p>
              <p className="leading-relaxed">
                When I'm not training models, you can find me contributing to open-source data tools or writing technical deep dives on model interpretability and optimization techniques.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
