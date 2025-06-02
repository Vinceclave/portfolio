import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { memo, useMemo } from 'react';

interface SectionAnimatorProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variants?: any;
}

/**
 * SectionAnimator component for consistent section animations
 * Animates children when they come into view while scrolling
 * Optimized with memoization
 */
const SectionAnimator = ({ children, delay = 0, className, variants }: SectionAnimatorProps) => {
  // Memoize animation variants to prevent unnecessary recalculations
  const animationVariants = useMemo(() => {
    // Remove transition from inside the variant object
    return variants || {
      hidden: { 
        opacity: 0,
        y: 30
      },
      visible: { 
        opacity: 1,
        y: 0
        // transition removed from here
      }
    };
  }, [delay, variants]);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={animationVariants}
      className={className}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

// Wrap in memo to prevent unnecessary re-renders
export default memo(SectionAnimator);
