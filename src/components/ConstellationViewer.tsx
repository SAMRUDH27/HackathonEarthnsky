import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Stars, Search, Info } from 'lucide-react';

const ConstellationViewer: React.FC = () => {
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null);

  const constellations = [
    { name: 'Ursa Major', description: 'The Great Bear', stars: 7 },
    { name: 'Orion', description: 'The Hunter', stars: 8 },
    { name: 'Cassiopeia', description: 'The Queen', stars: 5 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Constellation Explorer</h2>
        <p className="text-gray-300">Discover the stories written in the stars</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {constellations.map((constellation, index) => (
          <motion.div
            key={constellation.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl p-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedConstellation(constellation.name)}
          >
            <div className="flex items-center justify-between mb-4">
              <Stars className="w-8 h-8 text-yellow-200" />
              <span className="text-yellow-200 text-sm">{constellation.stars} stars</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{constellation.name}</h3>
            <p className="text-gray-300">{constellation.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto space-x-2">
          <Search className="w-5 h-5" />
          <span>Explore More Constellations</span>
        </button>
      </motion.div>
    </div>
  );
};

export default ConstellationViewer;