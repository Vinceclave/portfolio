import { motion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'
import { contactData } from '../data/contactData'
import AnimatedSection from '../components/ui/AnimatedSection'
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '../utils/motionVariants'
import useFormValidation, { validationRules } from '../hooks/useFormValidation'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const { heading, contactInfo, formFields, submitButtonText } = contactData
  const [submitStatus, setSubmitStatus] = useState<{ show: boolean; success: boolean; message: string }>({
    show: false,
    success: false,
    message: ''
  })
  const toastTimeoutRef = useRef<number | null>(null)
  
  // Define validation rules for each field
  const validationConfig = {
    name: [validationRules.required('Please enter your name'), validationRules.minLength(2)],
    email: [validationRules.required('Please enter your email'), validationRules.email()],
    message: [validationRules.required('Please enter a message'), validationRules.minLength(10, 'Message should be at least 10 characters')]
  }
  
  // Initialize form with validation
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useFormValidation(
    { name: '', email: '', message: '' },
    validationConfig
  );
  
  // Handle form submission - memoized with useCallback for performance
  const submitForm = useCallback(async (formData: { [key: string]: string }) => {
    try {
      // Clear any existing toast timeout
      if (toastTimeoutRef.current) {
        window.clearTimeout(toastTimeoutRef.current)
      }
        // Use EmailJS for sending emails
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: 'Vince',
          subject: `New Portfolio Contact: ${formData.name}`,
          // Additional helpful metadata
          website: 'Portfolio Website',
          page_url: window.location.href,
          timestamp: new Date().toISOString()
        }
        // Public key is already set in App.tsx useEffect
      );
      
      if (response.status !== 200) {
        throw new Error('Failed to send message');
      }
      
      // Display success message
      setSubmitStatus({
        show: true,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      })
      
      // Reset form
      resetForm()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus({
        show: true,
        success: false,
        message: 'Something went wrong. Please try again or email me directly.'
      })
    } finally {
      // Hide toast after 5 seconds
      toastTimeoutRef.current = window.setTimeout(() => {
        setSubmitStatus(prev => ({ ...prev, show: false }))
      }, 5000)
    }
  }, [resetForm]);
  
  return (
    <>
      {/* Toast Notification */}
      {submitStatus.show && (
        <motion.div
          className={`fixed top-6 right-6 max-w-sm p-4 rounded-lg shadow-lg z-50 ${
            submitStatus.success 
              ? 'bg-green-50 dark:bg-green-900/70 border-l-4 border-green-400' 
              : 'bg-red-50 dark:bg-red-900/70 border-l-4 border-red-400'
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
        >
          <div className="flex">
            <div className="flex-shrink-0">
              {submitStatus.success ? (
                <svg className="w-5 h-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <div className="ml-3">
              <p className={`text-sm font-medium ${
                submitStatus.success ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
              }`}>
                {submitStatus.message}
              </p>
            </div>
            <div className="ml-auto pl-3">
              <div className="-mx-1.5 -my-1.5">
                <button
                  onClick={() => setSubmitStatus(prev => ({ ...prev, show: false }))}
                  className={`inline-flex rounded-md p-1.5 ${
                    submitStatus.success 
                      ? 'text-green-500 hover:bg-green-100 dark:hover:bg-green-800' 
                      : 'text-red-500 hover:bg-red-100 dark:hover:bg-red-800'
                  }`}
                >
                  <span className="sr-only">Dismiss</span>
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Contact Hero - Startup Style */}
      <AnimatedSection className="container mx-auto px-3 xs:px-4 sm:px-6 py-10 xs:py-12 sm:py-16 md:py-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <motion.div 
          className="absolute -z-10 w-64 xs:w-72 sm:w-96 md:w-[32rem] h-64 xs:h-72 sm:h-96 md:h-[32rem] rounded-full -right-20 -top-20 opacity-10 bg-gradient-to-r from-purple-500 to-pink-500 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -z-10 w-40 xs:w-48 sm:w-64 md:w-80 h-40 xs:h-48 sm:h-64 md:h-80 rounded-full -left-10 bottom-20 opacity-10 bg-gradient-to-r from-blue-500 to-cyan-500 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-full border border-[#E56B6F]/30 top-20 right-1/4"
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
          className="absolute w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 rounded-full bg-[#EAAC8B]/20 left-1/3 top-1/3"
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
        
        <div className="text-center max-w-3xl mx-auto mb-8 xs:mb-10 sm:mb-12 md:mb-16 relative">
          <motion.h1 
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-luckiest text-[#355070] dark:text-[#f8f9fa] leading-tight mb-3 xs:mb-4 sm:mb-6"
            variants={fadeInUp}
            custom={1}
          >
            {heading.title} <span className="text-[#E56B6F] relative">
              {heading.highlightedText}
              <motion.span 
                className="absolute -bottom-1 xs:-bottom-2 left-0 w-full h-0.5 xs:h-1 bg-gradient-to-r from-[#E56B6F]/40 to-[#EAAC8B]/60"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-sm xs:text-base sm:text-lg text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans leading-relaxed relative"
            variants={fadeInUp}
            custom={2}
          >
            {heading.description}
            <motion.span
              className="absolute -right-3 xs:-right-4 -top-1 xs:-top-2 text-base xs:text-lg sm:text-xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              ✨
            </motion.span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12">
          {/* Contact Form - Startup Style */}
          <AnimatedSection 
            className="bg-white/90 dark:bg-[#2d3748]/90 backdrop-blur-sm p-4 xs:p-5 sm:p-6 md:p-8 rounded-lg xs:rounded-xl shadow-lg border border-[#E56B6F]/10 relative overflow-hidden group"
            variants={fadeInLeft}
          >
            {/* Startup-style decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#E56B6F]/10 to-transparent transform rotate-12 -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              {/* Heading with startup-style accent */}
              <div className="flex items-center mb-4 xs:mb-5 sm:mb-6">
                <div className="w-1 h-6 xs:h-7 sm:h-8 bg-gradient-to-b from-[#E56B6F] to-[#EAAC8B] rounded-full mr-3"></div>
                <h2 className="text-xl xs:text-2xl font-luckiest text-[#355070] dark:text-[#EAAC8B]">Send a Message</h2>
              </div>
              
              <form onSubmit={(e) => handleSubmit(submitForm, e)}>
                {formFields.map((field) => (
                  <div key={field.id} className="mb-4 xs:mb-5 sm:mb-6">
                    <label 
                      htmlFor={field.id} 
                      className="block text-xs xs:text-sm font-opensans font-medium text-[#355070] dark:text-[#EAAC8B] mb-1 xs:mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.name}
                        value={values[field.name as keyof typeof values] || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full px-3 xs:px-4 py-2 xs:py-3 rounded-md xs:rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#E56B6F]/50 focus:border-[#E56B6F] font-opensans text-sm xs:text-base ${
                          touched[field.name] && errors[field.name] 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                        rows={4}
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.name}
                        value={values[field.name as keyof typeof values] || ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder={field.placeholder}
                        required={field.required}
                        className={`w-full px-3 xs:px-4 py-2 xs:py-3 rounded-md xs:rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#E56B6F]/50 focus:border-[#E56B6F] font-opensans text-sm xs:text-base ${
                          touched[field.name] && errors[field.name] 
                            ? 'border-red-500' 
                            : 'border-gray-300'
                        }`}
                      />
                    )}
                    {touched[field.name] && errors[field.name] && (
                      <p className="mt-1 text-sm text-red-500">{errors[field.name]}</p>
                    )}
                  </div>
                ))}
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-[#B56576] to-[#E56B6F] rounded-md xs:rounded-lg text-white text-sm xs:text-base font-opensans font-medium transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group ${
                    isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:from-[#E56B6F] hover:to-[#B56576]'
                  }`}
                  whileHover={isSubmitting ? {} : { scale: 1.02 }}
                  whileTap={isSubmitting ? {} : { scale: 0.98 }}
                >
                  {/* Shine effect */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 ease-out"></span>
                  
                  {/* Loading spinner for submitting state */}
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <motion.div 
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      {submitButtonText}
                      <motion.span 
                        className="ml-2"
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  )}
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
          
          {/* Contact Info - Startup Style */}
          <AnimatedSection
            className="bg-white/90 dark:bg-[#2d3748]/90 backdrop-blur-sm p-4 xs:p-5 sm:p-6 md:p-8 rounded-lg xs:rounded-xl shadow-lg border border-[#EAAC8B]/10 relative overflow-hidden"
            variants={fadeInRight}
          >
            {/* Startup-style decorative corner */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#EAAC8B]/10 to-transparent transform rotate-12 -translate-y-10 -translate-x-10"></div>
            
            <div className="relative z-10">
              {/* Heading with startup-style accent */}
              <div className="flex items-center mb-4 xs:mb-5 sm:mb-6">
                <div className="w-1 h-6 xs:h-7 sm:h-8 bg-gradient-to-b from-[#EAAC8B] to-[#E56B6F] rounded-full mr-3"></div>
                <h2 className="text-xl xs:text-2xl font-luckiest text-[#355070] dark:text-[#EAAC8B]">Contact Information</h2>
              </div>
              
              <motion.div className="space-y-4 xs:space-y-5 sm:space-y-6" variants={staggerContainer}>
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ x: 5 }}
                  >                  
                    {/* Startup-style icon container with enhanced hover effect */}
                    <div className="flex-shrink-0 w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 bg-[#EAAC8B]/10 dark:bg-[#EAAC8B]/20 rounded-lg flex items-center justify-center mr-3 xs:mr-4 sm:mr-5 transform transition-all duration-300 group-hover:bg-[#E56B6F]/20 group-hover:rounded-xl group-hover:rotate-6 relative overflow-hidden">
                      <info.icon className="text-[#E56B6F] relative z-10" size={16} />
                      {/* Animated background on hover */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-[#E56B6F]/10 to-[#EAAC8B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ 
                          background: ['rgba(229, 107, 111, 0.1)', 'rgba(234, 172, 139, 0.1)', 'rgba(229, 107, 111, 0.1)'] 
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                    
                    <div className="bg-[#EAAC8B]/5 dark:bg-[#f8f9fa]/5 p-2 xs:p-3 rounded-lg flex-1 group-hover:bg-[#EAAC8B]/10 transition-all duration-300 border-l-2 border-transparent group-hover:border-[#E56B6F]/30">
                      <h3 className="text-base xs:text-lg font-medium text-[#355070] dark:text-[#EAAC8B] group-hover:text-[#E56B6F] transition-colors">
                        {info.label}
                      </h3>
                      <p className="text-sm xs:text-base text-[#6D597A] dark:text-[#f8f9fa]/80 font-opensans">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
         
              
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </>
  );
};

export default Contact;
