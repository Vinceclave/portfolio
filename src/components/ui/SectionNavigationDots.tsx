import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useActiveSection from '../../hooks/useActiveSection';

interface SectionNavigationDotProps {
  sections: string[];
  onDotClick: (section: string) => void;
}

/**
 * Component that displays a vertical navigation dots indicating
 * current scroll position and allows jumping to sections
 */
const SectionNavigationDots = ({ sections, onDotClick }: SectionNavigationDotProps) => {
  const activeSection = useActiveSection(sections);
  const [isVisible, setIsVisible] = useState(false);
  
  // Only show navigation dots after scrolling down a bit
  useEffect(() => {
    const checkScrollPosition = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };
    
    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition(); // Initialize
    
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);
  
  if (!isVisible) return null;
  
  return (
    <motion.div 
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:flex flex-col items-center justify-center gap-4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((section) => (
        <motion.button
          key={section}
          onClick={() => onDotClick(section)}
          className="relative flex items-center justify-center p-1 group focus:outline-none"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Scroll to ${section} section`}
        >
          {/* Dot indicator */}
          <div 
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section 
                ? 'bg-gradient-to-r from-[#B56576] to-[#E56B6F] scale-110' 
                : 'bg-[#355070]/30 dark:bg-white/30 hover:bg-[#355070]/50 dark:hover:bg-white/50'
            }`}
          />
          
          {/* Section label that appears on hover */}
          <div className="absolute right-8 origin-right scale-0 group-hover:scale-100 transition-transform duration-200">
            <div className="bg-[#355070] dark:bg-[#f8f9fa] text-white dark:text-[#1a202c] text-xs py-1 px-2 rounded capitalize whitespace-nowrap">
              {section}
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default SectionNavigationDots;
