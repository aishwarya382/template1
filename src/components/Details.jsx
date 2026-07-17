import React from 'react';
import { motion } from 'framer-motion';

const Details = () => {
  return (
    <section className="py-24 bg-transparent text-charcoal">
      <div className="container-luxury text-center">
        <h2 className="section-title text-crimson">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="glass-card-light p-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl text-crimson-light mb-4">Dress Code</h3>
            <p className="font-montserrat text-charcoal/80">
              Traditional Indian Attire or Black-Tie Formal. We request that guests avoid wearing pure white or red.
            </p>
          </motion.div>
          <motion.div 
            className="glass-card-light p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-2xl text-crimson-light mb-4">Accommodations</h3>
            <p className="font-montserrat text-charcoal/80">
              A block of rooms has been reserved at The Grand Taj Palace. Please mention our names when booking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Details;
