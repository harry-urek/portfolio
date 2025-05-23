"use client";

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right' = 'up', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 100,
        duration: 0.7,
        delay
      }
    }
  };
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right', delay: number = 0): Variants => {
  return {
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 80,
        delay
      }
    }
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };
};

export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: 20,
      opacity: 0
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 120,
        delay
      }
    }
  };
};

export const scaleIn = (delay: number = 0): Variants => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8,
        delay
      }
    }
  };
};

// Reveal animation for scrolling into view
export function ScrollReveal({ 
  children, 
  delay = 0.2, 
  duration = 0.5,
  className = "" 
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade up animation (similar to scroll reveal but specific upward animation)
export function FadeUp({ 
  children, 
  delay = 0.2, 
  duration = 0.5,
  className = "" 
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration, 
            delay,
            ease: "easeOut" 
          } 
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Text reveal with character staggering
export function TextReveal({ 
  children, 
  delay = 0, 
  className = "" 
}: AnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.01,
            delayChildren: delay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Container for staggered animations of children
export function StaggerContainer({ 
  children, 
  delay = 0.1,
  className = "" 
}: AnimationProps) {
  const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay
      }
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Individual item in a stagger container
export function StaggerItem({ 
  children, 
  delay = 0,
  className = "" 
}: AnimationProps) {
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay 
      } 
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Scale animation on hover
export function HoverScale({ 
  children, 
  scale = 1.05,
  className = "" 
}: AnimationProps & { scale?: number }) {
  return (
    <motion.div
      whileHover={{ scale }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Fade in animation
export function FadeIn({ 
  children, 
  delay = 0.2, 
  duration = 0.5,
  className = "" 
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Pulse animation for attention
export function PulseAnimation({ 
  children, 
  className = "" 
}: AnimationProps) {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.03, 1],
        boxShadow: [
          "0 0 0 rgba(0, 0, 0, 0.1)",
          "0 4px 6px rgba(0, 0, 0, 0.15)",
          "0 0 0 rgba(0, 0, 0, 0.1)"
        ]
      }}
      transition={{ 
        duration: 2, 
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Enhanced animation components
export const ScrollRevealEnhanced: React.FC<{
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}> = ({ children, delay = 0, threshold = 0.1, direction = 'up', className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn(direction, delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const GlowingBorder: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-lg ${className}`}>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-highlight-1 via-highlight-2 to-highlight-3 rounded-lg opacity-70 blur-md"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="relative bg-background border border-border/40 backdrop-blur-sm rounded-lg z-10">
        {children}
      </div>
    </div>
  );
};

export const TextRevealEnhanced: React.FC<{
  text: string;
  className?: string;
  delay?: number;
}> = ({ text, className = '', delay = 0 }) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span 
          key={index} 
          className="inline-block mr-1"
          variants={child}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export const GradientText: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = '' }) => {
  return (
    <motion.span 
      className={`bg-gradient-to-r from-highlight-1 to-highlight-4 bg-clip-text text-transparent ${className} animate-gradient-x bg-[size:200%_auto]`}
    >
      {text}
    </motion.span>
  );
};

export const StaggerContainerEnhanced: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={staggerContainer(0.1, delay)}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItemEnhanced: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={fadeIn('up', delay)}
    >
      {children}
    </motion.div>
  );
};

export const FloatingElement: React.FC<{
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}> = ({ children, className = '', amplitude = 10, duration = 4 }) => {
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [`${-amplitude/2}px`, `${amplitude/2}px`, `${-amplitude/2}px`],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export const ShimmerButton: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ children, className = '', onClick }) => {
  return (
    <motion.button
      className={`relative overflow-hidden bg-background border border-highlight-2/30 px-6 py-3 rounded-md ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-highlight-3/30 to-transparent"
        style={{ backgroundSize: '200% 100%' }}
        animate={{ backgroundPosition: ['100% 0%', '-100% 0%'] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};