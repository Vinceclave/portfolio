import { useCallback, useState, useEffect } from 'react';
import { throttle } from '../utils/performanceUtils';

interface ScrollOptions {
  headerOffset?: number;
  behavior?: ScrollBehavior;
}

/**
 * Enhanced custom hook for smooth scrolling to page sections
 * With performance optimizations for better user experience
 */
const useScrollToSection = () => {
  // Store header height in state to allow dynamic updates
  const [headerHeight, setHeaderHeight] = useState(80);
  
  // Update header height on resize
  useEffect(() => {
    // Calculate header height from the actual header element if possible
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
    
    // Update header height on resize with throttling for performance
    const handleResize = throttle(() => {
      const header = document.querySelector('header');
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    }, 200);
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  /**
   * Enhanced scroll to section function with options
   */
  const scrollToSection = useCallback((sectionId: string, options: ScrollOptions = {}) => {
    // Default options
    const { headerOffset = headerHeight, behavior = 'smooth' } = options;
    
    // Remove the # if it's included
    const id = sectionId.startsWith('#') ? sectionId.substring(1) : sectionId;
    
    const element = document.getElementById(id);
    if (element) {
      // Calculate the position to scroll to
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        // Scroll to element with provided behavior
        window.scrollTo({
          top: offsetPosition,
          behavior
        });
      });
    }
  }, [headerHeight]);
  return scrollToSection;
};

export default useScrollToSection;
