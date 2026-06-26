import React from 'react';
import { MotionConfig } from 'framer-motion';
import CustomCursor from '@/components/cursor/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';
import DotField from '@/components/DotField/DotField';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={true}
          waveAmplitude={0}
          gradientFrom="rgba(198, 255, 52, 0.4)"
          gradientTo="rgba(198, 255, 52, 0.1)"
          glowColor="rgba(198, 255, 52, 0.2)"
        />
      </div>
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="bg-bg py-8 border-t border-border text-center text-text-muted text-sm font-mono relative z-20">
        <p>&copy; {new Date().getFullYear()} Nitin Yadav. Designed and built with React & Framer Motion.</p>
      </footer>
    </MotionConfig>
  );
}

export default App;
