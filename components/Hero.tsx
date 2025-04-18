"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Download, ExternalLink, Github, Users, Code, Mail, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FadeUp, StaggerContainer, StaggerItem, PulseAnimation } from './animations';

export default function Hero() {
  // Use state and useEffect to handle client-side rendering of dynamic content
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="py-20 px-6 md:px-10 flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
      <div className="flex-1 space-y-6">
        <FadeUp delay={0.1}>
          <div className="inline-block px-4 py-2 bg-gradient-secondary rounded-full text-sm">
            Computer Science & AI Engineer
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <h1 className="text-5xl md:text-6xl font-bold text-primary">
            Hi, I&apos;m <span className="border-b-4 border-primary">Hari Om Bhardwaj</span>
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.3}>
          <h2 className="text-2xl font-medium text-primary">Full Stack Developer & ML Engineer</h2>
        </FadeUp>
        
        <FadeUp delay={0.4}>
          <p className="text-secondary max-w-2xl">
            I build robust backend systems and ML applications. My expertise includes developing high-performance 
            microservices, messaging systems, and custom machine learning solutions using modern technologies. 
            I&apos;m passionate about open-source contributions and creating efficient, scalable software solutions.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.5}>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <motion.div 
                className="p-2 bg-gradient-primary rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="text-white" size={20} />
              </motion.div>
              <span className="font-bold text-primary">3+</span>
              <span className="text-secondary">Projects</span>
            </div>
             
            <div className="flex items-center gap-2">
              <motion.div 
                className="p-2 bg-gradient-primary rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code className="text-white" size={20} />
              </motion.div>
              <span className="font-bold text-primary">2+</span>
              <span className="text-secondary">Universities</span>
            </div>
          </div>
        </FadeUp>
        
        <FadeUp delay={0.6}>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="/cv.pdf" 
                className="px-5 py-3 bg-gradient-primary text-white rounded-md flex items-center gap-2 hover:opacity-90 transition"
              >
                <Download size={18} />
                <span>Download CV</span>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link 
                href="#contact" 
                className="px-5 py-3 border border-secondary rounded-md flex items-center gap-2 hover:bg-background-dark transition"
              >
                <span>Let&apos;s Talk</span>
                <ExternalLink size={18} />
              </Link>
            </motion.div>
          </div>
        </FadeUp>

        <FadeUp delay={0.7}>
          <StaggerContainer delay={0.1}>
            <div className="flex gap-3 pt-4">
              <StaggerItem>
                <motion.a 
                  href="mailto:hariombhardwaj038@gmail.com" 
                  className="p-2 bg-background-dark rounded-full hover:bg-background-darker transition"
                  whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                </motion.a>
              </StaggerItem>
              <StaggerItem>
                <motion.a 
                  href="https://github.com/harry-urek" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-background-dark rounded-full hover:bg-background-darker transition"
                  whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
              </StaggerItem>
              <StaggerItem>
                <motion.a 
                  href="https://linkedin.com/in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-background-dark rounded-full hover:bg-background-darker transition"
                  whileHover={{ y: -5, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </FadeUp>
      </div>
      
      <div className="flex-1 relative">
        <motion.div 
          className="relative aspect-square max-w-[500px] mx-auto md:ml-auto overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="absolute inset-0 border-8 border-primary rounded-2xl bg-primary transform rotate-3 z-10"
            animate={{ rotate: [3, 2, 3] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
          ></motion.div>
          <div className="absolute inset-0 bg-white border-8 border-primary rounded-2xl z-20 overflow-hidden">
            {isMounted ? (
              <div className="relative w-full h-full">
                <Image 
                  src="/placeholder-profile.jpg" 
                  alt="Profile Photo" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            ) : (
              <div className="relative w-full h-full bg-background-dark flex items-center justify-center">
                <span className="text-secondary">Loading...</span>
              </div>
            )}
            <motion.div 
              className="absolute bottom-4 right-4 bg-gradient-primary text-white text-sm px-3 py-1 rounded-full z-30"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              +91 7357387554
            </motion.div>
          </div>
          <motion.div 
            className="absolute top-5 left-5 bg-white p-2 rounded-lg shadow-lg z-30"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PulseAnimation>
              <div className="px-3 py-1 bg-background-dark text-primary rounded-full text-sm font-medium flex items-center gap-1">
                <span className="h-2 w-2 bg-primary rounded-full"></span>
                Available for opportunities
              </div>
            </PulseAnimation>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 