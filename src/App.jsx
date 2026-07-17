import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Quote from './components/Quote';
import InvitationReveal from './components/InvitationReveal';
import Gallery from './components/Gallery';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';
import Venue from './components/Venue';
import Details from './components/Details';
import Events from './components/Events';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import Particles from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { Music, Music2 } from 'lucide-react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Audio will play on first user interaction as requested
    const handleInteraction = () => {
      if (!isPlaying && audioRef.current) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.log(e));
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('scroll', handleInteraction);
      }
    };
    
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    
    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
    };
  }, [isPlaying]);

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

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative bg-soft-ivory text-gray-800 min-h-screen font-montserrat">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-champagne-gold origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#D8B98A",
            },
            links: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 40,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Audio Element & Controller */}
      {/* Placeholder Audio */}
      <audio 
        ref={audioRef} 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" 
        loop 
        onVolumeChange={(e) => { e.target.volume = 0.35; }} // Initialize volume to 35%
      />
      <button 
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-champagne-gold/80 text-white shadow-lg backdrop-blur hover:bg-champagne-gold transition-colors"
      >
        {isPlaying ? <Music className="w-6 h-6" /> : <Music2 className="w-6 h-6 opacity-50" />}
      </button>

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <Hero />
        <Welcome />
        <Quote />
        <InvitationReveal />
        <Gallery />
        <Countdown />
        <Timeline />
        <Events />
        <Venue />
        <Details />
        <RSVP />
      </main>

      <Footer />
    </div>
  );
}

export default App;
