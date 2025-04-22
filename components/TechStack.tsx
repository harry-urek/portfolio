"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code } from 'lucide-react';
import {
  fadeIn,
  staggerContainer,
  slideIn,
  InteractiveBackgroundAnimation
} from './animations';

// Define types for technology categories and items
interface TechItem {
  name: string;
  icon: string;
  color?: string;
}

interface TechCategory {
  name: string;
  items: TechItem[];
}

// Define tech stack data with icons
const techCategories: TechCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "GoLang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg", color: "#00ADD8" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" }
    ]
  },
  {
    name: "Frameworks",
    items: [
      { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", color: "#000000" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", color: "#092E20" },
      { name: "Express", icon: "/tech/express.svg", color: "#000000" },
      { name: "NextJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" }
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
      { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#DC382D" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" }
    ]
  },
  {
    name: "Libraries",
    items: [
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "#EE4C2C" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#150458" },
      { name: "SQLAlchemy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", color: "#D71F00" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" }
    ]
  },
  {
    name: "Tools",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
      { name: "Firebase", icon: "/tech/firebase.svg", color: "#FFCA28" },
      { name: "NodeJS", icon: "/tech/nodejs.svg", color: "#339933" }
    ]
  },
  {
    name: "Others",
    items: [
      { name: "gRPC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "#E10098" },
      { name: "Java", icon: "/tech/java.svg", color: "#007396" },
      { name: "PHP", icon: "/tech/php.svg", color: "#777BB4" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", color: "#009639" }
    ]
  }
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Languages");
  const [activeTech, setActiveTech] = useState<TechItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Make sure we set isClient to true once component is mounted
  useEffect(() => {
    setIsClient(true);
    // Initialize activeTech with the default category items
    const initialItems = techCategories.find(cat => cat.name === "Languages")?.items || [];
    setActiveTech(initialItems);
  }, []);

  // Update activeTech whenever activeCategory changes
  useEffect(() => {
    const items = techCategories.find(cat => cat.name === activeCategory)?.items || [];
    setActiveTech(items);
  }, [activeCategory]);

  const handleCategoryChange = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  return (
    <section id="tech-stack" className="py-32 relative overflow-hidden bg-black">
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
      <div className="absolute top-24 left-0 w-32 h-1 bg-[#00FF66] glow-sm"></div>
      <div className="absolute bottom-32 right-0 w-32 h-1 bg-[#00FF66] glow-sm"></div>

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
            TECHNICAL EXPERTISE
          </motion.p>
          <motion.h2
            className="text-5xl md:text-7xl font-bold mb-8 text-white glitch-text"
            data-text="MY STACK"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            MY <span className="text-[#00FF66]">STACK</span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Modern technologies I leverage to build robust and scalable applications
          </motion.p>
        </motion.div>

        {/* Category Tabs - Using Experience section styling */}
        <motion.div variants={fadeIn('up', 0.2)}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {techCategories.map((category, index) => (
              <motion.button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-6 py-3 transition-all duration-300 border
                  ${activeCategory === category.name
                    ? 'border-[#00FF66] text-[#00FF66] bg-[#00FF66]/10'
                    : 'border-[#333] text-gray-400 hover:border-gray-500'}`}
                whileHover={{
                  y: -2,
                  borderColor: "#00FF66",
                  boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Debug info to check if we have items */}
        {activeTech.length === 0 && isClient && (
          <div className="text-center text-[#00FF66] mb-6">
            Loading {activeCategory} technologies...
          </div>
        )}

        {/* Tech Items Grid */}
        <motion.div
          variants={staggerContainer(0.05, 0.3)}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          key={activeCategory} // Force re-render when category changes
        >
          {isClient && activeTech.map((tech, index) => (
            <motion.div
              key={`${activeCategory}-${tech.name}`}
              variants={fadeIn('up', index * 0.05 + 0.3)}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{
                  y: -5,
                  borderColor: "#00FF66",
                  boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0A0A0A] border border-[#333] p-6 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 grid-item"></div>
                <div className="absolute bottom-0 left-0 grid-item"></div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
                />

                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <div className="w-full aspect-square mb-4 flex items-center justify-center border border-[#333] bg-black/60 p-4 group-hover:border-[#00FF66] transition-colors">
                    <motion.div
                      className="w-full h-full flex items-center justify-center relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="relative w-full h-full">
                        {/* Fallback icon in case the image fails to load */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code size={40} className="text-[#00FF66] opacity-20" />
                        </div>

                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          style={{ objectFit: 'contain' }}
                          className="filter drop-shadow-glow"
                          onError={(e) => {
                            // Show fallback when image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-medium text-[#00FF66] text-center">{tech.name}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}