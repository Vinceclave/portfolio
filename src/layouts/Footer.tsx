import { socialLinks } from '../data/socialLinks'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#355070] via-[#6D597A] to-[#355070] text-white pt-10 xs:pt-12 sm:pt-14 md:pt-16 pb-6 xs:pb-8 overflow-hidden">
      {/* Decorative top curve with animated gradient */}
      <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-12 sm:h-16 bg-white rounded-b-[100%] transform translate-y-[-75%]"></div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -top-16 xs:-top-20 sm:-top-24 -right-16 xs:-right-20 sm:-right-24 w-32 xs:w-40 sm:w-48 h-32 xs:h-40 sm:h-48 rounded-full bg-gradient-to-r from-[#E56B6F]/20 to-[#EAAC8B]/20 blur-xl"></div>
      <div className="absolute -bottom-24 xs:-bottom-28 sm:-bottom-32 -left-24 xs:-left-28 sm:-left-32 w-48 xs:w-56 sm:w-64 h-48 xs:h-56 sm:h-64 rounded-full bg-gradient-to-r from-[#B56576]/20 to-[#E56B6F]/20 blur-xl"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Main footer content in a grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 mb-8 xs:mb-10 sm:mb-12">
          {/* Brand column */}
          <div className="flex flex-col space-y-2 xs:space-y-3 sm:space-y-4">
            <h3 className="text-3xl xs:text-4xl sm:text-5xl font-normal text-[#EAAC8B] font-luckiest tracking-wide transform -rotate-1 hover:rotate-0 transition-transform duration-300 drop-shadow-lg">
              beans<span className="text-[#E56B6F]">dev</span>
            </h3>
            <p className="text-xs xs:text-sm text-[#f8f9fa] max-w-xs font-opensans font-light tracking-wide leading-relaxed">
              Building the digital future with innovative solutions and cutting-edge technology.
            </p>            {/* Social media icons */}
            <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 mt-2 xs:mt-3 sm:mt-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#355070] bg-gradient-to-br from-[#E56B6F] to-[#EAAC8B] p-1.5 xs:p-2 sm:p-2.5 rounded sm:rounded-md hover:from-[#EAAC8B] hover:to-[#E56B6F] hover:scale-110 hover:-rotate-6 transition-all duration-300 shadow-lg flex items-center justify-center w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10"
                  aria-label={link.name}
                >
                  <span className="sr-only">{link.name}</span>
                  <link.icon size={14} className="xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </div>          {/* Quick Links */}
          <div>
            <h4 className="text-lg xs:text-xl font-luckiest text-[#EAAC8B] mb-3 xs:mb-4 sm:mb-5 transform -rotate-1">Explore</h4>
            <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item} className="transform transition-transform duration-200 hover:translate-x-1">
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-[#f8f9fa] hover:text-[#E56B6F] text-xs xs:text-sm font-opensans tracking-wide transition-colors flex items-center"
                  >
                    <span className="mr-1 xs:mr-1.5 sm:mr-2 text-[#E56B6F]">›</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>{/* Contact Info */}
          <div className="relative">
            <div className="absolute -top-4 xs:-top-5 sm:-top-6 -right-4 xs:-right-5 sm:-right-6 w-16 xs:w-20 sm:w-24 h-16 xs:h-20 sm:h-24 rounded-full bg-gradient-to-r from-[#E56B6F]/10 to-[#EAAC8B]/10 blur-xl"></div>
            <h4 className="text-lg xs:text-xl font-luckiest text-[#EAAC8B] mb-3 xs:mb-4 sm:mb-5 transform -rotate-1">Get in Touch</h4>
            <p className="text-xs xs:text-sm text-[#f8f9fa] font-opensans tracking-wide leading-relaxed mb-2 xs:mb-3 sm:mb-4">
              Have a project in mind? Let's make it happen.
            </p>
            <div className="space-y-1.5 xs:space-y-2 sm:space-y-3">
              <p className="flex items-center text-sm text-[#f8f9fa] font-opensans">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-[#E56B6F]/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#EAAC8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                mrbeans.dev@gmail.com
              </p>
              <p className="flex items-center text-sm text-[#f8f9fa] font-opensans">
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-[#E56B6F]/20 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#EAAC8B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                Cebu, Philippines
              </p>
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <div className="relative">
          {/* Decorative line with gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#EAAC8B]/40 to-transparent mb-6"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#f8f9fa] font-opensans font-light">
              © {new Date().getFullYear()} <span className="font-luckiest text-[#E56B6F]">beansdev</span>. All rights reserved.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer