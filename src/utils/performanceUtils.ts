/**
 * Performance optimization utilities for the application
 */

/**
 * Debounce function to limit how often a function can be called
 * Useful for optimizing scroll and resize event handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit how often a function can be called
 * Better for continuous events like scrolling where you want regular updates
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let waiting = false;
  let lastArgs: Parameters<T> | null = null;
  
  return function(...args: Parameters<T>): void {
    if (waiting) {
      lastArgs = args;
      return;
    }
    
    func(...args);
    waiting = true;
    
    setTimeout(() => {
      waiting = false;
      if (lastArgs) {
        func(...lastArgs);
        lastArgs = null;
      }
    }, wait);
  };
}

/**
 * Determines if an element is in the viewport
 * Useful for manual lazy loading implementations
 */
export function isElementInViewport(el: HTMLElement): boolean {
  const rect = el.getBoundingClientRect();
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Detect if the device is a mobile/touch device
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Detect if user has enabled reduced motion preference
 * Important for accessibility and reducing animations when needed
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
