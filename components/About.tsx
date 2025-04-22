"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Server, Database, Brain } from 'lucide-react';
import { ScrollReveal, TextReveal, StaggerContainer, StaggerItem } from './animations';

interface SkillItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const skillItems: SkillItem[] = [
  {
    title: "Backend Development",
    description: "Building robust microservices, APIs, and server-side applications with modern frameworks and architectures.",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Database Engineering",
    description: "Designing efficient database schemas, optimizing queries, and implementing data persistence layers.",
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Machine Learning",
    description: "Developing and deploying ML models for classification, recognition, and prediction tasks.",
    icon: <Brain className="w-6 h-6" />
  }
];

export default function About() {
  return (
    <>
      <div className="section-divider"></div>
      <section id="about" className="py-20 px-6 md:px-10 bg-black section-transition relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Column - About Text */}
            <div className="space-y-8 reveal-section relative">
              {/* Neo-brutalist decorative element */}
              <div className="absolute -top-8 -left-8 w-16 h-16 border-t-4 border-l-4 border-[#00FF66] opacity-70"></div>

              <ScrollReveal>
                <motion.p
                  className="text-sm font-medium uppercase tracking-[0.3em] mb-2 text-[#00FF66]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  ABOUT ME
                </motion.p>
              </ScrollReveal>

              <TextReveal>
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-white glitch-text"
                  data-text="CODING ROBUST SYSTEMS"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  CODING <span className="text-[#00FF66]">ROBUST</span> SYSTEMS
                </motion.h2>
              </TextReveal>

              <ScrollReveal delay={0.2}>
                <motion.div
                  className="bg-[#0A0A0A] border border-[#333] p-6 text-gray-300 backdrop-blur-sm"
                  whileHover={{
                    borderColor: "#00FF66",
                    boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)",
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-mono leading-relaxed">
                    I'm a full-stack developer and ML engineer specializing in high-performance
                    backend systems, microservices, and machine learning applications. With expertise
                    in Go, Python, and JavaScript, I focus on creating efficient, scalable solutions
                    for complex problems.
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <motion.div
                  className="bg-[#0A0A0A] border border-[#333] p-6 text-gray-300 backdrop-blur-sm"
                  whileHover={{
                    borderColor: "#00FF66",
                    boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)",
                    y: -5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-mono leading-relaxed">
                    My experience spans developing message brokers, session management libraries, and
                    ML-powered systems. I'm passionate about open-source contributions and continuously
                    learning new technologies to enhance my development capabilities.
                  </p>
                </motion.div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block"
                >
                  <a
                    href="https://github.com/harry-urek"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-black border border-[#00FF66] text-[#00FF66] font-mono flex items-center gap-2 hover:bg-[#00FF66]/10 transition-all"
                  >
                    <span>VIEW GITHUB</span>
                    <ExternalLink size={18} />
                  </a>
                </motion.div>
              </ScrollReveal>

              {/* Neo-brutalist decorative element */}
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-4 border-r-4 border-[#00FF66] opacity-70"></div>
            </div>

            {/* Right Column - Skills */}
            <div className="reveal-section" style={{ transitionDelay: '0.2s' }}>
              <StaggerContainer delay={0.1}>
                <div className="space-y-6">
                  {skillItems.map((skill, index) => (
                    <StaggerItem key={index} delay={index * 0.1}>
                      <motion.div
                        className="bg-[#0A0A0A] border border-[#333] p-8 group relative overflow-hidden"
                        whileHover={{
                          borderColor: "#00FF66",
                          boxShadow: "0 0 20px rgba(0, 255, 102, 0.2)",
                          y: -5
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15
                        }}
                      >
                        {/* Animated corner accent */}
                        <div className="absolute top-0 right-0 grid-item"></div>
                        <div className="absolute bottom-0 left-0 grid-item"></div>

                        {/* Hover glow effect */}
                        <motion.div
                          className="absolute inset-0 opacity-0 bg-[#00FF66] blur-xl z-0 group-hover:opacity-5 transition-opacity duration-300"
                        />

                        <div className="flex items-start gap-4 relative z-10">
                          <motion.div
                            className="p-3 bg-[#00FF66] text-black rounded-none"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {skill.icon}
                          </motion.div>
                          <div>
                            <h3 className="text-xl font-bold mb-2 text-[#00FF66]">{skill.title}</h3>
                            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{skill.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}