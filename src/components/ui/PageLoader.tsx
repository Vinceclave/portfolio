import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageLoader component that shows a loading animation when the page first loads
 */
const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for at least 1 second
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f8f9fa] dark:bg-[#1a202c]"
        >
          <div className="flex flex-col items-center">
            {/* Logo animation */}
            <motion.div
              className="w-20 h-20 mb-6 rounded-lg bg-gradient-to-br from-[#E56B6F] to-[#EAAC8B] flex items-center justify-center shadow-md"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <span className="text-white text-3xl font-luckiest tracking-wide">b</span>
            </motion.div>
            
            {/* Loading text */}
            <motion.p
              className="text-[#355070] dark:text-[#f8f9fa] font-opensans tracking-wider"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Loading...
            </motion.p>
            
            {/* Loading bar */}
            <div className="w-48 h-1 bg-[#355070]/10 dark:bg-[#f8f9fa]/10 rounded-full mt-4 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B56576] to-[#E56B6F]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
