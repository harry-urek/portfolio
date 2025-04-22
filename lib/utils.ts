import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines Tailwind classes efficiently, merging and removing conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Debounces a function execution for improved performance
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay = 300
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout | null = null;

  return (...args: Parameters<T>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

/**
 * Throttles a function execution to limit repetitive calls
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit = 300
): (...args: Parameters<T>) => void {
  let inThrottle = false;

  return function(...args: Parameters<T>): void {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Lazily initializes a value for better performance
 */
export function lazyInit<T>(factory: () => T): () => T {
  let value: T | undefined;
  return () => {
    if (value === undefined) {
      value = factory();
    }
    return value;
  };
}

/**
 * Performs image preloading for smoother transitions
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Batch preloads multiple images
 */
export function preloadImages(sources: string[]): Promise<void[]> {
  return Promise.all(sources.map(preloadImage));
}

/**
 * Detects if code is running on the client side
 */
export const isClient = typeof window !== 'undefined';

/**
 * Returns a function that executes only in client environment
 */
export function onlyClient<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined {
  return (...args: Parameters<T>) => {
    if (isClient) {
      return fn(...args);
    }
    return undefined;
  };
}

/**
 * Determines if the device is likely a mobile device
 */
export const isMobileDevice = onlyClient(() => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
});

/**
 * Determines if user prefers reduced motion
 */
export const prefersReducedMotion = onlyClient(() => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
});

/**
 * Determines if device supports hover
 */
export const supportsHover = onlyClient(() => {
  return window.matchMedia('(hover: hover)').matches;
});

/**
 * Formats a number with suffixes (K, M, etc.)
 */
export function formatNumber(num: number): string {
  if (num < 1000) return num.toString();
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`;
  return `${(num / 1000000).toFixed(1)}M`;
}

/**
 * Returns smaller of viewport width or height for responsive calculations
 */
export const getViewportMinDimension = onlyClient(() => {
  return Math.min(window.innerWidth, window.innerHeight);
});