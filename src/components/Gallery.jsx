import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069", // Bride portrait
  "https://images.unsplash.com/photo-1595986630530-969786b19b4d?auto=format&fit=crop&q=80&w=2070", // Groom portrait
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070", // Couple
  "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=2000", // Cake
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070", // Stage
  "https://images.unsplash.com/photo-1605886616428-1b327b87c71d?auto=format&fit=crop&q=80&w=2000", // Rings
  "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&q=80&w=2000", // Candle lit
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000"  // Grand hall
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center">
      <h2 className="font-cinzel text-3xl text-champagne-gold mb-12 text-center">Moments</h2>
      
      <div 
        className="relative w-full max-w-lg aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border-4 border-champagne-gold/30"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Wedding moment ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 5, ease: "linear" } // Ken Burns effect
            }}
          />
        </AnimatePresence>
        
        {/* Overlays removed for clearer images */}
      </div>
      
      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-champagne-gold w-6' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
