"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Download, ExternalLink, Github, Users, Code, Mail, Linkedin, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, PulseAnimation } from './animations';

export default function Hero() {
  // Use state and useEffect to handle client-side rendering of dynamic content
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Add the active class to sections for reveal animation
    const revealSections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      revealSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative px-8 md:px-16 py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <FadeUp delay={0.1}>
              <div className="inline-block px-5 py-2.5 bg-gradient-secondary rounded-full text-sm">
                Computer Science & AI Engineer
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Hi, I&apos;m <span className="border-b-4 border-primary">Hari Om Bhardwaj</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h2 className="text-2xl lg:text-3xl font-medium text-primary">Full Stack Developer & ML Engineer</h2>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <p className="text-secondary text-lg max-w-2xl">
                I build robust backend systems and ML applications. My expertise includes developing high-performance 
                microservices, messaging systems, and custom machine learning solutions using modern technologies. 
                I&apos;m passionate about open-source contributions and creating efficient, scalable software solutions.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-8 py-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-primary rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="text-white" size={22} />
                  </motion.div>
                  <span className="font-bold text-primary text-xl">4+</span>
                  <span className="text-secondary">Projects</span>
                </div>
                 
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-primary rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="text-white" size={22} />
                  </motion.div>
                  <span className="font-bold text-primary text-xl">3+</span>
                  <span className="text-secondary">Work Experiences</span>
                </div>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.6}>
              <div className="flex flex-wrap gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    href="/cv.pdf" 
                    className="px-8 py-4 bg-gradient-primary text-white rounded-md flex items-center gap-2 hover:opacity-90 transition text-lg"
                  >
                    <Download size={20} />
                    <span>Download CV</span>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link 
                    href="#contact" 
                    className="px-8 py-4 border border-secondary rounded-md flex items-center gap-2 hover:bg-background-dark transition text-lg"
                  >
                    <span>Let&apos;s Talk</span>
                    <ExternalLink size={20} />
                  </Link>
                </motion.div>
              </div>
            </FadeUp>

            <FadeUp delay={0.7}>
              <StaggerContainer delay={0.1}>
                <div className="flex gap-5 pt-8">
                  <StaggerItem>
                    <motion.a 
                      href="mailto:hariombhardwaj038@gmail.com" 
                      className="p-3 bg-background-dark rounded-full hover:bg-background-darker transition"
                      whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail size={22} />
                    </motion.a>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.a 
                      href="https://github.com/harry-urek" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-background-dark rounded-full hover:bg-background-darker transition"
                      whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={22} />
                    </motion.a>
                  </StaggerItem>
                  <StaggerItem>
                    <motion.a 
                      href="https://linkedin.com/in/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-background-dark rounded-full hover:bg-background-darker transition"
                      whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin size={22} />
                    </motion.a>
                  </StaggerItem>
                </div>
              </StaggerContainer>
            </FadeUp>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative flex justify-center md:justify-end">
            <motion.div 
              className="relative w-full max-w-[480px] aspect-square group"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="absolute inset-0 border-[10px] border-primary rounded-2xl bg-primary transform rotate-3 z-10"
                animate={{ rotate: [3, 2, 3] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
              ></motion.div>
              <div className="absolute inset-0 bg-white border-[10px] border-primary rounded-2xl z-20 overflow-hidden">
                {isMounted ? (
                  <div className="relative w-full h-full">
                    <Image 
                      src="/placeholder-profile.jpg" 
                      alt="Profile Photo" 
                      fill 
                      style={{ objectFit: 'cover' }}
                      priority
                      className="transition-all duration-500"
                    />
                    
                    {/* Available indicator that only shows on hover */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3 py-1.5 bg-white shadow-md text-primary rounded-full text-sm font-medium flex items-center gap-2">
                        <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                        Available for opportunities
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-background-dark flex items-center justify-center">
                    <span className="text-secondary">Loading...</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNext}
        whileHover={{ y: 5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
        >
          <ChevronDown className="text-primary" size={36} />
        </motion.div>
      </motion.div>
    </section>
  );
} 