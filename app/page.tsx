"use client";

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import WhyChooseMe from '@/components/WhyChooseMe';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
  // Activate reveal sections on scroll and setup cursor interaction
  useEffect(() => {
    // Reveal sections on scroll
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

    // Magnetic button effect
    const buttons = document.querySelectorAll('.magnetic-button');
    
    buttons.forEach(button => {
      const magneticButton = button as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = magneticButton.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const moveX = (x - centerX) / 10;
        const moveY = (y - centerY) / 10;
        
        magneticButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
      };
      
      const handleMouseLeave = () => {
        magneticButton.style.transform = 'translate(0, 0)';
      };
      
      magneticButton.addEventListener('mousemove', handleMouseMove);
      magneticButton.addEventListener('mouseleave', handleMouseLeave);
      
      // Store event handlers for cleanup
      const buttonData = {
        element: magneticButton,
        moveHandler: handleMouseMove,
        leaveHandler: handleMouseLeave
      };
      
      // Add to a data attribute for cleanup
      magneticButton.dataset.handlerAttached = 'true';
    });

    return () => {
      revealSections.forEach(section => {
        observer.unobserve(section);
      });
      
      // Cleanup magnetic button handlers
      buttons.forEach(button => {
        const magneticButton = button as HTMLElement;
        if (magneticButton.dataset.handlerAttached === 'true') {
          // TypeScript doesn't know about our stored handlers, so we simply remove all
          magneticButton.replaceWith(magneticButton.cloneNode(true));
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <WhyChooseMe />
      <Projects />
      <TechStack />
      <Education />
      
    </main>
  );
} 