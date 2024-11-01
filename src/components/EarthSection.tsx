import React from 'react';
import { motion } from 'framer-motion';
import { Globe, TreePine, Droplets } from 'lucide-react';

interface EarthSectionProps {
  inView: boolean;
  timeOfDay: 'day' | 'night';
}

const EarthSection: React.FC<EarthSectionProps> = ({ inView, timeOfDay }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1.2 }}
        animate={{ scale: inView ? 1 : 1.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-8">Our Living Planet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Globe className="w-12 h-12 mb-4" />,
                title: "Earth's Vitals",
                description: "Real-time monitoring of our planet's health indicators"
              },
              {
                icon: <TreePine className="w-12 h-12 mb-4" />,
                title: "Ecosystems",
                description: "Explore diverse biomes and their interconnections"
              },
              {
                icon: <Droplets className="w-12 h-12 mb-4" />,
                title: "Climate Action",
                description: "Track global environmental initiatives and impact"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EarthSection;