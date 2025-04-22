"use client";

import { useEffect, useState, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load client-only components with improved loading strategy
const CustomCursor = dynamic(() => import('./ui/CustomCursor'), {
  ssr: false,
  loading: () => null, // Don't show loading state for cursor
});

const ScrollProgressBar = dynamic(() => import('./ui/ScrollProgressBar'), {
  ssr: false,
  loading: () => null, // Don't show loading state for progress bar
});

const ClientComponentsWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Ensure components only render after client-side hydration is complete
  // with a slight delay for better performance
  useEffect(() => {
    // Mark as mounted immediately
    setIsMounted(true);

    // Slightly delay the visibility of interactive components
    // to prioritize main content rendering first
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything during SSR or initial hydration
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isVisible && (
        <>
          <CustomCursor />
          <ScrollProgressBar />
        </>
      )}
    </>
  );
};

export default ClientComponentsWrapper;