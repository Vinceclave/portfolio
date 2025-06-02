import { motion } from 'framer-motion'
import { useRef, useCallback } from 'react'
import { homeData } from '../data/homeData'
import SectionAnimator from '../components/ui/SectionAnimator'
import ImageWithFallback from '../components/ui/ImageWithFallback'
import useScrollToSection from '../hooks/useScrollToSection'

const Home = () => {
  const { hero, skills } = homeData
  const scrollToSection = useScrollToSection()
  
  // Memoize event handlers for better performance
  const handlePrimaryButtonClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection('projects')
  }, [scrollToSection])
  
  const handleSecondaryButtonClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection('about')
  }, [scrollToSection])
  
  return (
    <>
      {/* Hero Section - Startup Style */}
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background gradient blobs - startup style */}        <motion.div 
          className="absolute -z-10 w-64 xs:w-72 sm:w-96 md:w-[32rem] h-64 xs:h-72 sm:h-96 md:h-[32rem] rounded-full -left-20 -top-20 opacity-10 bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
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
          className="absolute -z-10 w-48 xs:w-56 sm:w-72 md:w-96 h-48 xs:h-56 sm:h-72 md:h-96 rounded-full -right-10 -bottom-10 opacity-10 bg-gradient-to-r from-pink-500 to-orange-500 blur-3xl"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -15, 0]
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
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8 md:gap-10 relative">
          <motion.div 
            className="w-full md:w-1/2 space-y-3 xs:space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-luckiest text-[#355070] dark:text-[#f8f9fa] leading-tight">
              {hero.title} <span className="text-[#E56B6F] relative inline-block">
                {hero.highlightedText}
                <motion.span 
                  className="absolute -bottom-1 xs:-bottom-2 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-[#E56B6F]/40 to-[#EAAC8B]/60"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                />
              </span>
            </h1>
            
            {/* Badge - Startup style */}
            <motion.div 
              className="inline-flex items-center px-2 py-1 rounded-full bg-[#355070]/10 dark:bg-[#f8f9fa]/10 text-xs border border-[#E56B6F]/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#E56B6F] mr-1.5 animate-pulse"></span>
              <span className="text-[#355070] dark:text-[#EAAC8B] font-medium">Available for new projects</span>
            </motion.div>
            
            <p className="text-sm xs:text-base sm:text-lg text-[#6D597A] dark:text-[#EAAC8B]/80 font-opensans max-w-xl relative">
              {hero.description}
              <motion.span
                className="absolute -right-3 xs:-right-4 -top-1 xs:-top-2 text-base xs:text-lg sm:text-xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                ✨
              </motion.span>
            </p>
            
            <div className="flex flex-wrap gap-2 xs:gap-3 sm:gap-4 pt-2 xs:pt-3 sm:pt-4">              <motion.a 
                href="#projects"
                onClick={handlePrimaryButtonClick}
                className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 bg-gradient-to-r from-[#B56576] to-[#E56B6F] rounded-lg text-white text-xs xs:text-sm sm:text-base font-opensans font-medium hover:from-[#E56B6F] hover:to-[#B56576] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                {hero.buttons.primary.text}
              </motion.a>
              
              <motion.a 
                href="#about"
                onClick={handleSecondaryButtonClick}
                className="inline-flex items-center px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 border-2 border-[#355070] dark:border-[#f8f9fa] rounded-lg text-[#355070] dark:text-[#f8f9fa] text-xs xs:text-sm sm:text-base font-opensans font-medium hover:bg-[#355070] dark:hover:bg-[#f8f9fa]/10 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {hero.buttons.secondary.text}
                <hero.buttons.secondary.icon className="ml-1 xs:ml-2 text-xs sm:text-sm group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center relative mt-6 xs:mt-8 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Startup-style animated grid pattern background */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute inset-0 bg-grid-pattern"></div>
            </div>
            
            {/* Modern tech-inspired decorative elements */}
            <div className="absolute w-full h-full flex items-center justify-center">
              <motion.div 
                className="w-60 h-60 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-[#E56B6F]/20 absolute"
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 60, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
              
              <motion.div 
                className="w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full border-2 border-dashed border-[#EAAC8B]/30 absolute"
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 45, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />
            </div>
            
            {/* Modern hero image container with frame design */}
            <div className="relative z-10 flex flex-col items-center">
          
        
              
              {/* Main profile image with modern container */}
              <motion.div 
                className="w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 relative bg-gradient-to-br from-[#E56B6F]/80 to-[#EAAC8B] rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                {/* Background dot pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                
                {/* Startup-style frame */}
                <div className="absolute inset-3 border-2 border-white/30 dark:border-white/10 rounded-lg"></div>
                    {/* Main image with optimized loading */}
                <motion.div className="w-full h-full overflow-hidden">
                  <ImageWithFallback 
                    src="/images/profile/profile.jpg" 
                    fallbackSrc="/images/placeholder.svg"
                    alt="Developer Profile" 
                    className="object-cover w-full h-full" 
                    loading="eager"
                    width={288}
                    height={288}
                  />
                </motion.div>
                
                {/* Modern overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
          
        {/* Enhanced name tag - visible on mobile only with improved responsive design */}
        <motion.div 
          className="text-center mt-4 xs:mt-6 sm:mt-8 md:mt-10 md:hidden relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* Decorative line */}
          <motion.div 
            className="absolute left-1/2 -top-2 xs:-top-3 sm:-top-4 h-3 xs:h-4 sm:h-6 w-0.5 bg-gradient-to-b from-[#E56B6F] to-transparent"
            initial={{ height: 0 }}
            animate={{ height: 24 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          />
          
          {/* Name with highlight effect */}
          <motion.div className="relative inline-block">
            <h3 className="font-luckiest text-lg xs:text-xl sm:text-2xl text-[#355070] dark:text-[#f8f9fa]">Vince Clave</h3>
            <motion.span 
              className="absolute -bottom-1 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B]"
              initial={{ width: 0, left: "50%", x: "-50%" }}
              animate={{ width: "80%", left: "50%", x: "-50%" }}
              transition={{ delay: 1, duration: 0.6 }}
            />
          </motion.div>
          
          {/* Title with badge style */}
          <motion.div
            className="mt-1 xs:mt-2 inline-block px-2 xs:px-3 py-0.5 xs:py-1 rounded-full bg-[#355070]/10 dark:bg-[#f8f9fa]/10 border border-[#EAAC8B]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <p className="text-[#6D597A] dark:text-[#EAAC8B]/90 text-xs xs:text-xs sm:text-sm font-medium flex items-center">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mr-0.5 xs:mr-1"
              >
                ✨
              </motion.span>
              Full Stack Developer
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="ml-0.5 xs:ml-1"
              >
                ✨
              </motion.span>
            </p>
          </motion.div>
        </motion.div>
        
        {/* Desktop name tag - only visible on medium screens and up */}
        <motion.div 
          className="hidden md:block absolute bottom-0 right-0 text-right pr-2 sm:pr-3 md:pr-4 pb-1 sm:pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.div 
            className="inline-block bg-white/70 dark:bg-[#2d3748]/70 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg shadow-md border-r-2 border-[#E56B6F]"
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ delay: 1.1, type: "spring", damping: 15 }}
          >
            <h3 className="font-luckiest text-xs sm:text-sm text-[#355070] dark:text-[#f8f9fa]">Vince Clave</h3>
            <p className="text-[#6D597A] dark:text-[#EAAC8B]/90 text-xs">Full Stack Developer</p>
          </motion.div>
        </motion.div>
      </section>
      
      {/* Featured Skills Section - Startup Style */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#355070]/5 dark:from-[#1a202c] dark:to-[#355070]/20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-6 bg-gradient-to-r from-[#E56B6F]/20 via-[#EAAC8B]/20 to-[#E56B6F]/20"></div>
        
        <div className="absolute w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full bg-[#E56B6F]/5 -left-10 -top-10 blur-xl"></div>
        <div className="absolute w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 rounded-full bg-[#EAAC8B]/5 -right-10 -bottom-10 blur-xl"></div>
        
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative">          
          <SectionAnimator>
            {/* Modern section heading with pill indicator */}
            <div className="flex flex-col items-center mb-4 xs:mb-6 sm:mb-8">
              <motion.div 
                className="px-3 py-1 rounded-full bg-[#E56B6F]/10 dark:bg-[#E56B6F]/20 text-[#E56B6F] text-xs font-medium mb-2 xs:mb-3"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                SERVICES
              </motion.div>
              
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-luckiest text-[#355070] dark:text-[#f8f9fa] mb-1 xs:mb-2 text-center">
                What I <span className="text-[#E56B6F]">Do</span>
              </h2>
              
              <div className="flex justify-center">
                <motion.div 
                  className="h-0.5 xs:h-1 w-12 xs:w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#E56B6F] to-[#EAAC8B] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '6rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
            
            <p className="text-center text-[#6D597A] dark:text-[#EAAC8B]/70 max-w-xl mx-auto mb-8 xs:mb-10 sm:mb-12 font-opensans text-xs xs:text-sm sm:text-base">
              Turning complex challenges into elegant solutions — one pixel at a time
            </p>
          </SectionAnimator>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SectionAnimator key={index} delay={index * 0.1}>                
                <motion.div 
                  className="bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur-md p-5 sm:p-6 md:p-7 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group hover:-translate-y-2 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Startup-style gradient corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#E56B6F]/20 to-transparent transform rotate-12 -translate-y-8 translate-x-8"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 xs:w-14 xs:h-14 rounded-lg bg-[#E56B6F]/10 dark:bg-[#E56B6F]/20 flex items-center justify-center mb-4">
                      <span className="inline-block text-2xl sm:text-3xl">{index === 0 ? '✨' : index === 1 ? '🎨' : '📱'}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-luckiest text-[#355070] dark:text-[#EAAC8B] mb-2 sm:mb-3 group-hover:text-[#E56B6F] transition-colors duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans text-xs sm:text-sm leading-relaxed mb-4">
                      {skill.description}
                    </p>
                    
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-0.5 bg-[#E56B6F]/60 rounded-full mr-2"></div>
                      <span className="text-[#E56B6F] text-xs font-medium">Learn more</span>
                    </div>
                  </div>
                  
                  {/* Number indicator */}
                  <div className="absolute -bottom-2 -right-2 text-5xl font-bold text-[#E56B6F]/5 dark:text-[#E56B6F]/10">0{index + 1}</div>
                </motion.div>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
