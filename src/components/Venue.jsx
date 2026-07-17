import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  return (
    <section className="py-24 bg-transparent text-ivory">
      <div className="container-luxury text-center">
        <h2 className="section-title text-gold">The Venue</h2>
        
        <motion.div 
          className="max-w-4xl mx-auto glass-card-red p-10 mt-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <MapPin className="text-gold w-12 h-12" />
          </div>
          <h3 className="font-playfair text-3xl text-gold-light mb-4">The Grand Taj Palace</h3>
          <p className="font-montserrat text-lg text-ivory/80 leading-relaxed mb-8 text-center">
            1 Diplomatic Enclave, Chanakyapuri<br/>
            New Delhi, 110021<br/>
            India
          </p>
          <div className="pt-2 flex justify-center">
            <a href="#" className="btn-luxury inline-block text-sm uppercase tracking-[2px]">
              View Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venue;
