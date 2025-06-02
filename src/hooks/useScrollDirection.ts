import { useState, useEffect, useRef } from 'react';
import { throttle } from '../utils/performanceUtils';

/**
 * Type representing scroll direction
 */
export type ScrollDirection = 'up' | 'down' | 'none';

/**
 * Interface for hook options
 */
interface UseScrollDirectionOptions {
  threshold?: number;
  initialDirection?: ScrollDirection;
  off?: boolean;
  topOffset?: number; // New option to define what "top" means
}

/**
 * Custom hook to detect scroll direction with optimized performance
 */
const useScrollDirection = ({
  threshold = 10,
  initialDirection = 'none',
  off = false,
  topOffset = 50
}: UseScrollDirectionOptions = {}) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollYRef = useRef(0); // Use ref for lastScrollY to avoid re-renders
  useEffect(() => {
    if (off) return;

    // Initialize last scroll position on mount
    lastScrollYRef.current = window.scrollY;
    
    // Check if at top
    setIsAtTop(window.scrollY < topOffset);

    // Use throttle to limit execution frequency for better performance
    const updateScrollDirection = throttle(() => {
      const currentScrollY = window.scrollY;
      
      // Check if at top
      if (currentScrollY < topOffset) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      
      // Only update direction if change exceeds threshold
      if (Math.abs(currentScrollY - lastScrollYRef.current) < threshold) {
        return;
      }
      
      // Determine scroll direction
      const newScrollDirection = currentScrollY > lastScrollYRef.current ? 'down' : 'up';
      
      setScrollDirection(newScrollDirection);
      lastScrollYRef.current = currentScrollY;
      
    }, 100); // Throttle to run at most every 100ms

    window.addEventListener('scroll', updateScrollDirection);
    
    // Return a cleanup function that removes the event listener
    return () => window.removeEventListener('scroll', updateScrollDirection);
  }, [off, threshold, topOffset]);

  return { scrollDirection, isAtTop };
};

export default useScrollDirection;
