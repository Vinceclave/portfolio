import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

/**
 * ScrollToTopButton component that appears when user scrolls down
 * and allows them to quickly navigate to the top of the page
 */
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Show button when page is scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 500px
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 25px -5px rgba(229, 107, 111, 0.5)" 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed right-6 bottom-6 p-4 rounded-full bg-gradient-to-r from-[#B56576] to-[#E56B6F] text-white shadow-lg z-50 hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
          style={{
            boxShadow: "0 4px 15px -3px rgba(229, 107, 111, 0.4)"
          }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut" 
            }}
          >
            <FaArrowUp className="text-lg" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;
