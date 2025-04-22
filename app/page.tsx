"use client";

import { useEffect, useCallback, useRef } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import WhyChooseMe from '@/components/WhyChooseMe';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Education from '@/components/Education';

export default function Home() {
  // Use refs to store DOM elements and handlers
  const magneticButtonsRef = useRef<{
    element: HTMLElement;
    moveHandler: (e: MouseEvent) => void;
    leaveHandler: () => void;
  }[]>([]);

  // Create a memoized setup function for better performance
  const setupMagneticButtons = useCallback(() => {
    const buttons = document.querySelectorAll('.magnetic-button');

    // Clean up previous handlers if they exist
    if (magneticButtonsRef.current.length > 0) {
      magneticButtonsRef.current.forEach(({ element, moveHandler, leaveHandler }) => {
        element.removeEventListener('mousemove', moveHandler);
        element.removeEventListener('mouseleave', leaveHandler);
      });
      magneticButtonsRef.current = [];
    }

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

      // Store references for cleanup
      magneticButtonsRef.current.push({
        element: magneticButton,
        moveHandler: handleMouseMove,
        leaveHandler: handleMouseLeave
      });
    });
  }, []);

  // Setup intersection observer and magnetic buttons
  useEffect(() => {
    // Create a single IntersectionObserver instance for better performance
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

    // Setup magnetic buttons
    setupMagneticButtons();

    // Cleanup function
    return () => {
      revealSections.forEach(section => {
        observer.unobserve(section);
      });

      // Clean up magnetic button handlers
      if (magneticButtonsRef.current.length > 0) {
        magneticButtonsRef.current.forEach(({ element, moveHandler, leaveHandler }) => {
          element.removeEventListener('mousemove', moveHandler);
          element.removeEventListener('mouseleave', leaveHandler);
        });
        magneticButtonsRef.current = [];
      }
    };
  }, [setupMagneticButtons]);

  return (
    <main className="min-h-screen flex flex-col">
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