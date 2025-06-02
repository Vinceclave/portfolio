import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

/**
 * ThemeToggle component for switching between light and dark mode
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`w-10 h-10 rounded-full flex items-center justify-center p-2 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#EAAC8B]/20 text-[#EAAC8B]'
          : 'bg-[#355070]/20 text-[#355070]'
      }`}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
    </motion.button>
  );
};

export default ThemeToggle;
