"use client";

import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, TextReveal } from './animations';

interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
}

const educationItems: EducationItem[] = [
  {
    institution: "Siksha O Anusandhan University, ITER",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Bhubaneshwar, Odisha, India",
    period: "Sep. 2021 - June 2025",
    gpa: "GPA: 3.1, CGPA(7.91/10.0)"
  },
  {
    institution: "Indian Institute Of Technology-Madras",
    degree: "Bachelor of Science in Data Science",
    location: "Chennai, Tamil Nadu, India",
    period: "Aug. 2023 - Dec. 2027",
    gpa: "GPA: 3.0, CGPA(7.56/10.0)"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 md:px-10 bg-white">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Education</h2>
          <p className="max-w-2xl mx-auto text-secondary">
            My academic background in Computer Science and Data Science
          </p>
        </div>
      </ScrollReveal>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="relative border-l-2 border-secondary/20 pl-10 py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {educationItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="mb-12 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.div 
                className="absolute -left-12 top-0 bg-gradient-primary p-2 rounded-full text-white"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.3, 
                  type: "spring",
                  stiffness: 300 
                }}
              >
                <GraduationCap size={20} />
              </motion.div>
              <motion.div 
                className="bg-white p-6 rounded-lg shadow-md border border-secondary/10"
                whileHover={{ 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  y: -5
                }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }}
              >
                <TextReveal delay={index * 0.1}>
                  <h3 className="text-xl font-bold mb-1 text-primary">{item.institution}</h3>
                </TextReveal>
                <TextReveal delay={index * 0.1 + 0.1}>
                  <h4 className="text-lg font-medium text-primary mb-2">{item.degree}</h4>
                </TextReveal>
                <motion.div 
                  className="flex items-center text-secondary mb-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Calendar size={16} className="mr-2" />
                  <span>{item.period}</span>
                </motion.div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <motion.p 
                    className="text-secondary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.location}
                  </motion.p>
                  <motion.p 
                    className="mt-1 md:mt-0 font-medium text-primary"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.gpa}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 