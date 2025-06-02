/**
 * Animation variants for use with Framer Motion
 */
import type { Variants } from 'framer-motion';

/**
 * Fade in animation with y-axis movement
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

/**
 * Fade in animation with y-axis movement (slower)
 * For larger elements like section headings
 */
export const fadeInUpSlow: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  }
};

/**
 * Fade in animation with x-axis movement from left
 */
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

/**
 * Fade in animation with x-axis movement from right
 */
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

/**
 * Scale up animation
 */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  }
};

/**
 * Stagger children animations
 */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

/**
 * Faster stagger children animations
 */
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    }
  }
};

/**
 * Animation for page transitions
 */
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

/**
 * Hover animation for interactive elements
 */
export const hoverScale = {
  scale: 1.05,
  transition: { type: 'spring', stiffness: 300, damping: 10 }
};

/**
 * Tap animation for interactive elements
 */
export const tapScale = {
  scale: 0.95,
  transition: { type: 'spring', stiffness: 500, damping: 10 }
};

/**
 * Scroll section animation variants - for use with sections in App.tsx
 */
export const scrollSectionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
