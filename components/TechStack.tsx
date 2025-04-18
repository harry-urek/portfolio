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
      { name: "GoLang", color: "#00ADD8" },
      { name: "Python", color: "#3776AB" },
      { name: "JavaScript", color: "#F7DF1E" }
    ]
  },
  {
    name: "Frameworks",
    items: [
      { name: "FastAPI", color: "#009688" },
      { name: "Flask", color: "#000000" },
      { name: "Django", color: "#092E20" },
      { name: "Express", color: "#000000" },
      { name: "NextJS", color: "#000000" }
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
      { name: "SQLAlchemy", color: "#D71F00" },
      { name: "Pydantic", color: "#E92063" }
    ]
  },
  {
    name: "Tools",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "Vim", color: "#019733" },
      { name: "GitHub", color: "#181717" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" }
    ]
  },
  {
    name: "Protocols",
    items: [
      { name: "gRPC", color: "#244C5A" },
      { name: "WebSockets", color: "#010101" },
      { name: "REST", color: "#3884FF" },
      { name: "OAuth 2.0", color: "#EB5424" },
      { name: "JWT", color: "#000000" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const activeTech = techCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <>
      <div className="section-divider"></div>
      <section id="tech-stack" className="py-20 px-6 md:px-10 section-darker section-transition">
        <div className="reveal-section">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-medium uppercase tracking-wider mb-2 text-secondary">MY TECH STACK</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Technologies I Work With
                <motion.div 
                  className="h-1 w-24 bg-gradient-primary mx-auto mt-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: 96 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>
              </h2>
              <p className="max-w-2xl mx-auto text-secondary">
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
                      ? 'bg-gradient-primary text-white' 
                      : 'bg-white text-primary hover:bg-background-dark'}`}
                  whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
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
                    className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform transition-all border border-secondary/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    layout
                    layoutId={`tech-item-${tech.name}`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                        <motion.div 
                          className="absolute inset-0 -right-2 -bottom-2 bg-primary z-0 rounded-lg transform rotate-3"
                          whileHover={{ rotate: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        ></motion.div>
                        <div className="relative z-10 w-full h-full bg-white border border-secondary/10 rounded-lg flex items-center justify-center p-4">
                          <motion.div 
                            className="w-full h-full flex items-center justify-center text-white font-medium" 
                            style={{ backgroundColor: tech.color || '#888888' }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {tech.name.substring(0, 2)}
                          </motion.div>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-center text-primary">{tech.name}</h3>
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