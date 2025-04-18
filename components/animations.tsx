"use client";

import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

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