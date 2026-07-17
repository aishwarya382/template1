import React from 'react';
import { motion } from 'framer-motion';

const Quote = () => {
  const quote = "Two souls, one journey, and a lifetime of beautiful memories yet to be written.";
  
  // Staggered text reveal
  const words = quote.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="w-full py-24 px-8 bg-champagne-gold/5 flex items-center justify-center text-center italic">
      <motion.div 
        className="max-w-lg"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-4xl text-rose-gold/40 font-cinzel absolute -ml-6 -mt-4">"</span>
        {words.map((word, index) => (
          <motion.span
            variants={child}
            className="inline-block mr-[0.25em] font-cinzel text-xl md:text-2xl text-gray-800"
            key={index}
          >
            {word}
          </motion.span>
        ))}
        <span className="text-4xl text-rose-gold/40 font-cinzel absolute -mt-4">"</span>
      </motion.div>
    </section>
  );
};

export default Quote;
