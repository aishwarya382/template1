import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  return (
    <section className="w-full py-24 px-6 bg-transparent text-charcoal flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="max-w-2xl text-center z-10 glass-card-light p-10 md:p-14"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="font-playfair text-2xl md:text-4xl leading-relaxed text-gold-dark italic">
          "Two souls with but a single thought, two hearts that beat as one."
        </p>
        <span className="block mt-8 font-montserrat text-sm tracking-[4px] text-charcoal/60 uppercase">
          — John Keats
        </span>
      </motion.div>
    </section>
  );
};

export default Quote;
