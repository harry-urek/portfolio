"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  // Client-side rendering for the date
  const [currentYear, setCurrentYear] = useState('');
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer id="contact" className="bg-black text-white py-10 px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Hari Om Bhardwaj</h2>
          <p className="max-w-md text-gray-400">
            Backend developer and ML engineer specializing in building high-performance microservices, 
            messaging systems, and custom machine learning solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center gap-2">
              <Mail size={18} />
              <a href="mailto:hariombhardwaj038@gmail.com">hariombhardwaj038@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} />
              <a href="tel:+917357387554">+91 7357387554</a>
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/harry-urek" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hariombhardwaj038@gmail.com" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 mt-8 pt-8 text-gray-400 text-sm">
        &copy; {currentYear} Hari Om Bhardwaj. All rights reserved.
      </div>
    </footer>
  );
} 