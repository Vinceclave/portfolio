import { useEffect, useState } from 'react';

/**
 * Custom hook to determine which section is currently active based on scroll position
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @returns {string} - The ID of the currently active section
 */
const useActiveSection = (
  sectionIds: string[],
  options = { 
    threshold: 300, // How far from the top of the viewport to consider a section active
    throttleMs: 100 // Throttle scroll events to improve performance
  }
) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  
  useEffect(() => {
    let lastScrollTime = 0;
    
    const handleScroll = () => {
      const now = Date.now();
      
      // Throttle scroll events for better performance
      if (now - lastScrollTime < options.throttleMs) {
        return;
      }
      
      lastScrollTime = now;
      
      // Find which section is currently in view
      const currentSection = sectionIds.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // Consider a section active when its top is within the threshold from the top of the viewport
          return rect.top <= options.threshold && rect.bottom >= options.threshold;
        }
        return false;
      });
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        
        // Optionally update the URL hash without triggering a scroll
        // Replace state is better than directly manipulating window.location.hash
        // as it doesn't add to browser history or trigger scrolling
        window.history.replaceState(null, '', `#${currentSection}`);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Run once on mount to set the initial active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, options.threshold, options.throttleMs]);
  
  return activeSection;
};

export default useActiveSection;
