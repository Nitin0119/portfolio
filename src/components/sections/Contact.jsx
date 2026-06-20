import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp } from '@/lib/animations';
import emailjs from '@emailjs/browser';
import MagneticButton from '@/components/shared/MagneticButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Github, Linkedin, FileText } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const formRef = useRef(null);

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Placeholders for real credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          setStatus('error');
          setErrorMessage('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="py-24 bg-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-1200 relative z-10">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6 flex items-center gap-4">
            <span className="text-accent font-mono text-xl md:text-2xl font-normal">06.</span>
            Get In Touch
          </h2>
          <div className="w-full h-px bg-border"></div>
        </div>

        <motion.div
          ref={ref}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-text-secondary text-lg leading-relaxed">
              Whether you have a question, a project proposition, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>
          </div>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6 bg-surface p-8 rounded-[12px] border border-border shadow-lg relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-text-secondary">Name</label>
                <Input 
                  type="text" 
                  name="user_name" 
                  id="name" 
                  required 
                  disabled={status === 'loading'}
                  className="bg-bg border-border text-text-primary focus-visible:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-text-secondary">Email</label>
                <Input 
                  type="email" 
                  name="user_email" 
                  id="email" 
                  required 
                  disabled={status === 'loading'}
                  className="bg-bg border-border text-text-primary focus-visible:ring-accent"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-text-secondary">Message</label>
              <Textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                disabled={status === 'loading'}
                className="bg-bg border-border text-text-primary focus-visible:ring-accent resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-destructive text-sm font-medium">{errorMessage}</p>
            )}

            <div className="pt-4 text-center">
              <MagneticButton>
                <Button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={`w-full md:w-auto min-w-[160px] h-12 text-bg font-medium transition-colors ${
                    status === 'success' 
                      ? 'bg-transparent border-2 border-green-500 text-green-500 hover:bg-transparent hover:text-green-500' 
                      : 'bg-accent hover:bg-accent/90'
                  }`}
                >
                  {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {status === 'idle' && 'Send Message'}
                  {status === 'loading' && 'Sending...'}
                  {status === 'success' && 'Message Sent ✓'}
                  {status === 'error' && 'Send Message'}
                </Button>
              </MagneticButton>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-16 flex justify-center items-center gap-8">
            <a href="#" className="text-text-muted hover:text-accent transition-all hover:-translate-y-[2px]" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="#" className="text-text-muted hover:text-accent transition-all hover:-translate-y-[2px]" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="/resume.pdf" className="text-text-muted hover:text-accent transition-all hover:-translate-y-[2px]" aria-label="Resume">
              <FileText size={24} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
