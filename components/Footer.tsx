"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Terminal, Code, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { InteractiveBackgroundAnimation } from './animations';

export default function Footer() {
  // Client-side rendering for the date
  const [currentYear, setCurrentYear] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    setIsMounted(true);
  }, []);

  return (
    <footer id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background animation - only render on client */}
      {isMounted && (
        <InteractiveBackgroundAnimation 
          color="var(--neon-green)" 
          density={15} 
          cursorInteractive={true}
        />
      )}
      
      {/* Static grid background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="grid-background w-full h-full"></div>
      </div>
      
      {/* Fixed position accent lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-green/30"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neon-green/30"></div>
      
      <div className="container mx-auto z-10 relative">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text">GET IN <span className="text-neon-green">TOUCH</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <motion.div 
            className="backdrop-blur-sm bg-black/20 p-8 border border-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.15)",
              borderColor: "rgba(0, 255, 102, 0.3)"
            }}
          >
            <div className="p-3 mb-5 inline-flex bg-neon-green/10 border border-neon-green/30 rounded-lg">
              <Mail className="text-neon-green" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Feel free to email me about anything</p>
            <a 
              href="mailto:hariombhardwaj038@gmail.com" 
              className="inline-flex items-center text-neon-green hover:underline font-mono"
            >
              <span>hariombhardwaj038@gmail.com</span>
              <ExternalLink className="ml-2" size={14} />
            </a>
          </motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-black/20 p-8 border border-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.15)",
              borderColor: "rgba(0, 255, 102, 0.3)"
            }}
          >
            <div className="p-3 mb-5 inline-flex bg-neon-green/10 border border-neon-green/30 rounded-lg">
              <Github className="text-neon-green" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className="text-gray-400 mb-4">Check out my projects and contributions</p>
            <a 
              href="https://github.com/harry-urek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-green hover:underline font-mono"
            >
              <span>github.com/harry-urek</span>
              <ExternalLink className="ml-2" size={14} />
            </a>
          </motion.div>
          
          <motion.div 
            className="backdrop-blur-sm bg-black/20 p-8 border border-gray-800 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.15)",
              borderColor: "rgba(0, 255, 102, 0.3)"
            }}
          >
            <div className="p-3 mb-5 inline-flex bg-neon-green/10 border border-neon-green/30 rounded-lg">
              <Linkedin className="text-neon-green" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Let's connect professionally</p>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-green hover:underline font-mono"
            >
              <span>linkedin.com/in/hariom</span>
              <ExternalLink className="ml-2" size={14} />
            </a>
          </motion.div>
        </div>
        
        <div className="text-center font-mono text-sm text-gray-500 mt-12 pt-4 border-t border-gray-800">
          <div className="mb-3 flex justify-center gap-6">
            <a 
              href="https://github.com/harry-urek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-neon-green transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:hariombhardwaj038@gmail.com"
              className="hover:text-neon-green transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Code size={14} className="text-neon-green" />
            <span>Designed & Built by Hari Om Bhardwaj</span>
            <Code size={14} className="text-neon-green" />
          </div>
          
          <p className="mt-2">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 