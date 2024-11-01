import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, Moon, Stars } from 'lucide-react';

interface SkySectionProps {
  inView: boolean;
  timeOfDay: 'day' | 'night';
}

const SkySection: React.FC<SkySectionProps> = ({ inView, timeOfDay }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: timeOfDay === 'day' 
            ? 'url(https://images.unsplash.com/photo-1595865749889-b37a43c4a4a1?auto=format&fit=crop&q=80)'
            : 'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: inView ? 1 : 1.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-white mb-8">Celestial Wonders</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-4">
                {timeOfDay === 'day' ? (
                  <Sun className="w-16 h-16 text-yellow-300" />
                ) : (
                  <Moon className="w-16 h-16 text-gray-200" />
                )}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {timeOfDay === 'day' ? 'Solar Activity' : 'Lunar Phases'}
              </h3>
              <p className="text-gray-200">
                {timeOfDay === 'day' 
                  ? 'Track solar flares, sunspots, and solar wind in real-time'
                  : "Follow the moon's journey and its influence on Earth"}
              </p>
            </motion.div>

            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-white"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Stars className="w-16 h-16 text-yellow-100" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Star Navigation</h3>
              <p className="text-gray-200">
                Discover constellations and celestial events visible from your location
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkySection;
