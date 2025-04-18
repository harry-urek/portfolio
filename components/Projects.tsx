"use client";

import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, Tailwind CSS, and Stripe integration.',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    github: 'https://github.com/yourusername/ecommerce',
    demo: 'https://ecommerce-demo.example.com'
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that creates high-quality blog posts and articles.',
    tags: ['React', 'Node.js', 'OpenAI', 'PostgreSQL'],
    github: 'https://github.com/yourusername/ai-content',
    demo: 'https://ai-content.example.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Auth0'],
    github: 'https://github.com/yourusername/task-app',
    demo: 'https://task-app.example.com'
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 px-6 md:px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
            <div className="aspect-video relative bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {project.title} Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
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
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                  >
                    <ExternalLink size={18} />
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