import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <section className="py-24 bg-bg-dark text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-50 mix-blend-overlay pointer-events-none" />
      <div className="container-luxury relative z-10 text-center">
        <h2 className="section-title">The Venue</h2>
        
        <motion.div 
          className="glass-card max-w-4xl mx-auto p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-64 md:h-auto md:aspect-square relative rounded-lg overflow-hidden border border-gold/30">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" 
                alt="Venue" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-4">
              <h3 className="font-playfair text-3xl text-gold">The Grand Palace</h3>
              <p className="font-lora text-ivory/80">
                123 Royal Avenue<br/>
                Udaipur, Rajasthan 313001<br/>
                India
              </p>
              <div className="pt-4">
                <a href="#" className="inline-block border border-gold text-gold px-8 py-3 font-montserrat uppercase tracking-[2px] text-xs hover:bg-gold hover:text-maroon transition-colors duration-300">
                  View Map
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Venue;
