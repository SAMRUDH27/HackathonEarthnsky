import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  timeOfDay: 'day' | 'night';
}

const Header: React.FC<HeaderProps> = ({ timeOfDay }) => {
  return (
    <motion.header 
      className="fixed w-full z-50 px-6 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          {timeOfDay === 'day' ? (
            <Sun className="w-8 h-8 text-yellow-300" />
          ) : (
            <Moon className="w-8 h-8 text-gray-200" />
          )}
          <span className="text-white text-xl font-bold">Earth & Sky</span>
        </motion.div>

        <div className="hidden md:flex space-x-8">
          {['Experience', 'Weather', 'Constellations', 'About'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          className="md:hidden text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>
    </motion.header>
  );
};

export default Header;