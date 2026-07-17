import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const BACKGROUNDS = [
  'https://images.unsplash.com/photo-1549488344-c146e297a731?auto=format&fit=crop&w=2000&q=100', // Swans
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=100', // Luxury Decor
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=100', // Rings / Details
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=100', // Floral arrangement
];

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Cinematic easing
  const cinematicEase = [0.22, 1, 0.36, 1];

  // Slideshow Logic (Every 3s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  // Particles
  const particles = Array.from({ length: 20 });

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-bg-light">
      
      {/* Background and Invitation Content */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center z-10"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: cinematicEase, delay: 0.2 }}
      >
        {/* Slideshow Backgrounds with Ken Burns Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              className="absolute inset-0 hero-bg"
              style={{ 
                background: `linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.85)), url(${BACKGROUNDS[currentBg]}) center/cover no-repeat` 
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
            />
          </AnimatePresence>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {particles.map((_, i) => (
            <div 
              key={i} 
              className="particle opacity-30 bg-maroon" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100 + 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="relative w-full max-w-3xl mx-auto h-[85vh] flex flex-col items-center justify-start pt-32 z-20">
          
          <h3 className="font-playfair text-3xl md:text-4xl tracking-[2px] text-crimson mb-4 opacity-90">Wedding Day</h3>
          <p className="font-montserrat text-sm md:text-base tracking-[3px] text-charcoal mb-16 opacity-90 uppercase font-semibold">27 September 2026</p>
          
          {/* Couple Names */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-charcoal leading-none"
              style={{ letterSpacing: "2px" }}
            >
              Aishwarya
            </h1>
            <span className="font-playfair text-4xl text-crimson my-4 opacity-80 leading-none">&</span>
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-charcoal leading-none"
              style={{ letterSpacing: "2px" }}
            >
              Raghav
            </h1>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            className="flex flex-col items-center opacity-80 w-full mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
             <span className="font-playfair text-lg tracking-[2px] text-charcoal mb-2 uppercase text-center font-medium">Begin the Celebration</span>
             <ChevronDown className="w-6 h-6 text-crimson animate-bounce mx-auto" />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
