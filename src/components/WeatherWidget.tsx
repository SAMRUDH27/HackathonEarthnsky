import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Sun, Wind, Droplets, Thermometer } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="p-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <Sun className="w-8 h-8 text-yellow-300" />
          <div className="text-white">
            <div className="text-lg font-semibold">24°C</div>
            <div className="text-sm">Clear Sky</div>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          className="overflow-hidden mt-4"
        >
          <div className="grid grid-cols-2 gap-4 text-white">
            <div className="flex items-center space-x-2">
              <Wind className="w-5 h-5" />
              <span>12 km/h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Droplets className="w-5 h-5" />
              <span>65%</span>
            </div>
            <div className="flex items-center space-x-2">
              <Thermometer className="w-5 h-5" />
              <span>Feels like 26°C</span>
            </div>
            <div className="flex items-center space-x-2">
              <Cloud className="w-5 h-5" />
              <span>10%</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WeatherWidget;