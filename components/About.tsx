"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Server, Database, Brain } from 'lucide-react';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './animations';

interface SkillItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skillItems: SkillItem[] = [
  {
    title: "Backend Development",
    description: "Building robust microservices, APIs, and server-side applications with modern frameworks and architectures.",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Database Engineering",
    description: "Designing efficient database schemas, optimizing queries, and implementing data persistence layers.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Machine Learning",
    description: "Developing and deploying ML models for classification, recognition, and prediction tasks.",
    icon: <Brain className="w-6 h-6" />
  }
];

export default function About() {
  return (
    <>
      <div className="section-divider"></div>
      <section id="about" className="py-20 px-6 md:px-10 bg-gradient-secondary section-transition">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-8 reveal-section">
              <ScrollReveal>
                <div className="inline-block px-4 py-2 bg-background-dark rounded-full text-sm mb-4">
                  About Me
                </div>
              </ScrollReveal>
              
              <TextReveal>
                <h2 className="text-4xl font-bold text-primary">Building robust backend systems and ML applications</h2>
              </TextReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="text-secondary">
                  I'm a full-stack developer and ML engineer specializing in high-performance 
                  backend systems, microservices, and machine learning applications. With expertise 
                  in Go, Python, and JavaScript, I focus on creating efficient, scalable solutions 
                  for complex problems.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <p className="text-secondary">
                  My experience spans developing message brokers, session management libraries, and 
                  ML-powered systems. I'm passionate about open-source contributions and continuously 
                  learning new technologies to enhance my development capabilities.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <a 
                    href="https://github.com/harry-urek" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-gradient-primary text-white rounded-md flex items-center gap-2 hover:opacity-90 transition"
                  >
                    <span>View GitHub</span>
                    <ExternalLink size={18} />
                  </a>
                </motion.div>
              </ScrollReveal>
            </div>
            
            {/* Right Column - Skills */}
            <div className="reveal-section" style={{ transitionDelay: '0.2s' }}>
              <StaggerContainer delay={0.1}>
                <div className="space-y-6">
                  {skillItems.map((skill, index) => (
                    <StaggerItem key={index} delay={index * 0.1}>
                      <motion.div 
                        className="bg-white p-6 rounded-xl shadow-md border border-secondary/10"
                        whileHover={{ 
                          y: -5, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
                        }}
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <motion.div 
                            className="p-3 bg-gradient-primary text-white rounded-lg"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-primary">{skill.title}</h3>
                            <p className="text-secondary">{skill.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 