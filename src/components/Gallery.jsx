import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const IMAGES = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549488344-c146e297a731?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509927083803-4bd519298ac4?q=80&w=1000&auto=format&fit=crop'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-transparent text-charcoal">
      <div className="container-luxury">
        <h2 className="section-title text-crimson">Captured Moments</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass-card-light overflow-hidden cursor-pointer aspect-square relative group p-2"
              onClick={() => setSelectedImage(index)}
            >
              <div className="w-full h-full overflow-hidden rounded-xl relative">
                <img 
                  src={img} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <span className="font-playfair text-charcoal text-xl md:text-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg-light/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              className="absolute top-6 right-6 text-crimson hover:text-crimson-light transition-colors z-50 bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-crimson/30"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-6 text-crimson hover:text-crimson-light transition-colors z-50 bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-crimson/30"
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : IMAGES.length - 1))}
            >
              <ChevronLeft size={32} />
            </button>
            
            <img 
              src={IMAGES[selectedImage]} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-crimson/20"
              alt="Selected"
            />
            
            <button 
              className="absolute right-6 text-crimson hover:text-crimson-light transition-colors z-50 bg-white rounded-full p-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] border border-crimson/30"
              onClick={() => setSelectedImage((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0))}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
