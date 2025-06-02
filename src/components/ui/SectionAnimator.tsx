import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';
import type { ReactNode } from 'react';

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
    return variants || {
      hidden: { 
        opacity: 0,
        y: 30
      },
      visible: { 
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
          delay: delay,
        }
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
    >
      {children}
    </motion.div>
  );
};

// Wrap in memo to prevent unnecessary re-renders
export default memo(SectionAnimator);
