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
  const [isOpen, setIsOpen] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  // Cinematic easing
  const cinematicEase = [0.22, 1, 0.36, 1];

  const handleOpen = () => {
    if (!isOpen) {
      setIsPressed(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 400); // Wait for the "press" and "glow" effect before opening
    }
  };

  // Slideshow Logic (Every 3s)
  useEffect(() => {
    if (!isOpen) return; // Only run slideshow when open
    
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [isOpen]);

  // Particles
  const particles = Array.from({ length: 20 });

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-bg-dark">
      
      {/* Background and Invitation Content (Underneath the Envelope) */}
      <motion.div 
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center z-10"
        initial={{ scale: 1.1, filter: "blur(18px)" }}
        animate={{ 
          scale: isOpen ? 1 : 1.1, 
          filter: isOpen ? "blur(0px)" : "blur(18px)" 
        }}
        transition={{ duration: 1.5, ease: cinematicEase, delay: 0.2 }}
      >
        {/* Slideshow Backgrounds with Ken Burns Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              className="absolute inset-0 hero-bg"
              style={{ 
                background: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.55)), url(${BACKGROUNDS[currentBg]}) center/cover no-repeat` 
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
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100 + 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Text Content (No Card) */}
        <div className="relative w-full max-w-3xl mx-auto h-[85vh] flex flex-col items-center justify-start pt-24 z-20">
          
          <h2 className="font-script text-5xl md:text-6xl text-gold mb-6 drop-shadow-sm opacity-90">A & R</h2>
          <h3 className="font-playfair text-3xl md:text-4xl tracking-[2px] text-gold mb-4 drop-shadow-sm opacity-90">Wedding Day</h3>
          <p className="font-montserrat text-sm md:text-base tracking-[3px] text-ivory mb-16 opacity-90 uppercase font-semibold">27 September 2026</p>
          
          {/* Couple Names */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-ivory leading-none"
              style={{ textShadow: "0 2px 15px rgba(0,0,0,0.5)", letterSpacing: "2px" }}
            >
              Aishwarya
            </h1>
            <span className="font-playfair text-4xl text-gold my-4 opacity-80 leading-none">&</span>
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-ivory leading-none"
              style={{ textShadow: "0 2px 15px rgba(0,0,0,0.5)", letterSpacing: "2px" }}
            >
              Raghav
            </h1>
          </div>
          
          {/* Scroll Down Indicator */}
          <motion.div 
            className="flex flex-col items-center opacity-80 w-full mt-12 md:mt-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpen ? 0.8 : 0, y: isOpen ? 0 : 10 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
             <span className="font-playfair text-lg tracking-[2px] text-ivory mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase text-center">Begin the Celebration</span>
             <ChevronDown className="w-6 h-6 text-gold animate-bounce mx-auto filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          </motion.div>
        </div>
      </motion.div>

      {/* The Grand Full-Screen Envelope (Ivory Theme) */}
      <AnimatePresence>
        {!isOpen && (
          <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
            {/* Top Panel */}
            <motion.div 
              className="absolute inset-0 bg-ivory origin-top border-b border-gold/30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 50% 50%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ y: "-100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_50%,_rgba(212,175,55,0.15)_100%)]" />
            </motion.div>

            {/* Bottom Panel */}
            <motion.div 
              className="absolute inset-0 bg-[#FDFBF7] origin-bottom border-t border-gold/20 drop-shadow-[0_-15px_30px_rgba(0,0,0,0.1)] pointer-events-auto"
              style={{ 
                clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            />

            {/* Left Panel */}
            <motion.div 
              className="absolute inset-0 bg-[#F8F5EE] origin-left border-r border-gold/10 pointer-events-auto"
              style={{ 
                clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.05)] pointer-events-none" />
            </motion.div>

            {/* Right Panel */}
            <motion.div 
              className="absolute inset-0 bg-[#F8F5EE] origin-right border-l border-gold/10 pointer-events-auto"
              style={{ 
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.05)] pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grand Wax Seal (Gold/Ivory Theme) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer flex items-center justify-center"
            onClick={handleOpen}
            exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: cinematicEase }}
          >
            {/* Golden Glow Effect behind seal */}
            <motion.div 
              className="absolute inset-0 bg-gold rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isPressed ? 0.9 : 0.4, 
                scale: isPressed ? 1.6 : 0.8 
              }}
              transition={{ duration: 0.4 }}
            />

            {/* The Seal Itself */}
            <motion.div
              className="w-[110px] h-[110px] bg-gradient-to-br from-[#E8D8B5] via-[#D4AF37] to-[#B5952F] rounded-full flex items-center justify-center border-[3px] border-ivory text-ivory font-cinzel text-5xl shadow-[0_15px_40px_rgba(212,175,55,0.4)] relative"
              style={{ 
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.5), 0 15px 40px rgba(212,175,55,0.4)",
              }}
              animate={{
                scale: isPressed ? 0.92 : 1,
                rotate: isPressed ? -3 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] tracking-wider relative top-1">
                A&R
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
