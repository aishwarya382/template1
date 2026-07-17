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

  // Auto-play attempt on first interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.4;
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('Autoplay blocked:', err));
        
        // Remove listeners after first interaction
        window.removeEventListener('click', handleFirstInteraction);
        window.removeEventListener('scroll', handleFirstInteraction);
      }
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('scroll', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMusic = (e) => {
    e.stopPropagation();
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
    <div className="font-lora bg-ivory text-charcoal min-h-screen overflow-x-hidden relative">
      <Navbar />
      {/* Background Music Player */}
      <audio ref={audioRef} src="/background-music.webm" loop />
      
      {/* Floating Music Controller */}
      <button 
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-ivory/80 backdrop-blur-md rounded-full flex items-center justify-center border border-gold/40 shadow-glass-light hover:scale-110 transition-transform text-gold-dark"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

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
