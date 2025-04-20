"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Menu, Code } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full transition-all duration-300 ease-in-out z-50 ${scrolled ? 'py-3 border-b border-[#00FF66]' : 'py-5'} bg-black`}>
      <div className="container mx-auto flex justify-center items-center px-6 md:px-10 relative">
        {/* Left decoration */}
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00FF66]"></div>
        
        {/* Logo centered */}
        <motion.a 
          href="#" 
          className="font-mono text-2xl text-white font-bold tracking-wider flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#00FF66] mr-1">&lt;</span>
          HARI
          <span className="text-[#00FF66] ml-1">/&gt;</span>
        </motion.a>
        
        {/* Right decoration */}
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00FF66]"></div>
      </div>
    </header>
  );
} 