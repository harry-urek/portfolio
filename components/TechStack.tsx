"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './animations';

// Define types for technology categories and items
interface TechItem {
  name: string;
  color?: string;
}

interface TechCategory {
  name: string;
  items: TechItem[];
}

// Define tech stack data based on resume
const techCategories: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Python", color: "#3776AB" }
    ]
  },
  {
    name: "Frameworks",
    items: [
      { name: "FastAPI", color: "#009688" },
      { name: "Flask", color: "#000000" },
      { name: "NextJS", color: "#000000" },
      { name: "Express", color: "#000000" }
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Redis", color: "#DC382D" },
      { name: "MongoDB", color: "#47A248" }
    ]
  },
  {
    name: "Libraries",
    items: [
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "Pandas", color: "#150458" },
      { name: "Sci-Kit", color: "#F7931E" },
      { name: "SQLAlchemy", color: "#D71F00" },
      { name: "Keras", color: "#D00000" },
      { name: "LangChain", color: "#1C3C3C" }
    ]
  },
  {
    name: "Tools",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "Vim", color: "#019733" },
      { name: "GitHub Workflow", color: "#181717" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
      { name: "GCP", color: "#4285F4" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const activeTech = techCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <>
      {/* Removed section divider for seamless transition */}
      <section id="tech-stack" className="py-20 px-6 md:px-10 bg-black text-white section-transition">
        <div className="reveal-section">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider mb-2 text-gray-400">MY TECH STACK</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Technologies I Work With
                <motion.div 
                  className="h-1 w-24 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-400">
                A comprehensive stack of modern technologies that I use to build robust and
                scalable applications, from microservices to ML systems
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Category Tabs */}
        <div className="reveal-section" style={{ transitionDelay: '0.2s' }}>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {techCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-6 py-3 rounded-md border text-sm font-medium transition-colors
                    ${activeCategory === category.name 
                      ? 'bg-gradient-to-r from-gray-700 to-gray-600 text-white border-gray-600' 
                      : 'bg-black text-gray-300 border-gray-700 hover:bg-gray-900'}`}
                  whileHover={{ y: -2, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Tech Items Grid */}
        <div className="reveal-section" style={{ transitionDelay: '0.4s' }}>
          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {activeTech.map((tech, index) => (
                <StaggerItem key={tech.name} delay={index * 0.05}>
                  <motion.div 
                    className="relative bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800 transform transition-all"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)" }}
                    layout
                    layoutId={`tech-item-${tech.name}`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <motion.div 
                          className="absolute inset-0 -right-2 -bottom-2 bg-gradient-to-br from-gray-700 to-gray-800 z-0 rounded-lg transform rotate-3"
                          whileHover={{ rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        ></motion.div>
                        <div className="relative z-10 w-full h-full bg-gray-900 border border-gray-700 rounded-lg flex items-center justify-center p-4">
                          <motion.div 
                            className="w-full h-full flex items-center justify-center text-white font-medium" 
                            style={{ backgroundColor: tech.color || '#555555' }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech.name.substring(0, 2)}
                          </motion.div>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-center text-white">{tech.name}</h3>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
} 