"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  fadeIn, 
  staggerContainer, 
  slideIn, 
  InteractiveBackgroundAnimation 
} from './animations';

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
    <section id="tech-stack" className="py-32 relative overflow-hidden">
      {/* Interactive background animation */}
      <InteractiveBackgroundAnimation 
        color="var(--neon-green)" 
        density={15} 
        cursorInteractive={true} 
        scrollInteractive={true} 
      />
      
      {/* Fixed position accent lines */}
      <div className="absolute top-24 left-0 w-32 h-1 bg-neon-green glow-sm"></div>
      <div className="absolute bottom-32 right-0 w-32 h-1 bg-neon-green glow-sm"></div>

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-6 sm:px-8 z-10 relative"
      >
        {/* Section header */}
        <motion.div
          variants={fadeIn('up', 0.1)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text">MY <span className="text-neon-green">STACK</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Modern technologies I leverage to build robust and scalable applications
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div variants={fadeIn('up', 0.2)}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 backdrop-blur-sm border
                  ${activeCategory === category.name 
                    ? 'border-neon-green text-neon-green bg-neon-green/5 glow-sm' 
                    : 'border-gray-700 text-gray-400 hover:border-gray-500'}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tech Items Grid */}
        <motion.div
          variants={staggerContainer(0.05, 0.3)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {activeTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeIn('up', index * 0.05 + 0.3)}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-black/30 backdrop-blur-sm p-6 border border-gray-800 hover:border-neon-green/50 transition-all duration-300"
              >
                {/* Glowing backdrop on hover */}
                <div className="absolute inset-0 opacity-0 bg-neon-green/5 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                
                <div className="flex flex-col items-center justify-center h-full relative">
                  <div className="w-full aspect-square mb-4 flex items-center justify-center">
                    <motion.div 
                      className="w-full h-full flex items-center justify-center text-black font-bold text-2xl rounded-md"
                      style={{ backgroundColor: "var(--neon-green)" }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech.name.substring(0, 2).toUpperCase()}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-medium text-center">{tech.name}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 