"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Download, Mail, Github, Linkedin, ChevronDown } from 'lucide-react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, slideIn, InteractiveBackgroundAnimation } from './animations';

// Enhanced typewriter with cursor animation
const TypewriterEffect = ({ text, className = "" }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 90); // Slightly slower for more readable typing

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
    }
  }, [currentIndex, text, isTyping, isMounted]);

  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span className={`h-[1.1em] w-[0.6em] bg-neon-green ml-1 ${isTyping ? 'animate-blink' : 'opacity-80'}`}></span>
    </div>
  );
};

// Glitch text effect
const GlitchText = ({ text, className = "" }: { text: string; className?: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const glitchInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setIsMounted(true);

    // Random glitch effect
    const triggerGlitch = () => {
      if (Math.random() > 0.7) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 150);
      }
    };

    glitchInterval.current = setInterval(triggerGlitch, 3000);

    return () => {
      if (glitchInterval.current) clearInterval(glitchInterval.current);
      setIsMounted(false);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 500);
  }, []);

  if (!isMounted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span
      className={`relative ${className} ${isGlitching ? 'glitch-active' : ''}`}
      onMouseEnter={handleMouseEnter}
      data-text={text}
    >
      {text}
      {isGlitching && (
        <>
          <span className="glitch-clone absolute top-0 left-0 w-full h-full" data-text={text}></span>
          <span className="glitch-clone glitch-clone--offset absolute top-0 left-0 w-full h-full" data-text={text}></span>
        </>
      )}
    </span>
  );
};

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);

    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle text glitch effect animation variants
  const glitchTextVariants = {
    hidden: { opacity: 1 }, // Set to visible even when "hidden"
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
      }
    },
    glitch: {
      opacity: 1,
      x: [0, -2, 2, -2, 0],
      y: [0, 1, -1, 1, 0],
      transition: {
        duration: 0.3,
        repeat: 3,
        repeatType: "mirror" as const
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Render a static background first, then interactive one when mounted */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ pointerEvents: 'none' }}>
        <div className="grid-background w-full h-full"></div>
      </div>

      {isMounted && (
        <InteractiveBackgroundAnimation color="var(--neon-green)" density={30} cursorInteractive={true} />
      )}

      {/* Fixed position accent lines - always visible */}
      <div className="absolute top-24 right-0 w-32 h-1 bg-neon-green glow-sm" style={{ pointerEvents: 'none' }}></div>
      <div className="absolute bottom-32 left-0 w-32 h-1 bg-neon-green glow-sm" style={{ pointerEvents: 'none' }}></div>

      <div className="container mx-auto px-6 py-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          {/* Left Column - Text Content (spans 3 columns) */}
          <div className="space-y-10 lg:col-span-3">
            <div className="space-y-8 font-mono">
              {/* Title */}
              <div className="space-y-1">
                <h1 className="text-6xl md:text-7xl font-bold leading-none tracking-tighter font-mono">
                  <div className="flex items-center">
                    <span className="block">Hi,</span>
                    <span className="text-neon-green ml-4">I'm</span>
                  </div>
                  <div className="block mt-4">
                    <GlitchText
                      text="Hari Om"
                      className="text-white"
                    />
                  </div>
                  <div className="block mt-4">Bhardwaj</div>
                </h1>
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold text-primary leading-tight">
                Hi, I&apos;m <span className="border-b-4 border-primary">Hari Om Bhardwaj</span>
              </h1>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <h2 className="text-2xl lg:text-3xl font-medium text-primary">Full Stack Developer & ML Engineer</h2>
            </FadeUp>
            
            <FadeUp delay={0.4}>
              <p className="text-secondary text-lg max-w-2xl">
                I build robust backend systems and ML applications. My expertise includes developing high-performance 
                microservices, messaging systems, and custom machine learning solutions using modern technologies. 
                I&apos;m passionate about open-source contributions and creating efficient, scalable software solutions.
              </p>
            </FadeUp>
            
            <FadeUp delay={0.5}>
              <div className="flex flex-wrap items-center gap-8 py-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-primary rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="text-white" size={22} />
                  </motion.div>
                  <span className="font-bold text-primary text-xl">4+</span>
                  <span className="text-secondary">Projects</span>
                </div>
                 
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="p-3 bg-gradient-primary rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code className="text-white" size={22} />
                  </motion.div>
                  <span className="font-bold text-primary text-xl">3+</span>
                  <span className="text-secondary">Work Experiences</span>
                </div>
              </div>
            </div>

            {/* Animations only apply after client-side hydration */}
            {isMounted && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-5 font-mono absolute top-0 left-0 w-full"
                  style={{ pointerEvents: 'none', touchAction: 'none' }}
                >
                  <motion.div
                    variants={fadeIn('up', 0.1)}
                    className="inline-block px-4 py-2 border border-neon-green/30 backdrop-blur-sm rounded-full text-sm opacity-0"
                  >
                    Computer Science & AI Engineer
                  </motion.div>

                  <div className="space-y-1">
                    <motion.h1
                      className="text-5xl md:text-7xl font-bold leading-none tracking-tighter font-mono opacity-0"
                      initial="hidden"
                      animate="visible"
                      whileHover="glitch"
                      variants={glitchTextVariants}
                    >
                      <motion.span
                        variants={fadeIn('up', 0.2)}
                        className="block"
                      >
                        Hi, I'm
                      </motion.span>
                      <motion.span
                        variants={fadeIn('up', 0.3)}
                        className="block text-neon-green glitch-text mt-2"
                      >
                        Hari O m Bhardwaj
                      </motion.span>

                    </motion.h1>
                  </div>

                  <motion.div variants={fadeIn('up', 0.5)} className="pt-4 opacity-0">
                    <TypewriterEffect
                      text="Backend Developer & ML Engineer"
                      className="text-2xl lg:text-3xl font-medium"
                    />
                  </motion.div>
                </motion.div>
              </>
            )}

            <p className="text-lg text-gray-400 max-w-2xl font-light leading-relaxed">
              I build robust backend systems and ML applications. My expertise includes developing high-performance
              microservices, messaging systems, and custom machine learning solutions using modern technologies.
              I'm passionate about open-source contributions and creating efficient, scalable software solutions.
            </p>

            <div className="flex flex-wrap items-center gap-8 py-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-full">
                  <Github className="text-neon-green" size={22} />
                </div>
                <span className="font-bold text-neon-green text-xl">5+</span>
                <span className="text-gray-400 font-mono">Projects</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-3 bg-neon-green/10 border border-neon-green/30 rounded-full">
                  <Mail className="text-neon-green" size={22} />
                </div>
                <span className="font-bold text-neon-green text-xl">7+</span>
                <span className="text-gray-400 font-mono">Clients</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{ pointerEvents: 'auto', position: 'relative', zIndex: 20 }}
              >
                <Link
                  href="/cv.pdf"
                  className="px-8 py-4 bg-gradient-primary text-white rounded-md flex items-center gap-2 hover:opacity-90 transition text-lg"
                  download="Hari_Om_Bhardwaj_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </Link>
              </motion.div>

              <Link
                href="#contact"
                className="button-secondary px-8 py-4 border border-gray-700 hover:border-neon-green/50 rounded-md flex items-center gap-2 transition text-lg group relative z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <span className="font-mono">Let's Talk</span>
                <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </div>

            <div className="flex gap-5 pt-6">
              <a
                href="mailto:hariombhardwaj038@gmail.com"
                className="p-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full hover:border-neon-green transition-colors relative z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <Mail size={22} className="text-gray-300 hover:text-neon-green transition-colors" />
              </a>
              <a
                href="https://github.com/harry-urek"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full hover:border-neon-green transition-colors relative z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <Github size={22} className="text-gray-300 hover:text-neon-green transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/ombhardwaj08/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-black/30 backdrop-blur-sm border border-gray-800 rounded-full hover:border-neon-green transition-colors relative z-20"
                style={{ pointerEvents: 'auto' }}
              >
                <Linkedin size={22} className="text-gray-300 hover:text-neon-green transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column - Image (spans 2 columns) */}
          <div className="relative flex justify-center lg:justify-end lg:col-span-2">
            <div className="relative w-full max-w-[480px] aspect-square group z-10">
              {/* Animated border */}
              <div className="absolute inset-0 border-2 border-neon-green rounded-2xl z-10 glow-sm">
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green"></div>
              </div>

              {/* Image container */}
              <div className="absolute inset-4 overflow-hidden rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm z-20">
                {isMounted ? (
                  <div className="relative w-full h-full">
                    <Image
                      src="/placeholder-profile.jpg"
                      alt="Profile Photo"
                      fill
                      style={{ objectFit: 'cover' }}
                      priority
                      className="transition-all duration-500 grayscale hover:grayscale-0"
                    />

                    {/* Available indicator */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-neon-green rounded-full text-sm font-mono flex items-center gap-2 border border-neon-green/30">
                        <span className="h-2.5 w-2.5 bg-neon-green rounded-full animate-pulse"></span>
                        Available for work
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full bg-black flex items-center justify-center">
                    <span className="text-gray-500">Loading...</span>
                  </div>
                )}
              </div>

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 z-0 opacity-20">
                <div className="grid-background w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator - always visible but only animated on client */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="p-3 rounded-full border border-neon-green/30 bg-black/30 backdrop-blur-sm">
          <ChevronDown className="text-neon-green" size={24} />
        </div>
      </div>

      {isMounted && (
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={scrollToNext}
          style={{ pointerEvents: 'none' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="p-3 rounded-full border border-neon-green/30 bg-black/30 backdrop-blur-sm"
          >
            <ChevronDown className="text-neon-green opacity-0" size={24} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}