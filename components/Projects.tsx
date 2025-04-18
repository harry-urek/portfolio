"use client";

import { Github, ExternalLink } from 'lucide-react';

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
  },
  {
    title: 'Gradio Contributions',
    description: 'Enhanced open-source Gradio library by implementing streamlined workflows, consolidating tickets, and resolving assert vulnerability issues. Improved code maintainability by developing custom Error classes aligned with project requirements.',
    tags: ['Python', 'Open Source', 'Security', 'Error Handling'],
    role: 'Maintainer/Contributor'
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-4">Featured Projects</h2>
      <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
        A selection of my recent work in backend systems, microservices, and machine learning
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-xl">{project.title}</h3>
                {project.role && (
                  <span className="text-xs font-semibold px-2 py-1 bg-black text-white rounded-full">
                    {project.role}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 