import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center">
      <motion.h2 
        className="font-cinzel text-3xl text-champagne-gold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Venue
      </motion.h2>
      
      <motion.div 
        className="w-full max-w-lg glass-panel overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="h-64 bg-gray-200 relative overflow-hidden">
          {/* Placeholder for Map. We use a static map image for premium look, then a button to open actual maps */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
            alt="Map location" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-champagne-gold/20 mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl animate-bounce">
              <MapPin className="w-8 h-8 text-champagne-gold" />
            </div>
          </div>
        </div>
        
        <div className="p-8 text-center">
          <h3 className="font-cinzel text-2xl text-champagne-gold mb-2">Grand Palace Hall</h3>
          <p className="font-montserrat text-gray-600 mb-6">123 Celebration Avenue, Chennai</p>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 bg-champagne-gold text-white font-montserrat tracking-widest text-sm uppercase rounded shadow-lg shadow-champagne-gold/30 hover:bg-[#B76E79] transition-colors duration-300 relative overflow-hidden group"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <MapPin className="w-4 h-4 mr-2" />
            Open Map
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Venue;
