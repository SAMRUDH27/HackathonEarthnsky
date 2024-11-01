import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sun, Moon, Cloud, Stars, Wind, Droplets, Thermometer, Globe, Compass } from 'lucide-react';
import Header from './components/Header';
import EarthSection from './components/EarthSection';
import SkySection from './components/SkySection';
import WeatherWidget from './components/WeatherWidget';
import ConstellationViewer from './components/ConstellationViewer';
import Footer from './components/Footer';

function App() {
  const [timeOfDay, setTimeOfDay] = useState<'day' | 'night'>('day');
  const [scrollProgress, setScrollProgress] = useState(0);
  const { ref: earthRef, inView: earthInView } = useInView({ threshold: 0.3 });
  const { ref: skyRef, inView: skyInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const progress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hours = new Date().getHours();
    setTimeOfDay(hours >= 6 && hours < 18 ? 'day' : 'night');
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${
      timeOfDay === 'day' ? 'bg-gradient-to-b from-blue-400 to-blue-600' : 'bg-gradient-to-b from-gray-900 to-blue-900'
    }`}>
      <Header timeOfDay={timeOfDay} />
      
      <main className="relative">
        <motion.div 
          className="fixed top-0 right-0 m-4 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <WeatherWidget />
        </motion.div>

        <section ref={earthRef} className="min-h-screen relative overflow-hidden">
          <EarthSection inView={earthInView} timeOfDay={timeOfDay} />
        </section>

        <section ref={skyRef} className="min-h-screen relative">
          <SkySection inView={skyInView} timeOfDay={timeOfDay} />
        </section>

        <section className="min-h-screen relative bg-black bg-opacity-80 p-8">
          <ConstellationViewer />
        </section>

        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
          style={{
            opacity: 1 - scrollProgress * 2,
            y: scrollProgress * 100,
          }}
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-full px-6 py-3 text-white">
            Scroll to explore
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;