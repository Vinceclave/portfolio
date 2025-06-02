import React, { useState, useEffect, useRef, ReactNode, memo } from 'react';

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
}

/**
 * LazyLoad component that only renders its children when they come into view
 * This helps improve initial page load performance
 */
const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  threshold = 0.1,
  rootMargin = "200px 0px", 
  placeholder = <div className="min-h-[100px] bg-gray-100 dark:bg-gray-800/50 animate-pulse rounded-lg"></div>
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
          // Once it's visible, no need to observe anymore
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(currentRef);

    // Cleanup the observer when component unmounts
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [rootMargin, threshold]);

  // If it has been visible before, always render the children (prevents content flashing on re-render)
  if (hasBeenVisible) {
    return <>{children}</>;
  }

  // Show either the children or placeholder based on visibility
  return (
    <div ref={ref}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default memo(LazyLoad);
