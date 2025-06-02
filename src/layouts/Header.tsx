import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { navigationLinks } from '../data/navigationLinks';
import useScrollToSection from '../hooks/useScrollToSection';
import useActiveSection from '../hooks/useActiveSection';
import useScrollDirection from '../hooks/useScrollDirection';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sections = ['home', 'about', 'projects', 'contact'];
  const activeSection = useActiveSection(sections);
  const scrollToSection = useScrollToSection();
  
  // Add ref for mobile menu to implement focus trap
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  // Use our custom scroll direction hook with enhanced options
  const { scrollDirection, isAtTop } = useScrollDirection({
    threshold: 15, // Increase threshold for smoother transitions
    initialDirection: 'none', 
    off: false,
    topOffset: 50 // Define when we consider the page to be at "top"
  });
  
  // Use effect to handle state updates based on scroll direction
  // This avoids potential issues with state updates during render
  useEffect(() => {
    // Always show header when at top of page
    if (isAtTop) {
      setIsVisible(true);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
      
      // Update visibility based on scroll direction
      if (scrollDirection === 'down') {
        setIsVisible(false);
      } else if (scrollDirection === 'up') {
        setIsVisible(true);
      }
    }
  }, [scrollDirection, isAtTop]);
  
  // Handle focus trap for accessibility when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableEls = mobileMenuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      
      if (focusableEls.length > 0) {
        const firstFocusable = focusableEls[0] as HTMLElement;
        const lastFocusable = focusableEls[focusableEls.length - 1] as HTMLElement;
        
        // Focus the first element
        firstFocusable.focus();
        
        // Handle tab key to trap focus
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
              if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
              }
            } else { // Tab
              if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
              }
            }
          }
          
          // Close on escape key
          if (e.key === 'Escape') {
            setIsMobileMenuOpen(false);
          }
        };
        
        document.addEventListener('keydown', handleTabKey);
        return () => {
          document.removeEventListener('keydown', handleTabKey);
        };
      }
    }
  }, [isMobileMenuOpen]);
  
  return (  <motion.header 
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#355070]/95 shadow-lg backdrop-blur-sm text-white dark:bg-[#1a202c]/95 dark:text-white' 
          : 'py-5 bg-white/95 backdrop-blur-sm text-[#355070] dark:bg-white/90 dark:text-[#1a202c]'
      }`}
      initial={{ y: -100 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0.8,
        scale: isVisible ? 1 : 0.98,
        transition: {
          y: {
            type: isVisible ? 'spring' : 'tween',
            stiffness: 400,
            damping: 30,
            duration: isVisible ? 0.5 : 0.2
          },
          opacity: {
            duration: isVisible ? 0.4 : 0.15
          },
          scale: {
            duration: 0.3
          }
        }
      }}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => {              e.preventDefault();
              scrollToSection('home');
            }} 
            className="flex items-center group"
          >            <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#E56B6F] to-[#EAAC8B] flex items-center justify-center mr-2 xs:mr-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <FaCode className="text-white text-base xs:text-lg sm:text-xl" />
            </div>
            <div>
              <h1 className={`text-xl xs:text-xl sm:text-2xl font-luckiest tracking-wide transform -rotate-1 group-hover:rotate-0 transition-transform duration-300 ${
                isScrolled ? 'text-white' : 'text-[#355070] dark:text-[#1a202c]'
              }`}>
                beans<span className="text-[#E56B6F]">dev</span>
              </h1>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navigationLinks.map((item) => {
                const sectionId = item.path.replace('#', '')
                return (
                  <li key={item.name}>
                    <a 
                      href={item.path}
                      onClick={(e) => {                        e.preventDefault();
                        scrollToSection(sectionId);
                      }}
                      className={`${
                        isScrolled 
                          ? 'text-[#f8f9fa] hover:text-[#EAAC8B]' 
                          : 'text-[#355070] hover:text-[#B56576] dark:text-[#1a202c] dark:hover:text-[#B56576]'
                        } text-sm font-opensans tracking-wide transition-all duration-300 relative group ${
                        activeSection === sectionId ? (isScrolled ? 'text-[#EAAC8B]' : 'text-[#B56576]') : ''
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B] transition-all duration-300 ${
                        activeSection === sectionId ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
            {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="#contact" 
              onClick={(e) => {                e.preventDefault();
                scrollToSection('contact');
              }}
              className="inline-block px-5 py-2 bg-gradient-to-r from-[#B56576] to-[#E56B6F] rounded-md text-white text-sm font-opensans font-medium hover:from-[#E56B6F] hover:to-[#B56576] transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden focus:outline-none p-2 ${
              isScrolled ? 'text-white' : 'text-[#355070] dark:text-[#1a202c]'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 xs:h-6 xs:w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
          {/* Mobile Menu */}        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              ref={mobileMenuRef} // Attach ref to mobile menu
              className={`md:hidden mt-3 py-4 ${
                isScrolled 
                  ? 'bg-[#355070]/95 text-white dark:bg-[#1a202c]/95 dark:text-white' 
                  : 'bg-white/95 text-[#355070] dark:bg-white/90 dark:text-[#1a202c]'
                } backdrop-blur-md rounded-lg shadow-lg`}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30, 
                duration: 0.3 
              }}
            >
              <ul className="flex flex-col space-y-3 px-4">
                {navigationLinks.map((item) => {
                  const sectionId = item.path.replace('#', '')
                  return (
                    <li key={item.name}>                      <a 
                        href={item.path}
                        className={`${
                          isScrolled 
                            ? 'text-[#f8f9fa] hover:text-[#EAAC8B]' 
                            : 'text-[#355070] hover:text-[#B56576] dark:text-[#1a202c] dark:hover:text-[#B56576]'
                          } text-sm font-opensans tracking-wide transition-colors flex items-center py-1.5 ${
                          activeSection === sectionId ? (isScrolled ? 'text-[#EAAC8B]' : 'text-[#B56576]') : ''
                        }`}                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(sectionId);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <span className="mr-2 text-[#E56B6F]">›</span>
                        {item.name}
                      </a>
                    </li>                  );
                })}
                <li className="pt-2 mt-2 border-t border-[#EAAC8B]/20">
                  <a 
                    href="#contact"
                    className="inline-block px-4 py-2 bg-gradient-to-r from-[#B56576] to-[#E56B6F] rounded-md text-white text-sm font-medium hover:from-[#E56B6F] hover:to-[#B56576] w-full text-center"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

// Use React.memo to prevent unnecessary re-renders
import { memo } from 'react';
export default memo(Header);