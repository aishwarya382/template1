import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="w-full py-24 px-6 flex items-center justify-center text-center">
      <motion.div 
        className="max-w-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <p className="font-montserrat text-sm leading-relaxed text-gray-700">
          We are honored to welcome you to the wedding ceremony of
        </p>
        <h2 className="font-cinzel text-3xl my-6 text-champagne-gold">
          Aishwarya & Raghav
        </h2>
        <p className="font-montserrat text-sm leading-relaxed text-gray-700">
          Your presence will make our special day even more meaningful.
        </p>
      </motion.div>
    </section>
  );
};

export default Welcome;
