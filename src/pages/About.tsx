import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { aboutData } from '../data/aboutData'
import SectionAnimator from '../components/ui/SectionAnimator'

const About = () => {
  const { aboutSection, skills } = aboutData
  
  // Memoized event handlers for better performance
  const handleResumeClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    // You could add analytics tracking here
    console.log('Resume downloaded')
    // No need to prevent default since we want the browser to handle the download
  }, [])
  
  return (
    <>      {/* About Hero Section - Startup Style */}
      <section className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background decorative elements */}        <motion.div 
          className="absolute -z-10 w-64 xs:w-72 sm:w-96 md:w-[32rem] h-64 xs:h-72 sm:h-96 md:h-[32rem] rounded-full -left-20 -top-40 opacity-5 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl"
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
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-4 xs:space-y-5 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-3xl xs:text-4xl md:text-5xl font-luckiest text-[#355070] dark:text-[#f8f9fa] leading-tight mb-4 xs:mb-5 sm:mb-6">
              {aboutSection.title} <span className="text-[#E56B6F] relative inline-block">
                {aboutSection.highlightedText}
                <motion.span 
                  className="absolute -bottom-1 xs:-bottom-2 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-[#E56B6F]/40 to-[#EAAC8B]/60"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
              </span>
            </h1>
            
            {aboutSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm xs:text-base sm:text-lg text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans leading-relaxed">
                {paragraph}
              </p>
            ))}
              {/* Enhanced Resume Button - Startup Style */}
            <div className="mt-2 xs:mt-3 sm:mt-4 flex items-center">
              <motion.a 
                href={aboutSection.resumeButton.url} 
                className="inline-flex items-center px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-[#B56576] to-[#E56B6F] rounded-lg text-white text-sm xs:text-base font-opensans font-medium hover:from-[#E56B6F] hover:to-[#B56576] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Enhanced shine effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                
                {/* Button glow effect */}
                <motion.span 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ boxShadow: ['0 0 0px rgba(229,107,111,0)', '0 0 15px rgba(229,107,111,0.5)', '0 0 0px rgba(229,107,111,0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.span>
                
                <span className="relative z-10 flex items-center">
                  {aboutSection.resumeButton.text}
                  <motion.span 
                    className="ml-1.5 xs:ml-2 inline-flex"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <aboutSection.resumeButton.icon className="text-xs sm:text-sm" />
                  </motion.span>
                </span>
              </motion.a>
              
              {/* Badge indicator */}
              <motion.div 
                className="ml-3 px-2 py-1 bg-[#EAAC8B]/10 dark:bg-[#EAAC8B]/20 rounded-full hidden sm:flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E56B6F] mr-1 animate-pulse"></span>
                <span className="text-xs text-[#355070] dark:text-[#EAAC8B]">Updated</span>
              </motion.div>
            </div>
          </motion.div>
            <motion.div 
            className="w-full md:w-1/2 mt-6 sm:mt-8 md:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >            {/* Skills grid - Startup Style */}
            <div className="flex items-center mb-4 xs:mb-5 sm:mb-6">
              <h2 className="text-xl xs:text-2xl font-luckiest text-[#355070] dark:text-[#f8f9fa]">My Skills</h2>
            </div>
            
            {/* Animated backdrop for skills */}
            <div className="relative p-4 xs:p-5 sm:p-6 bg-white/30 dark:bg-[#1e293b]/30 backdrop-blur-sm rounded-xl mb-5 border border-white/20 dark:border-white/5">
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#EAAC8B]/10 to-transparent transform -translate-y-5 translate-x-5 rounded-full"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div 
                className="absolute bottom-0 left-1/4 w-8 h-8 border border-[#E56B6F]/20 rounded-full opacity-30"
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex flex-wrap items-center justify-center gap-2.5 xs:gap-3 sm:gap-4 relative z-10">
                {skills.map((skill, index) => (
                  <SectionAnimator key={skill.name} delay={index * 0.05}>                  
                    <motion.div 
                      className="bg-white/90 dark:bg-[#2d3748]/90 px-3 py-1.5 xs:px-4 xs:py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm border-b-2 border-[#EAAC8B] relative overflow-hidden group"
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Gradient shine effect on hover */}
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></div>
                      
                      <div className="flex items-center gap-1.5 xs:gap-2 relative z-10">
                        <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-md bg-[#EAAC8B]/10 dark:bg-[#EAAC8B]/20 flex items-center justify-center group-hover:bg-[#E56B6F]/10 transition-colors">
                          <skill.icon className="text-[#355070] dark:text-[#EAAC8B] text-xs xs:text-sm" />
                        </div>
                        <p className="font-opensans text-[#355070] dark:text-[#EAAC8B] text-xs xs:text-sm font-medium">{skill.name}</p>
                      </div>
                    </motion.div>
                  </SectionAnimator>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>      {/* Experience Section - Startup Style */}
      <section className="py-8 xs:py-12 sm:py-14 md:py-16 bg-[#355070]/5 dark:bg-[#355070]/20 relative overflow-hidden">
        {/* Background decorative elements */}        <motion.div 
          className="absolute -z-10 w-64 xs:w-72 sm:w-96 md:w-[32rem] h-64 xs:h-72 sm:h-96 md:h-[32rem] rounded-full -right-20 bottom-10 opacity-5 bg-gradient-to-r from-pink-500 to-orange-500 blur-3xl"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -8, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 18,
            ease: "easeInOut",
            repeatDelay: 0
          }}
        />
        
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 rounded-full border border-[#E56B6F]/30 top-10 left-1/4"
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
          className="absolute w-4 h-4 xs:w-6 xs:h-6 sm:w-8 sm:h-8 rounded-full bg-[#EAAC8B]/10 right-1/4 top-1/3"
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
        
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative">
          <SectionAnimator>
            {/* Modern startup-style section heading with pill indicator */}
            <div className="flex flex-col items-center mb-6 xs:mb-8 sm:mb-10">
              <h2 className="text-2xl xs:text-2.5xl sm:text-3xl font-luckiest text-[#355070] dark:text-[#f8f9fa] mb-1 xs:mb-2 text-center transform -rotate-1">
                Work <span className="text-[#E56B6F]">Experience</span>
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
          </SectionAnimator>
          
          <div className="space-y-8 xs:space-y-10 sm:space-y-12 relative before:absolute before:inset-0 before:ml-3 xs:before:ml-4 sm:before:ml-5 before:-translate-x-1/2 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#B56576] before:to-[#EAAC8B] dark:before:opacity-70">
            {aboutData.experiences.map((job, index) => (
              <SectionAnimator key={index} delay={index * 0.1}>                <motion.div 
                  className="relative flex flex-col md:flex-row items-center md:justify-between ml-6 xs:ml-7 sm:ml-8 md:ml-0 group"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Timeline node with startup style */}
                  <motion.div 
                    className="absolute left-0 md:mx-auto md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#E56B6F] to-[#EAAC8B] flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-[#E56B6F]/20 transition-all duration-300 z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {/* Inner circle with pulse animation */}
                    <div className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-white dark:bg-[#1a202c] relative">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-white dark:bg-[#1a202c] opacity-60"
                        animate={{
                          scale: [1, 1.6, 1],
                          opacity: [0.6, 0, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "loop"
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  {/* Year/Title/Company container with startup hover effect */}
                  <motion.div 
                    className="md:w-5/12 md:text-right md:pr-6 sm:md:pr-8 relative p-3 xs:p-4 md:p-5 group-hover:bg-white/50 dark:group-hover:bg-[#2d3748]/50 group-hover:backdrop-blur-sm rounded-lg transition-all duration-300"
                    whileHover={{ x: -5 }}
                  >
                    {/* Year badge - startup style */}
                    <div className="inline-block px-2 py-0.5 bg-[#E56B6F]/10 dark:bg-[#E56B6F]/20 rounded-md text-[#E56B6F] text-sm xs:text-base font-luckiest mb-1 md:ml-auto">
                      {job.year}
                    </div>
                    
                    <h3 className="text-lg xs:text-xl font-bold text-[#355070] dark:text-[#EAAC8B] group-hover:text-[#E56B6F] transition-colors">
                      {job.title}
                    </h3>
                    
                    <p className="text-sm xs:text-base text-[#6D597A] dark:text-[#f8f9fa]/70 font-medium">
                      {job.company}
                    </p>
                  </motion.div>
                  
                  {/* Description container with startup hover effect */}
                  <motion.div 
                    className="md:w-5/12 mt-2 xs:mt-3 md:mt-0 md:pl-6 sm:md:pl-8 p-3 xs:p-4 md:p-5 group-hover:bg-white/50 dark:group-hover:bg-[#2d3748]/50 group-hover:backdrop-blur-sm rounded-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <p className="text-sm xs:text-base text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans relative pl-3 border-l-2 border-[#EAAC8B]/30 group-hover:border-[#E56B6F]">
                      {job.description}
                    </p>
                  </motion.div>
                </motion.div>
              </SectionAnimator>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About