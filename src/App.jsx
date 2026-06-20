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

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CustomCursor />
      <Navbar />
      <main>
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
