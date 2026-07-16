import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useSectionInView } from '@/hooks/useSectionInView';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
  const activeSection = useSectionInView(sections, 0.5);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
  ];

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.19, 1, 0.22, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3 }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.8 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#171717]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-1200 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleSmoothScroll(e, 'hero')}
          className="font-mono font-bold text-text-primary text-xl flex items-center before:content-[''] before:inline-block before:w-3 before:h-5 before:bg-accent before:animate-pulse before:mr-2 before:align-middle"
        >
          NITIN.DEV
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent relative ${
                    activeSection === link.id ? 'text-accent' : 'text-text-secondary'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 w-full h-[2px] bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="#contact" 
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="px-5 py-2 border border-accent text-accent text-sm font-medium rounded-[6px] hover:bg-accent hover:text-bg transition-colors"
          >
            [ Hire Me ]
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-bg z-40 flex flex-col justify-center items-center h-screen"
          >
            <ul className="flex flex-col items-center gap-8 text-2xl font-medium">
              {navLinks.map((link) => (
                <motion.li key={link.id} variants={linkVariants}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={linkVariants}>
                <a 
                  href="#contact" 
                  onClick={(e) => handleSmoothScroll(e, 'contact')}
                  className="px-6 py-3 border border-accent text-accent rounded-[6px] hover:bg-accent hover:text-bg transition-colors"
                >
                  [ Hire Me ]
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
