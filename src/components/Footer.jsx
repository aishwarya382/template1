import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-20 px-6 flex flex-col items-center justify-center text-center bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-champagne-gold/20 via-gray-900 to-gray-900 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <p className="font-montserrat text-sm tracking-widest uppercase text-champagne-gold/80 mb-6">With love</p>
        <p className="font-montserrat font-light text-gray-300 mb-12 max-w-sm">
          We can't wait to celebrate with you
        </p>
        
        <h2 className="font-cinzel text-4xl text-white mb-2">Aishwarya</h2>
        <span className="font-cinzel text-xl text-champagne-gold my-2">&</span>
        <h2 className="font-cinzel text-4xl text-white mt-2 mb-16">Raghav</h2>
        
        <p className="font-montserrat text-xs text-gray-500">
          Create your beautiful memory with Aishwarya & Raghav
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
