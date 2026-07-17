import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Quote from './components/Quote';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Events from './components/Events';
import Venue from './components/Venue';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

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

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="font-lora bg-bg-red text-ivory min-h-screen overflow-x-hidden relative">
      
      {/* Entry Overlay - Tap to Open */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div 
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center cursor-pointer bg-bg-red"
            style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" }}
            onClick={handleEnter}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_30%,_rgba(69,10,10,0.8)_100%)] pointer-events-none" />
            
            <motion.div 
              className="text-center relative z-10 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h1 className="font-cinzel text-5xl md:text-6xl text-gold mb-12 drop-shadow-sm">A & R</h1>
              
              <div className="flex flex-col items-center gap-3 mt-16 animate-pulse">
                <span className="font-cinzel tracking-editorial text-xs md:text-sm text-gold-light/80 uppercase">
                  Tap to Open
                </span>
                <ChevronDown className="w-5 h-5 text-gold-light/60" />
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
            onClick={toggleMusic}
            className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-[#5A0F1B] rounded-full flex items-center justify-center border border-gold/20 shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 hover:bg-[#701524] transition-all text-ivory/90"
          >
            {isPlaying ? <Volume2 size={24} strokeWidth={1.5} /> : <VolumeX size={24} strokeWidth={1.5} />}
          </motion.button>
        )}
      </AnimatePresence>

      <Hero />
      <Welcome />
      <Quote />
      <Gallery />
      <Timeline />
      <Events />
      <Venue />
      <RSVP />
      <Footer />
    </div>
  );
}

export default App;
