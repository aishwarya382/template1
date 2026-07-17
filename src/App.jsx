import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import ScratchCard from './components/ScratchCard';
import SaveCalendar from './components/SaveCalendar';
import Gallery from './components/Gallery';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import FlowerShower from './components/FlowerShower';
import SwanBackgroundVideo from './components/SwanBackgroundVideo';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef(null);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <div className="font-lora bg-bg-light text-charcoal min-h-screen overflow-x-hidden relative">
      
      {/* Dynamic Background Video */}
      <SwanBackgroundVideo videoSrc="" />

      {/* Luxury Background Frame */}
      <div className="fixed inset-4 z-40 border-[1px] border-crimson/30 pointer-events-none mix-blend-multiply" />
      <div className="fixed inset-6 z-40 border-[1px] border-crimson/20 pointer-events-none mix-blend-multiply" />
      
      {/* Flower Shower Particle System */}
      <FlowerShower />

      {/* Entry Overlay - Red Curtains & Wax Seal */}
      <AnimatePresence>
        {!hasEntered && (
          <div className="fixed inset-0 z-[100] pointer-events-none flex bg-white">
            {/* Left Curtain */}
            <motion.div 
              className="w-1/2 h-full border-r-2 border-black/30 shadow-[10px_0_30px_rgba(0,0,0,0.7)] relative z-10"
              initial={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ backgroundColor: '#8b0000', backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
            />
            {/* Right Curtain */}
            <motion.div 
              className="w-1/2 h-full border-l-2 border-black/30 shadow-[-10px_0_30px_rgba(0,0,0,0.7)] relative z-10"
              initial={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
              style={{ backgroundColor: '#8b0000', backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
            />
            
            {/* Wax Seal Container (Centered on top of curtains) */}
            <motion.div 
              className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer pointer-events-auto"
              onClick={handleEnter}
              exit={{ opacity: 0, scale: 2, filter: 'blur(15px)' }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div 
                className="text-center relative flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="relative inline-flex items-center justify-center p-8">
                  {/* Outer glowing rings */}
                  <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-2 rounded-full border border-white/40 animate-pulse" style={{ animationDuration: '2s' }} />
                  
                  {/* The Red Wax Seal */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-30 w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-gradient-to-br from-[#ff1a1a] via-[#dc2626] to-[#8b0000] rounded-full flex flex-col items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.4),_0_15px_40px_rgba(0,0,0,0.8)] border-2 border-white/30"
                  >
                     <span className="font-montserrat text-white/90 text-[10px] md:text-xs uppercase tracking-widest drop-shadow-md font-semibold">
                       Open
                     </span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Navbar />
      {/* Background Music Player */}
      <audio ref={audioRef} src="/background-music.webm" loop />
      
      {/* Floating Music Controller */}
      <AnimatePresence>
        {hasEntered && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ delay: 1, duration: 0.5 }}
            onClick={toggleAudio}
            className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border border-crimson/20 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:scale-105 hover:bg-gray-50 transition-all text-crimson"
          >
            {isPlaying ? <Volume2 size={24} strokeWidth={1.5} /> : <VolumeX size={24} strokeWidth={1.5} />}
          </motion.button>
        )}
      </AnimatePresence>

      <Hero />
      <Countdown />
      <ScratchCard />
      <SaveCalendar />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
