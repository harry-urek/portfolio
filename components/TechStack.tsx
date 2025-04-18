"use client";

import { useState } from 'react';

// Define types for technology categories and items
interface TechItem {
  name: string;
  color?: string;
}

interface TechCategory {
  name: string;
  items: TechItem[];
}

// Define tech stack data
const techCategories: TechCategory[] = [
  {
    name: "Backend",
    items: [
      { name: "Node.js", color: "#539e43" },
      { name: "Express.js", color: "#000000" },
      { name: "Java", color: "#e76f00" },
      { name: "Firebase", color: "#ffca28" },
      { name: "PHP", color: "#777bb3" }
    ]
  },
  {
    name: "Frontend",
    items: [
      { name: "React", color: "#61dafb" },
      { name: "Next.js", color: "#000000" },
      { name: "Tailwind CSS", color: "#38b2ac" },
      { name: "TypeScript", color: "#3178c6" }
    ]
  },
  {
    name: "Database",
    items: [
      { name: "MongoDB", color: "#47a248" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "MySQL", color: "#4479a1" }
    ]
  },
  {
    name: "Cloud",
    items: [
      { name: "AWS", color: "#ff9900" },
      { name: "Firebase", color: "#ffca28" },
      { name: "Vercel", color: "#000000" }
    ]
  },
  {
    name: "Mobile",
    items: [
      { name: "React Native", color: "#61dafb" },
      { name: "Flutter", color: "#02569b" }
    ]
  },
  {
    name: "CMS",
    items: [
      { name: "WordPress", color: "#21759b" },
      { name: "Strapi", color: "#2f2e8b" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Backend");

  const activeTech = techCategories.find(cat => cat.name === activeCategory)?.items || [];

  return (
    <section id="tech-stack" className="py-20 px-6 md:px-10">
      <div className="text-center mb-12">
        <p className="text-sm font-medium uppercase tracking-wider mb-2">MY TECH STACK</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Technologies I Work With
          <div className="h-1 w-24 bg-black mx-auto mt-2"></div>
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          A comprehensive stack of modern technologies that I use to build robust and
          scalable applications
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {techCategories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`px-6 py-3 rounded-md border text-sm font-medium transition-colors
              ${activeCategory === category.name 
                ? 'bg-black text-white' 
                : 'bg-white text-black hover:bg-gray-100'}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Tech Items Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {activeTech.map((tech) => (
          <div key={tech.name} className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all border border-black/5">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <div className="absolute inset-0 -right-2 -bottom-2 bg-black z-0 rounded-lg transform rotate-3"></div>
                <div className="relative z-10 w-full h-full bg-white border border-black/10 rounded-lg flex items-center justify-center p-4">
                  <div 
                    className="w-full h-full flex items-center justify-center text-white font-medium" 
                    style={{ backgroundColor: tech.color || '#888888' }}
                  >
                    {tech.name.substring(0, 2)}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-medium text-center">{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 