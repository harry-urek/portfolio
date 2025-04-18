"use client";

import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem, HoverScale } from './animations';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  role?: string;
}

const projects: Project[] = [
  {
    title: 'ROOM - Messaging Backend',
    description: 'A high-performance messaging backend with E2E encryption, Auth0, and protobuf security. Features optimized real-time messaging via WebSockets, Redis PUB/SUB, and async architecture for improved performance.',
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'SQLAlchemy', 'Protocol Buffers'],
    github: 'https://github.com/harry-urek/ROOM',
    role: 'Solo Dev'
  },
  {
    title: 'Kratos - Session Management Library',
    description: 'A comprehensive microservice session authentication and management library for Go. Implements OAuth 2.0, cookie-based sessions, JWT authentication, and supports gRPC with WebSockets for real-time, low-latency service communication.',
    tags: ['Go', 'JWT', 'OAuth 2.0', 'gRPC', 'WebSockets'],
    github: 'https://github.com/harry-urek/KRATOS',
    role: 'Solo Dev'
  },
  {
    title: "Yogi's EYE",
    description: 'ML-powered Ayurvedic plant recognition system using EfficientNet architecture. Implemented custom training on Robflow-processed dataset, improving accuracy for diverse species recognition. Deployed in Docker with PostgreSQL database.',
    tags: ['FastAPI', 'PostgreSQL', 'Docker', 'PyTorch', 'EfficientNet', 'Alembic'],
    github: 'https://github.com/harry-urek/Y-EYE',
    role: 'Team Lead'
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 bg-black section-transition">
      <div className="reveal-section">
        <TextReveal>
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Featured Projects</h2>
        </TextReveal>
        <TextReveal delay={0.1}>
          <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work in backend systems, microservices, and machine learning
          </p>
        </TextReveal>
      </div>
      <StaggerContainer delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto reveal-section" style={{ transitionDelay: '0.3s' }}>
          {projects.map((project, index) => (
            <StaggerItem key={index} delay={index * 0.15}>
              <HoverScale>
                <div className="bg-black rounded-xl overflow-hidden shadow-lg border border-gray-800 h-[500px] flex flex-col hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)]">
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-white">{project.title}</h3>
                      {project.role && (
                        <motion.span 
                          className="text-xs font-semibold px-2 py-1 bg-gradient-to-r from-gray-700 to-gray-500 text-white rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.role}
                        </motion.span>
                      )}
                    </div>
                    <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.span 
                            key={tagIndex} 
                            className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                            whileHover={{ backgroundColor: "#1f2937", color: "#fff" }}
                            transition={{ duration: 0.2 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        {project.github && (
                          <motion.a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                            whileHover={{ y: -3, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github size={18} className="text-white" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </HoverScale>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}