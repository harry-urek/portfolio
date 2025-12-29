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
    company: "BugOwl AI",
    role: "Backend Developer",
    period: "Sep 2025 - Present",
    description: "BugOwl AI is a Mumbai-based startup focused on AI-powered content creation. Working remotely as a backend developer building scalable audio and AI pipelines using FastAPI, React Native, GCP, Supabase, Vertex AI, Firebase, and FFmpeg.",
    contributions: [
      "Optimized text-to-speech pipeline by migrating from short-form to long-form audio generation using SSML, reducing API calls from 30–40 to 2–3 per script and lowering CPU utilization during audio stitching with FFmpeg.",
      "Introduced an in-memory LIFO caching mechanism for signed URL retrieval from GCP bucket, improving response times by 10x (from 10s to 2–3s) for script assets after initial load.",
      "Integrated Vertex AI and Gemini to auto-generate AI-based poster images and enhance voice synthesis with enriched dialogue and scene context for lifelike voice generation.",
      "Implemented Dodo payment gateway and developed a subscription-based model, enabling seamless in-app purchases and recurring revenue management."
    ]
  },
  {
    company: "RestoTag",
    role: "Backend Developer (Freelance)",
    period: "June 2025 - September 2025",
    description: "RestoTag is a restaurant management platform based in Ahmedabad, Gujarat. Engaged as a freelance backend developer to re-architect and scale the backend infrastructure using FastAPI, Django, AWS (EKS, ECS), Docker, PostgreSQL, and CI/CD pipelines.",
    contributions: [
      "Re-architected the backend by migrating from Django (MVP) to FastAPI, building a scalable restaurant management platform featuring QR-based table booking, live menu updates, and real-time order tracking.",
      "Implemented a multi-level role-based access system for owners, managers, chefs, and staff to streamline workflows and order processing.",
      "Automated containerized deployments with Docker and CI/CD pipelines on AWS (EKS/ECS), ensuring reliable, low-downtime production releases.",
      "Resolved critical real-time synchronization issues using Redis PUB/SUB, TCP, websockets to maintain consistent communication between staff and kitchen teams.",
      "Collaborated with early restaurant clients to onboard systems, troubleshoot backend workflows, and optimize initial production performance."
    ]
  },
  {
    company: "Detour Berlin",
    role: "Backend Developer (Freelance)",
    period: "Jan 2025 - Mar 2025",
    description: "Detour Berlin is a Germany-based fashion tech startup launching a luxury, membership-based clothing brand. Engaged as a freelance backend developer to build scalable backend infrastructure using FastAPI, Redis, Docker, AWS, PostgreSQL, and CI/CD pipelines.",
    contributions: [
      "Developed a modular FastAPI backend for a luxury e-commerce platform with secure token-based authentication, role-based access control, and well-structured APIs for scalability.",
      "Automated CI/CD pipelines with Dockerized AWS deployments to ensure reliable releases and minimal downtime.",
      "Integrated Redis caching and asynchronous job queues to handle flash sales and heavy user loads, reducing API latency and improving scalability.",
      "Implemented object storage for product thumbnails and server-side image preloading, significantly enhancing response times and user experience during peak traffic.",
      "Built a real-time analytics pipeline that tagged products and tracked their cart additions, tag co-occurrence patterns, and purchase frequency.",
      "Processed data to train a Random Forest model that predicted high-conversion tags, enabling the business team to identify and procure products with the greatest sales potential."
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