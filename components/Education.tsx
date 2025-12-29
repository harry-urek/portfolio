"use client";

import { GraduationCap, Calendar, School, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, InteractiveBackgroundAnimation } from './animations';
import { useState, useEffect } from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "Siksha O Anusandhan University, ITER",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Bhubaneshwar, Odisha, India",
    period: "Oct. 2021 - June 2025",
    gpa: "GPA: 3.1, CGPA(8.1/10.0)"
  }
];

export default function Education() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Interactive background animation */}
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
      
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-gray-400 text-lg mb-1">My academic background in Computer Science and Data Science</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Left line */}
          <div className="absolute left-0 top-6 bottom-0 w-[1px] bg-neon-green/30 opacity-60"></div>
          
          {educationItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="mb-20 relative"
            >
              {/* Card */}
              <div className="backdrop-blur-sm bg-black/80 ml-10 p-8 border border-gray-800 rounded-md">
                {/* Institution with terminal style */}
                <h3 className="text-xl font-bold mb-4 font-mono">
                  <span className="text-neon-green">{'>  '}</span>
                  {item.institution}
                </h3>
                
                {/* Degree */}
                <h4 className="text-xl ml-7 mb-6">{item.degree}</h4>
                
                {/* Date and Location */}
                <div className="flex flex-col space-y-4 font-mono text-sm text-gray-400">
                  <div className="flex items-center ml-7">
                    <Calendar size={16} className="mr-3 text-neon-green/70" />
                    <span>{item.period}</span>
                  </div>
                  
                  <div className="flex items-center ml-7">
                    <MapPin size={16} className="mr-3 text-neon-green/70" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center ml-7">
                    <School size={16} className="mr-3 text-neon-green/70" />
                    <span>{item.gpa}</span>
                  </div>
                </div>
                
                {/* Line connecting to timeline */}
                <div className="absolute top-6 left-0 w-10 h-[1px] bg-neon-green/30"></div>
              </div>
              
              {/* Circle on timeline */}
              <div className="absolute -left-[5px] top-6 w-[10px] h-[10px] rounded-full bg-neon-green"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 