import React, { useEffect, useRef, memo, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  id?: string;
  amount?: number;
}

/**
 * AnimatedSection component that animates its children when they come into view
 * Optimized with memoization and improved performance
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variants = fadeInUp,
  delay = 0,
  once = true,
  id,
  amount = 0.1,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
    // Memoize the transition options
  const transitionOptions = useMemo(() => ({ 
    delay, 
    duration: typeof variants?.visible === 'object' && 
      'transition' in variants.visible && 
      typeof variants.visible.transition === 'object' && 
      'duration' in variants.visible.transition ? 
      variants.visible.transition.duration : 0.5 
  }), [delay, variants]);

  useEffect(() => {
    // Only run animation when in view and after initial mount
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, isInView, once]);
  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transitionOptions}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(AnimatedSection);
