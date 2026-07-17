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
    <section className="py-24 bg-bg-dark text-ivory">
      <div className="container-luxury">
        <h2 className="section-title">Captured Moments</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {IMAGES.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden cursor-pointer aspect-square relative group"
              onClick={() => setSelectedImage(index)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              className="absolute top-6 right-6 text-gold hover:text-ivory transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            
            <button 
              className="absolute left-6 text-gold hover:text-ivory transition-colors z-50"
              onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : IMAGES.length - 1))}
            >
              <ChevronLeft size={48} />
            </button>
            
            <img 
              src={IMAGES[selectedImage]} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-luxury border border-gold/20"
              alt="Selected"
            />
            
            <button 
              className="absolute right-6 text-gold hover:text-ivory transition-colors z-50"
              onClick={() => setSelectedImage((prev) => (prev < IMAGES.length - 1 ? prev + 1 : 0))}
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
