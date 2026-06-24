import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/lib/animations';
import ProjectCard from '@/components/shared/ProjectCard';
import CardSpotlight from '@/components/shared/CardSpotlight';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedCounter from '@/components/shared/AnimatedCounter';

const featuredProject = {
  title: "Predictive Maintenance Engine",
  description: "End-to-end ML pipeline forecasting equipment failure 48 hours in advance using high-frequency sensor data. Deployed across 3 global manufacturing plants.",
  metrics: [
    { label: "ROC-AUC", value: 0.92, decimals: 2 },
    { label: "Downtime Reduced", value: 23, suffix: "%" },
    { label: "Data Points", value: 50, suffix: "M+" }
  ],
  tools: ["Python", "XGBoost", "PySpark", "AWS SageMaker"],
  githubUrl: "#",
  demoUrl: "#"
};

const gridProjects = [
  {
    title: "Customer Churn Prediction",
    description: "Deep learning model identifying high-risk accounts. Integrated with Salesforce to trigger automated retention workflows.",
    metrics: [
      { label: "Accuracy", value: 89, suffix: "%" },
      { label: "Saved Revenue", value: 1.2, prefix: "$", suffix: "M", decimals: 1 }
    ],
    tools: ["TensorFlow", "Pandas", "FastAPI"],
    githubUrl: "#"
  },
  {
    title: "Dynamic Pricing Algorithm",
    description: "Reinforcement learning agent optimizing e-commerce pricing in real-time based on competitor signals and inventory levels.",
    metrics: [
      { label: "Margin Uplift", value: 14, suffix: "%" },
      { label: "Latency", value: 45, suffix: "ms" }
    ],
    tools: ["PyTorch", "Redis", "Docker"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-bg relative">
      <div className="container mx-auto px-6 max-w-1200">

        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">03.</span>
            Featured Projects
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-8"
        >
          {/* Featured Full Width */}
          <motion.div variants={fadeUp} className="w-full">
            <CardSpotlight className="p-8 md:p-12" data-cursor="project">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary">{featuredProject.title}</h3>
                  <div className="flex gap-4 z-10 relative">
                    {featuredProject.githubUrl && (
                      <a href={featuredProject.githubUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
                        <Github size={24} />
                      </a>
                    )}
                    {featuredProject.demoUrl && (
                      <a href={featuredProject.demoUrl} target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors p-1">
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed max-w-3xl">
                  {featuredProject.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 my-4">
                  {featuredProject.metrics.map((metric, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-sm text-text-muted uppercase tracking-wider mb-1 font-medium">{metric.label}</span>
                      <AnimatedCounter
                        value={metric.value}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                        decimals={metric.decimals}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {featuredProject.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm font-mono bg-bg text-text-secondary rounded border border-border">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Standard 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gridProjects.map((project, index) => (
              <motion.div key={index} variants={fadeUp} className="h-full">
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
