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

  // Slideshow Logic
  useEffect(() => {
    if (!isOpen) return; // Only run slideshow when open
    
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 2500); // Every 2.5s

    return () => clearInterval(interval);
  }, [isOpen]);

  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      
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
        {/* Slideshow Backgrounds with Crossfade & Flash */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBg}
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url(${BACKGROUNDS[currentBg]})` }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1.05 }} // Gentle 1.0 -> 1.05 zoom
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8, ease: "linear" }}
            />
          </AnimatePresence>

          {/* Flash Effect on Transition */}
          <AnimatePresence>
            <motion.div
              key={`flash-${currentBg}`}
              className="absolute inset-0 bg-white z-10 pointer-events-none mix-blend-overlay"
              initial={{ opacity: 0.15 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }} // 150ms soft flash
            />
          </AnimatePresence>
        </div>

        {/* Ambient Lighting & Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3E5AB]/90 via-[#FDFBF7]/70 to-[#FDFBF7]/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.4)_0%,_transparent_60%)]" /> {/* Spotlight */}
        
        {/* Bokeh & Particles Placeholder (CSS based) */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen" />

        {/* Light rays */}
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] pointer-events-none" />

        {/* Floral Arch Frame / Luxury Card */}
        <div className="relative w-[90%] max-w-lg mx-auto h-[85vh] border-[2px] border-[#D4AF37]/50 rounded-t-[200px] flex flex-col items-center justify-start pt-20 z-20 shadow-luxury glass-card bg-[#FDFBF7]/40 backdrop-blur-sm overflow-hidden">
          
          <h3 className="font-cinzel text-3xl md:text-4xl tracking-[2px] text-[#8B3A4A] mb-4 drop-shadow-sm opacity-90">Wedding Day</h3>
          <p className="font-montserrat text-sm md:text-base tracking-[3px] text-[#D4AF37] mb-16 opacity-90 uppercase font-semibold">27 September 2026</p>
          
          {/* Embossed Gold Foil Effect on Names */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#b58c22] to-[#7a5b0e] leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              style={{ textShadow: "0px 1px 1px rgba(255,255,255,0.8), 0px 2px 4px rgba(0,0,0,0.4)" }}
            >
              Aishwarya
            </h1>
            <span className="font-script text-4xl text-[#8B3A4A] my-4 opacity-80 leading-none drop-shadow-md">&</span>
            <h1 
              className="font-cinzel text-[54px] md:text-[64px] text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#b58c22] to-[#7a5b0e] leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
              style={{ textShadow: "0px 1px 1px rgba(255,255,255,0.8), 0px 2px 4px rgba(0,0,0,0.4)" }}
            >
              Raghav
            </h1>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isOpen ? 0.8 : 0, y: isOpen ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
           <span className="font-cinzel text-lg tracking-[2px] text-[#8B3A4A] mb-2 drop-shadow-sm uppercase">Scroll down</span>
           <ChevronDown className="w-6 h-6 text-[#8B3A4A] animate-bounce" />
        </motion.div>
      </motion.div>

      {/* The Grand Full-Screen Envelope */}
      <AnimatePresence>
        {!isOpen && (
          <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
            {/* Top Panel */}
            <motion.div 
              className="absolute inset-0 bg-refined-ivory origin-top border-b border-[#D8B98A]/30 drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] pointer-events-auto"
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
              className="absolute inset-0 bg-champagne origin-bottom border-t border-[#D8B98A]/20 drop-shadow-[0_-15px_30px_rgba(0,0,0,0.2)] pointer-events-auto"
              style={{ 
                clipPath: 'polygon(50% 50%, 100% 100%, 0 100%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ y: "100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/floral-motif.png')] opacity-[0.04] mix-blend-overlay" />
            </motion.div>

            {/* Left Panel */}
            <motion.div 
              className="absolute inset-0 bg-[#F6E9D8] origin-left border-r border-[#D8B98A]/10 pointer-events-auto"
              style={{ 
                clipPath: 'polygon(0 0, 50% 50%, 0 100%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.1)] pointer-events-none" />
            </motion.div>

            {/* Right Panel */}
            <motion.div 
              className="absolute inset-0 bg-[#F6E9D8] origin-right border-l border-[#D8B98A]/10 pointer-events-auto"
              style={{ 
                clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
              }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.2, ease: cinematicEase }}
            >
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.1)] pointer-events-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grand Wax Seal */}
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
              className="absolute inset-0 bg-[#D4AF37] rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isPressed ? 0.9 : 0.2, 
                scale: isPressed ? 1.6 : 0.8 
              }}
              transition={{ duration: 0.4 }}
            />

            {/* The Seal Itself */}
            <motion.div
              className="w-[110px] h-[110px] bg-gradient-to-br from-[#8B3A4A] via-[#5c1c28] to-[#3b0d17] rounded-full flex items-center justify-center border-[3px] border-[#D4AF37] text-champagne font-cinzel text-5xl shadow-[0_25px_80px_rgba(0,0,0,0.5)] relative"
              style={{ 
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.9), 0 25px 80px rgba(0,0,0,0.4)",
              }}
              animate={{
                scale: isPressed ? 0.92 : 1,
                rotate: isPressed ? -3 : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {/* Metallic gold text effect */}
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] bg-clip-text text-transparent bg-gradient-to-b from-[#FFF2CD] via-[#D4AF37] to-[#997A42] tracking-wider relative top-1">
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
