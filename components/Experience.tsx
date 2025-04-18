"use client";

import { motion } from 'framer-motion';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './animations';
import { Check } from 'lucide-react';

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
    <section id="experience" className="py-20 px-6 md:px-16 bg-black section-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-section">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-wider mb-2 text-gray-400">EXPERIENCE</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              My Professional Journey
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gray-700 to-gray-500 mx-auto mt-2 mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-400">
              A detailed look at my work experience and key contributions across different roles.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="reveal-section"
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <motion.div
                className="bg-gray-900 p-8 rounded-xl shadow-md border border-gray-800 h-full"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                  <div className="flex flex-col space-y-1">
                    <p className="font-medium text-lg text-gray-300">{item.role}</p>
                    <p className="text-gray-500 text-sm">{item.period}</p>
                  </div>
                  
                  <p className="text-gray-400">{item.description}</p>
                  
                  <div>
                    <h4 className="font-bold text-lg text-white mt-6 mb-4 flex items-center">
                      <div className="h-0.5 w-6 bg-gradient-to-r from-gray-700 to-gray-500 mr-2"></div>
                      Key Contributions
                    </h4>
                    <ul className="space-y-3">
                      {item.contributions.map((contribution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check size={20} className="text-gray-300 shrink-0 mt-1" />
                          <span className="text-gray-400">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 