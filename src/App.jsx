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

      {/* Entry Overlay - Tap to Open */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer bg-bg-light"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}
            onClick={handleEnter}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(255,255,255,0.8)_100%)] pointer-events-none" />
            
            <motion.div 
              className="text-center relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative inline-block">
                <img 
                  src="/envelope-ar.png" 
                  alt="Open your invitation" 
                  className="w-full max-w-[320px] md:max-w-[440px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)] relative z-10 rounded-lg"
                  draggable="false"
                />
              </div>
              
              <div className="flex flex-col items-center gap-3 mt-8 animate-pulse">
                <span className="font-cinzel tracking-editorial text-xs md:text-sm text-crimson/80 uppercase">
                  Tap to Open
                </span>
                <ChevronDown className="w-5 h-5 text-crimson/60" />
              </div>
            </motion.div>
          </motion.div>
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
