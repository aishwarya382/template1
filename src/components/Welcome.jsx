import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="py-24 bg-bg-dark text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-50 mix-blend-overlay pointer-events-none" />
      
      <div className="container-luxury relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto glass-card p-10 md:p-16 relative"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />

          <h2 className="section-title">Join Us</h2>
          <p className="font-lora text-lg md:text-xl leading-relaxed text-ivory/80">
            Together with their families, we joyfully invite you to share in the celebration of our marriage.
            It would be our greatest honor to have you by our side as we exchange vows and begin our new life together.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="w-24 h-[1px] bg-gold/50"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
