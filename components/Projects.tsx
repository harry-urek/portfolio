"use client";

import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  fadeIn, 
  staggerContainer, 
  slideIn, 
  InteractiveBackgroundAnimation 
} from './animations';

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
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Interactive background animation */}
      <InteractiveBackgroundAnimation 
        color="var(--neon-green)" 
        density={25}
        cursorInteractive={true} 
      />
      
      {/* Fixed position accent lines */}
      <div className="absolute top-24 right-0 w-32 h-1 bg-neon-green glow-sm"></div>
      <div className="absolute bottom-32 left-0 w-32 h-1 bg-neon-green glow-sm"></div>
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glitch-text">FEATURED <span className="text-neon-green">PROJECTS</span></h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A selection of my recent work in backend systems, microservices, and machine learning
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer(0.05, 0.3)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeIn('up', index * 0.1 + 0.3)}
              className="group"
            >
              <motion.div
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 0 30px rgba(0, 255, 102, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                className="h-[500px] flex flex-col bg-black/20 backdrop-blur-sm border border-gray-800 hover:border-neon-green/40 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Project header with title and role */}
                <div className="p-6 border-b border-gray-800 backdrop-blur-sm">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-white">{project.title}</h3>
                    {project.role && (
                      <span className="text-xs px-3 py-1 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-full font-mono">
                        {project.role}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Project body with description and tags */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 border border-gray-700 text-gray-300 text-xs rounded-md font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Project footer with links */}
                <div className="p-4 mt-auto backdrop-blur-sm border-t border-gray-800 flex items-center justify-between">
                  {project.github && (
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-400 hover:text-neon-green transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      <span className="font-mono text-sm">View Source</span>
                    </Link>
                  )}
                  
                  <motion.div 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-neon-green/10 border border-neon-green/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={14} className="text-neon-green" />
                  </motion.div>
                </div>
                
                {/* Glowing edge effect on hover */}
                <div className="absolute inset-0 border border-neon-green/0 rounded-lg group-hover:border-neon-green/30 transition-all duration-300 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}