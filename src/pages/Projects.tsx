import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useState, useCallback, useMemo } from 'react'
import { projectsData } from '../data/projectsData'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import AnimatedSection from '../components/ui/AnimatedSection'
import { staggerContainer, fadeInUp, scaleUp } from '../utils/motionVariants'

// Project filter types
type FilterType = 'All' | 'Web' | 'Mobile' | 'Design';

const Projects = () => {
  // State for filter functionality
  const [activeFilter, setActiveFilter] = useState<FilterType>('All')
  
  // Memoized filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return projectsData;
    }
    return projectsData.filter(project => 
      project.tags.some(tag => tag.includes(activeFilter))
    );
  }, [activeFilter]);
  
  // Handle filter change
  const handleFilterChange = useCallback((filter: FilterType) => {
    setActiveFilter(filter);
  }, []);
  return (
    <>      {/* Projects Hero Section - Startup Style */}
      <AnimatedSection className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background decorative elements */}        <motion.div 
          className="absolute -z-10 w-64 xs:w-72 sm:w-96 md:w-[32rem] h-64 xs:h-72 sm:h-96 md:h-[32rem] rounded-full -left-20 -top-20 opacity-10 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "easeInOut",
            repeatDelay: 0
          }}
        />
        
        <motion.div 
          className="absolute -z-10 w-48 xs:w-56 sm:w-72 md:w-96 h-48 xs:h-56 sm:h-72 md:h-96 rounded-full -right-10 bottom-10 opacity-10 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "easeInOut",
            delay: 2,
            repeatDelay: 0
          }}
        />
        
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute w-8 h-8 rounded-full border border-[#E56B6F]/20 top-20 right-1/3"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute w-5 h-5 rounded-full bg-[#EAAC8B]/10 left-1/4 bottom-10"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <div className="text-center max-w-3xl mx-auto relative">
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-luckiest text-[#355070] dark:text-[#f8f9fa] leading-tight mb-4 xs:mb-5 sm:mb-6 relative inline-block"
            variants={fadeInUp}
            custom={1}
          >
            My <span className="text-[#E56B6F] relative">
              Projects
              <motion.span 
                className="absolute -bottom-1 xs:-bottom-2 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-[#E56B6F]/40 to-[#EAAC8B]/60"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </span>
            
            {/* Decorative elements */}            <motion.div
              className="absolute -right-6 -top-6"
              initial={{ opacity: 0, y: 10, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: 12 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <img src="/images/star.png" alt="Star" className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9" />
            </motion.div>
          </motion.h1>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            Here are some of the projects I've worked on. Each project showcases different skills
            and technologies I've mastered over the years.
          </motion.p>
          
          {/* Startup-style indicator dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {[...Array(3)].map((_, i) => (
              <motion.div 
                key={i} 
                className="w-1.5 h-1.5 rounded-full bg-[#E56B6F]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + i * 0.2, duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </AnimatedSection>      {/* Projects Grid - Startup Style */}
      <AnimatedSection 
        className="container mx-auto px-3 xs:px-4 sm:px-6 pb-10 xs:pb-12 sm:pb-16 md:pb-20"
        variants={staggerContainer}
      >        {/* Project Filter Tabs - Startup Style with functional filtering */}
        <motion.div 
          className="flex items-center justify-center flex-wrap gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            className={`px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full ${
              activeFilter === 'All' 
                ? 'bg-[#E56B6F] text-white shadow-md' 
                : 'bg-[#355070]/5 dark:bg-white/5 text-[#355070] dark:text-[#f8f9fa]/80 border border-[#E56B6F]/10'
            } text-xs xs:text-sm font-medium transition-colors`}
            onClick={() => handleFilterChange('All')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All Projects
          </motion.button>
          {['Web', 'Mobile', 'Design'].map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => handleFilterChange(filter as FilterType)}
              className={`px-3 xs:px-4 sm:px-5 py-1.5 xs:py-2 rounded-full ${
                activeFilter === filter 
                  ? 'bg-[#E56B6F] text-white shadow-md' 
                  : 'bg-[#355070]/5 dark:bg-white/5 text-[#355070] dark:text-[#f8f9fa]/80 border border-[#E56B6F]/10'
              } text-xs xs:text-sm font-medium hover:bg-[#E56B6F]/10 transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white/90 dark:bg-[#2d3748]/90 backdrop-blur-sm rounded-lg xs:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#EAAC8B]/10 relative"
              variants={scaleUp}
              custom={index}
              whileHover={{ y: -5 }}
            >
              {/* Startup-style project number */}
              <div className="absolute top-3 right-3 z-20 bg-white/80 dark:bg-[#1a202c]/80 backdrop-blur-sm rounded-full w-6 h-6 xs:w-7 xs:h-7 flex items-center justify-center border border-[#E56B6F]/30">
                <span className="font-bold text-xs text-[#E56B6F]">0{index + 1}</span>
              </div>
              
              {/* Project Image - Startup Style */}              <div className="h-40 xs:h-48 sm:h-52 md:h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-dot-pattern opacity-30 z-10 mix-blend-overlay"></div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  fallbackSrc="/images/placeholder.svg"
                  lazy={index > 1} // Only eager-load the first two projects
                  width={500}
                  height={280}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Enhanced overlay with gradient and animated elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#355070]/90 via-[#355070]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end z-10">
                  {/* Startup-style decorative elements */}
                  <motion.div 
                    className="absolute top-1/3 right-1/4 w-12 h-12 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                  
                  <motion.div 
                    className="absolute top-1/2 left-1/4 w-8 h-8 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{ scale: [0, 1] }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  
                  <div className="p-3 xs:p-4 text-white w-full">
                    <h3 className="font-luckiest text-sm xs:text-base relative">
                      <span className="relative z-10">{project.title}</span>
                      <motion.div 
                        className="h-0.5 bg-[#E56B6F] absolute bottom-0 left-0"
                        initial={{ width: 0 }}
                        whileInView={{ width: "40%" }}
                        viewport={{ once: true }}
                      />
                    </h3>
                  </div>
                </div>
              </div>              {/* Project Content - Startup Style */}
              <div className="p-4 xs:p-5 sm:p-6 relative">   
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#EAAC8B]/5 to-transparent"></div>
                             
                <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mb-2 xs:mb-2.5 sm:mb-3">
                  {project.tags.map((tag, index) => (
                    <motion.span 
                      key={index} 
                      className="text-xs bg-gradient-to-r from-[#EAAC8B]/10 to-[#E56B6F]/10 dark:from-[#EAAC8B]/20 dark:to-[#E56B6F]/20 text-[#355070] dark:text-[#EAAC8B] px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-md font-opensans border border-[#EAAC8B]/10 dark:border-[#EAAC8B]/20"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2, x: 0 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <h3 className="text-xl xs:text-xl sm:text-2xl font-luckiest text-[#355070] dark:text-[#EAAC8B] mb-2 xs:mb-2.5 sm:mb-3 group-hover:text-[#E56B6F] transition-colors">
                  {project.title}
                </h3>
                
                {/* Description with startup-style left border accent */}
                <div className="pl-3 border-l-2 border-[#EAAC8B]/30 mb-4 xs:mb-5 sm:mb-6">
                  <p className="text-sm xs:text-base text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans">
                    {project.description}
                  </p>
                </div>

                {/* Enhanced Action Buttons - Startup Style */}
                <div className="flex gap-3 xs:gap-4 relative">
                  <motion.a 
                    href={project.liveDemoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm font-opensans font-medium bg-gradient-to-r from-[#B56576]/80 to-[#E56B6F]/80 text-white px-3 py-1.5 rounded-lg hover:shadow-md hover:from-[#E56B6F]/80 hover:to-[#B56576]/80 transition-all relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shine effect */}
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                    <FaExternalLinkAlt className="text-xs sm:text-sm" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 xs:gap-2 text-xs xs:text-sm font-opensans font-medium border border-[#355070]/30 dark:border-[#f8f9fa]/30 text-[#355070] dark:text-[#f8f9fa]/80 px-3 py-1.5 rounded-lg hover:bg-[#355070]/5 dark:hover:bg-[#f8f9fa]/5 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-xs sm:text-sm" />
                    View Code
                  </motion.a>
                  
                  {/* Startup-style progress indicator */}
                  <div className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#EAAC8B]/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B]"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>
    </>
  )
}

export default Projects