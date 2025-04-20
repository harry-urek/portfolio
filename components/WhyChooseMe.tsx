"use client";

import { ScrollReveal, StaggerContainer, StaggerItem } from './animations';
import { motion } from 'framer-motion';
import { LightbulbIcon, Code2Icon, RocketIcon, BarChart2Icon, CheckIcon } from 'lucide-react';

interface FeatureItem {
  text: string;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: FeatureItem[];
}

export default function WhyChooseMe() {
  const featureCards: FeatureCard[] = [
    {
      icon: <LightbulbIcon className="h-8 w-8" />,
      title: "Problem Solver",
      description: "Turning complex business challenges into elegant, efficient solutions through strategic problem analysis and innovative thinking.",
      features: [
        { text: "Analytical approach to complex issues" },
        { text: "Creative solution architecture" },
        { text: "Root cause identification" },
        { text: "Efficiency-focused resolutions" },
        { text: "Proactive problem anticipation" },
      ]
    },
    {
      icon: <Code2Icon className="h-8 w-8" />,
      title: "Technical Innovator",
      description: "Leveraging cutting-edge technologies to create future-proof solutions that keep your business ahead of the competition.",
      features: [
        { text: "Modern tech stack mastery" },
        { text: "Custom architecture design" },
        { text: "Performance optimization" },
        { text: "Scalable system development" },
        { text: "Integration expertise" },
      ]
    },
    {
      icon: <RocketIcon className="h-8 w-8" />,
      title: "Strategic Partner",
      description: "Working alongside your team as more than just a developer—a strategic ally invested in your long-term business success.",
      features: [
        { text: "Business goal alignment" },
        { text: "Long-term vision planning" },
        { text: "Collaborative approach" },
        { text: "Industry expertise" },
        { text: "Continuous improvement focus" },
      ]
    },
    {
      icon: <BarChart2Icon className="h-8 w-8" />,
      title: "Results Driver",
      description: "Focused on delivering measurable outcomes that directly impact your bottom line and accelerate business growth.",
      features: [
        { text: "ROI-focused development" },
        { text: "Metric-driven solutions" },
        { text: "Impactful deliverables" },
        { text: "Data-informed decisions" },
        { text: "Business value prioritization" },
      ]
    }
  ];

  return (
    <section id="why-choose-me" className="py-24 px-6 md:px-10 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(#222_1px,transparent_1px),linear-gradient(90deg,#222_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      {/* Accent line */}
      <motion.div 
        className="absolute left-0 bottom-0 h-[1px] bg-[#00FF66] z-10"
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
              VALUE PROPOSITION
            </motion.p>
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-8 text-white glitch-text" 
              data-text="WHY CHOOSE ME"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              WHY CHOOSE ME
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              I don't just build software—I solve business problems through technology,
              creating custom solutions that drive real, measurable value.
            </motion.p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureCards.map((card, index) => (
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
                
                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="bg-[#00FF66] p-4 rounded-sm mr-4">
                      <div className="text-black">
                        {card.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mt-2">{card.title}</h3>
                  </div>
                  
                  <p className="mb-6 text-gray-400 min-h-[80px]">
                    {card.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-[#00FF66] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
} 