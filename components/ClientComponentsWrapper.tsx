"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import client-only components with SSR disabled
const CustomCursor = dynamic(() => import('./ui/CustomCursor'), { ssr: false });
const ScrollProgressBar = dynamic(() => import('./ui/ScrollProgressBar'), { ssr: false });

const ClientComponentsWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure components only render after client-side hydration is complete
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgressBar />
    </>
  );
};

export default ClientComponentsWrapper;