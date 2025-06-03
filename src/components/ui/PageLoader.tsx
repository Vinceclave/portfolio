import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageLoader component with a sleek, modern loading animation
 */
const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading with progressive animation
    const interval = setInterval(() => {
      setProgress(prev => {
        const newValue = prev + Math.random() * 15;
        return newValue > 100 ? 100 : newValue;
      });
    }, 200);

    // Complete loading after animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#f0f2f5] dark:from-[#1a202c] dark:to-[#121920]"
        >
          {/* Floating background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-[#E56B6F]/10 to-[#EAAC8B]/10"
                style={{
                  width: `${Math.random() * 200 + 50}px`,
                  height: `${Math.random() * 200 + 50}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1],
                  opacity: [0, 0.5],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{ 
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Main logo container with advanced 3D effects */}
            <motion.div
              className="w-28 h-28 mb-8 rounded-2xl bg-gradient-to-br from-[#E56B6F] to-[#EAAC8B] flex items-center justify-center shadow-2xl relative overflow-hidden"
              animate={{
                rotateY: [0, 10, 0, -10, 0],
                rotateX: [0, -10, 0, 10, 0],
                boxShadow: [
                  "0 25px 50px -12px rgba(229,107,111,0.4)", 
                  "0 35px 60px -15px rgba(229,107,111,0.6)", 
                  "0 25px 50px -12px rgba(229,107,111,0.4)"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Dynamic holographic effect */}
              <motion.div 
                className="absolute inset-0 opacity-40"
                style={{
                  background: 'linear-gradient(125deg, transparent 20%, rgba(255,255,255,0.8) 30%, rgba(255,255,255,0.9) 40%, transparent 50%)',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut'
                }}
              />
              
              {/* Animated border glow */}
              <motion.div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#E56B6F] via-[#EAAC8B] to-[#E56B6F]"
                style={{ zIndex: -1 }}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              
              {/* Animated logo with floating effect */}
              <motion.div
                className="text-white text-5xl font-luckiest tracking-wide relative flex items-center justify-center"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className="relative">
                  <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">bd</span>
                  <motion.div
                    className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-t from-white/50 to-transparent"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    bd
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Circular progress indicator */}
            <div className="relative h-16 w-16 mb-6">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="4"
                  stroke="rgba(53, 80, 112, 0.1)"
                  className="dark:stroke-white/10"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  strokeWidth="5"
                  stroke="url(#gradient)"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: progress / 100 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  style={{
                    strokeDasharray: "283",
                    strokeDashoffset: "283",
                    transformOrigin: "center",
                    transform: "rotate(-90deg)",
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#B56576" />
                    <stop offset="50%" stopColor="#E56B6F" />
                    <stop offset="100%" stopColor="#EAAC8B" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Percentage display in the center */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-sm font-bold text-[#355070] dark:text-white/80"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
              {/* Animated dots/pulses that work on all devices */}
            <div className="flex gap-6 mb-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${
                    i === 0 ? 'from-[#B56576] to-[#E56B6F]' : 
                    i === 1 ? 'from-[#E56B6F] to-[#EAAC8B]' : 
                    'from-[#EAAC8B] to-[#B56576]'
                  }`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                    boxShadow: [
                      '0 0 0 rgba(229,107,111,0.4)',
                      '0 0 10px rgba(229,107,111,0.7)',
                      '0 0 0 rgba(229,107,111,0.4)'
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
