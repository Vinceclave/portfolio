import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

/**
 * Scroll progress indicator component
 */
const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far down the page the user is
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      
      // Calculate scroll percentage
      const scrolled = scrollPx / winHeightPx;
      setScrollProgress(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial call to set progress on first load
    updateScrollProgress();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div 
      className="fixed z-50 top-0 left-0 w-full h-1 bg-transparent"
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: scrollProgress > 0.05 ? 1 : 0
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="h-full bg-gradient-to-r from-[#B56576] to-[#E56B6F]"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </motion.div>
  );
};

export default ScrollIndicator;
