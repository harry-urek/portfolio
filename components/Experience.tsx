"use client";

import { motion } from 'framer-motion';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './animations';
import { Check, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  contributions: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Detour Berlin",
    role: "Freelance Backend Developer",
    period: "Nov 2023 – Feb 2024",
    description: "Detour Berlin is a Germany-based fashion tech startup launching a luxury, membership-based clothing brand. I was engaged as a freelance backend developer to help translate business concepts into scalable backend infrastructure and advise on the technical feasibility of various product and feature ideas.",
    contributions: [
      "Designed and implemented the backend architecture for a membership-driven e-commerce platform using FastAPI and Next.js.",
      "Developed secure authentication and authorization flows for the membership API, ensuring seamless and safe user access.",
      "Built a business insights dashboard to track member and customer analytics for strategic decision-making.",
      "Integrated object storage solutions to optimize image rendering during limited-time clothing drops.",
      "Implemented server-side caching to reduce latency and ensure high performance during exclusive product releases.",
      "Set up data tracking pipelines for historical drop analysis to inform future product development and marketing strategies.",
      "Established CI/CD pipelines for internal APIs to enable reliable and scalable future development.",
      "Managed deployment through Vercel, optimizing frontend/backend synergy."
    ]
  },
  {
    company: "Gradio",
    role: "Open Source Contributor",
    period: "Jan 2023 - Jul 2023",
    description: "Enhanced open-source Gradio library by implementing streamlined workflows, consolidating tickets, and resolving assert vulnerability issues.",
    contributions: [
      "Implemented streamlined workflows for UI component development",
      "Consolidated and resolved backlog tickets to improve code quality",
      "Fixed assert vulnerability issues in multiple components",
      "Improved code maintainability by developing custom Error classes aligned with project requirements",
      "Participated in code reviews and provided feedback to other contributors",
      "Documented API changes and features in the official documentation"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-10 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Neon accent line */}
      <motion.div 
        className="absolute left-0 top-0 h-[1px] bg-[#00FF66] z-10"
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.p 
              className="text-sm font-medium uppercase tracking-[0.3em] mb-2 text-[#00FF66]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PROFESSIONAL JOURNEY
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 text-white glitch-text" 
              data-text="EXPERIENCE"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              EXPERIENCE
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              A detailed look at my work experience and key contributions across different roles.
            </motion.p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceData.map((item, index) => (
            <StaggerItem key={index} delay={index * 0.1}>
              <motion.div
                className="bg-[#0A0A0A] border border-[#333] p-8 h-full group relative overflow-hidden"
                whileHover={{ 
                  borderColor: "#00FF66",
                  boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)",
                  y: -5
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 grid-item"></div>
                <div className="absolute bottom-0 left-0 grid-item"></div>
                
                {/* Hover glow effect */}
                <motion.div 
                  className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
                />
                
                <div className="relative z-10 space-y-4">
                  <div className="border-l-4 border-[#00FF66] pl-4">
                    <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                    <p className="font-medium text-lg text-[#00FF66]">{item.role}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                  </div>
                  
                  <p className="text-gray-400 py-2">{item.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-lg text-white mt-6 mb-4 flex items-center">
                      <span className="text-[#00FF66] mr-2">&#x2192;</span>
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {item.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2 group/item">
                          <Check size={18} className="text-[#00FF66] shrink-0 mt-1 group-hover/item:scale-110 transition-transform" />
                          <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
} 