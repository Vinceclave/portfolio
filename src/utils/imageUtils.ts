/**
 * Helper functions for image handling
 */

/**
 * Get image URL from path, handling both local and external URLs
 * @param src Image path or URL
 * @returns Properly formatted image URL
 */
export function getImageUrl(src: string): string {
  // Check if the image is an external URL
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // Check if image starts with / for public directory
  if (src.startsWith('/')) {
    // For Vite, we can use the public directory directly
    return src;
  }
  
  // Otherwise, try to import from assets
  try {
    // This would work with Vite's import.meta.url, but we'll keep it simple
    return `/src/assets/${src}`;
  } catch {
    // Fallback to placeholder if image can't be found
    return '/images/placeholder.jpg';
  }
}

/**
 * Create a blurred placeholder for images that haven't loaded yet
 * @returns CSS properties for blurred placeholder
 */
export function createBlurredPlaceholder(): React.CSSProperties {
  return {
    background: 'linear-gradient(110deg, #f5f5f5 8%, #eeeeee 18%, #f5f5f5 33%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite linear',
  };
}

/**
 * Handle image loading errors
 * @param e Event from image error
 */
export function handleImageError(e: React.SyntheticEvent<HTMLImageElement>): void {
  e.currentTarget.src = '/images/placeholder.jpg';
  e.currentTarget.onerror = null; // Prevent infinite error loop
}
