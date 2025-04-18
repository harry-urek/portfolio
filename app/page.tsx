"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseMe from '@/components/WhyChooseMe';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  // Activate reveal sections on scroll
  useEffect(() => {
    const revealSections = document.querySelectorAll('.reveal-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      revealSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Education />
      <WhyChooseMe />
      <Footer />
    </main>
  );
} 