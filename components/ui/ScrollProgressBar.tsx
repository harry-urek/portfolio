'use client';

import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScrollPos = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentScrollPos / scrollHeight) * 100);
      }
    };

    // Initial calculation
    updateScrollProgress();

    // Add event listener for scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Cleanup
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar" 
        style={{ width: `${scrollProgress}%`,height:'3px' }}
      />
    </div>
  );
};

export default ScrollProgressBar; 