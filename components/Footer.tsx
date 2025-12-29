"use client";

import Link from 'next/link';
import { Github, Linkedin, Mail, Phone, Terminal, Code, ExternalLink, Check, Award } from 'lucide-react';
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
    <footer id="contact" className="relative py-20 px-6 overflow-hidden bg-black">
      {/* Background grid pattern from Experience section */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Neon accent line animation from Experience section */}
      <motion.div
        className="absolute left-0 top-0 h-[1px] bg-[#00FF66] z-10"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Fixed position accent lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#00FF66]/30"></div>

      <div className="container mx-auto z-10 relative">
        <div className="mb-16 text-center">
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-2 text-[#00FF66]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            CONTACT
          </motion.p>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-white glitch-text"
            data-text="GET IN TOUCH"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            GET IN <span className="text-[#00FF66]">TOUCH</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <motion.div
            className="bg-[#0A0A0A] p-8 border border-[#333] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -5,
              borderColor: "#00FF66",
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
            }}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 grid-item"></div>
            <div className="absolute bottom-0 left-0 grid-item"></div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            <div className="relative z-10">
              <div className="p-3 mb-5 inline-flex bg-[#00FF66]/10 border border-[#00FF66]/30">
                <Mail className="text-[#00FF66]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Feel free to email me about anything</p>
              <a
                href="mailto:hariombhardwaj038@gmail.com"
                className="inline-flex items-center text-[#00FF66] hover:underline font-mono"
              >
                <span>hariombhardwaj038@gmail.com</span>
                <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#0A0A0A] p-8 border border-[#333] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              y: -5,
              borderColor: "#00FF66",
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
            }}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 grid-item"></div>
            <div className="absolute bottom-0 left-0 grid-item"></div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            <div className="relative z-10">
              <div className="p-3 mb-5 inline-flex bg-[#00FF66]/10 border border-[#00FF66]/30">
                <Github className="text-[#00FF66]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">GitHub</h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Check out my projects and contributions</p>
              <a
                href="https://github.com/harry-urek"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00FF66] hover:underline font-mono"
              >
                <span>github.com/harry-urek</span>
                <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#0A0A0A] p-8 border border-[#333] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{
              y: -5,
              borderColor: "#00FF66",
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
            }}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 grid-item"></div>
            <div className="absolute bottom-0 left-0 grid-item"></div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            <div className="relative z-10">
              <div className="p-3 mb-5 inline-flex bg-[#00FF66]/10 border border-[#00FF66]/30">
                <Linkedin className="text-[#00FF66]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">LinkedIn</h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Let's connect professionally</p>
              <a
                href="https://www.linkedin.com/in/ombhardwaj08/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00FF66] hover:underline font-mono"
              >
                <span>linkedin.com/in/ombhardwaj08</span>
                <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#0A0A0A] p-8 border border-[#333] group relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              y: -5,
              borderColor: "#00FF66",
              boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
            }}
          >
            {/* Animated corner accent */}
            <div className="absolute top-0 right-0 grid-item"></div>
            <div className="absolute bottom-0 left-0 grid-item"></div>

            {/* Hover glow effect */}
            <motion.div
              className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
            />

            <div className="relative z-10">
              <div className="p-3 mb-5 inline-flex bg-[#00FF66]/10 border border-[#00FF66]/30">
                <Award className="text-[#00FF66]" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">LeetCode</h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">Check out my coding challenges</p>
              <a
                href="https://leetcode.com/u/harry_urek/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#00FF66] hover:underline font-mono"
              >
                <span>leetcode.com/u/harry_urek</span>
                <ExternalLink className="ml-2" size={14} />
              </a>
            </div>
          </motion.div>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <div className="flex gap-4 flex-wrap">
            <a href="https://github.com/harry-urek" target="_blank" rel="noopener noreferrer" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hari-om-bhardwaj-0aa685220/" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hariombhardwaj038@gmail.com" 
               className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Mail size={20} />
            </a>
          </div>
          <div className="mt-4 space-y-2 text-gray-400 text-sm">
            <a href="https://harry-dev.tech" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">
              🌐 harry-dev.tech
            </a>
            <a href="https://leetcode.com/harry-urek" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">
              💻 Leetcode
            </a>
            <a href="https://kaggle.com/hariombhardwaj" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">
              📊 Kaggle
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}