import React from 'react';
import { motion } from 'framer-motion';

const Venue = () => {
  return (
    <section className="py-24 bg-transparent text-charcoal relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-80 mix-blend-multiply pointer-events-none" />
      <div className="container-luxury relative z-10 text-center">
        <h2 className="section-title">The Venue</h2>
        
        <motion.div 
          className="glass-card-light max-w-4xl mx-auto p-4 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 h-64 md:h-auto md:aspect-square relative rounded-xl overflow-hidden border border-gold/30 shadow-glass-light group">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop" 
                alt="Venue" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="w-full md:w-1/2 text-left space-y-4 px-4 md:px-8">
              <h3 className="font-playfair text-3xl text-gold-dark">The Grand Palace</h3>
              <p className="font-montserrat text-charcoal/80 leading-relaxed">
                123 Royal Avenue<br/>
                Udaipur, Rajasthan 313001<br/>
                India
              </p>
              <div className="pt-6">
                <a href="#" className="btn-luxury inline-block text-sm uppercase tracking-[2px]">
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
