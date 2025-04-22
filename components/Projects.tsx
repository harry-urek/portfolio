"use client";

import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
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
    <section id="projects" className="py-32 relative overflow-hidden bg-black">
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
      <div className="absolute top-24 right-0 w-32 h-1 bg-[#00FF66] glow-sm"></div>
      <div className="absolute bottom-32 left-0 w-32 h-1 bg-[#00FF66] glow-sm"></div>

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
          <motion.p
            className="text-sm font-medium uppercase tracking-[0.3em] mb-2 text-[#00FF66]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            MY WORK
          </motion.p>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-white glitch-text"
            data-text="FEATURED PROJECTS"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            FEATURED <span className="text-[#00FF66]">PROJECTS</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A selection of my recent work in backend systems, microservices, and machine learning
          </motion.p>
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
                  borderColor: "#00FF66",
                  boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="h-[500px] flex flex-col bg-[#0A0A0A] border border-[#333] overflow-hidden transition-all duration-300 group relative"
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 grid-item"></div>
                <div className="absolute bottom-0 left-0 grid-item"></div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
                />

                {/* Project header with title and role */}
                <div className="p-6 border-b border-[#333] backdrop-blur-sm relative z-10">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-xl text-white border-l-4 border-[#00FF66] pl-4">{project.title}</h3>
                    {project.role && (
                      <span className="text-xs px-3 py-1 bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] rounded-full font-mono">
                        {project.role}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project body with description and tags */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <p className="text-gray-400 mb-6 flex-grow group-hover:text-gray-300 transition-colors">{project.description}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-[#333] text-gray-300 text-xs group-hover:border-[#00FF66]/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project footer with links */}
                <div className="p-4 mt-auto backdrop-blur-sm border-t border-[#333] flex items-center justify-between relative z-10">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-400 hover:text-[#00FF66] transition-colors"
                    >
                      <Github size={18} className="mr-2" />
                      <span className="font-mono text-sm">View Source</span>
                    </Link>
                  )}

                  <motion.div
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={14} className="text-[#00FF66]" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}