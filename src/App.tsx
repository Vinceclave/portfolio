import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { ThemeProvider } from './contexts/ThemeContext'
import ScrollIndicator from './components/ui/ScrollIndicator'
import ScrollToTopButton from './components/ui/ScrollToTopButton'
import SectionNavigationDots from './components/ui/SectionNavigationDots'
import PageLoader from './components/ui/PageLoader'
import useScrollToSection from './hooks/useScrollToSection'
import emailjs from '@emailjs/browser';


// Import the shared motion variants
import { scrollSectionVariants } from './utils/motionVariants';

const App = () => {
  const scrollToSection = useScrollToSection();
  const sections = ['home', 'about', 'projects', 'contact'];
  
  // Add this inside your main component or in useEffect
    useEffect(() => {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);
  
  // Fix the issue with navigating to sections using URL hash
  useEffect(() => {
    // Check if there's a hash in the URL when the app loads
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure the page is fully loaded
        setTimeout(() => {
          scrollToSection(id);
        }, 100);
      }
    }
  }, [scrollToSection]);

  return (
    <ThemeProvider>
      <PageLoader />
      <motion.div 
        className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-[#1a202c] dark:text-white transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ScrollIndicator />
        <Header />
        <main className="flex-grow pt-16">
          {/* Home Section */}
          <motion.section 
            id="home" 
            className="min-h-screen flex flex-col  items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollSectionVariants}
          >
            <Home />
          </motion.section>
          
          {/* About Section */}
          <motion.section 
            id="about" 
            className="min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollSectionVariants}
          >
            <About />
          </motion.section>
          
          {/* Projects Section */}
          <motion.section 
            id="projects" 
            className="min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollSectionVariants}
          >
            <Projects />
          </motion.section>
          
          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="min-h-screen"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollSectionVariants}
          >
            <Contact />
          </motion.section>
        </main>
        <Footer />
        <ScrollToTopButton />
        <SectionNavigationDots sections={sections} onDotClick={scrollToSection} />
      </motion.div>
    </ThemeProvider>
  )
}

export default App