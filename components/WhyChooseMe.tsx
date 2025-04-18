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
      icon: <LightbulbIcon className="h-8 w-8 text-white" />,
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
      icon: <Code2Icon className="h-8 w-8 text-white" />,
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
      icon: <RocketIcon className="h-8 w-8 text-white" />,
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
      icon: <BarChart2Icon className="h-8 w-8 text-white" />,
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
    <section id="why-choose-me" className="py-20 px-6 md:px-10 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-sm font-medium uppercase tracking-wider mb-2 text-gray-400">WHAT I CAN DO FOR YOU</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white flex justify-center items-center">
              Why Choose Me
              <motion.div 
                className="h-1 w-24 ml-4 bg-gradient-to-r from-gray-700 to-gray-500"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 mb-8">
              I don't just build software—I solve business problems through technology,
              creating custom solutions that drive real, measurable value.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureCards.map((card, index) => (
            <StaggerItem key={index} delay={index * 0.1}>
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800 h-full hover:shadow-glow-sm transition-all">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-3 rounded-lg mr-4">
                    {card.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                </div>
                
                <p className="mt-4 mb-6 text-gray-400 min-h-[80px]">
                  {card.description}
                </p>
                
                <ul className="space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
} 