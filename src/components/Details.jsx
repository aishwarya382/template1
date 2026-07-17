import React from 'react';
import { motion } from 'framer-motion';

const Details = () => {
  return (
    <section className="py-24 bg-transparent text-charcoal relative overflow-hidden">
      <div className="container-luxury relative z-10 text-center">
        <h2 className="section-title">Wedding Details</h2>
        <motion.div 
          className="glass-card-light max-w-3xl mx-auto p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-10">
            <h3 className="font-playfair text-2xl text-gold-dark mb-3">Dress Code</h3>
            <p className="font-montserrat text-lg text-charcoal/80">Formal / Traditional Indian Attire</p>
          </div>
          <div className="mb-10">
            <h3 className="font-playfair text-2xl text-gold-dark mb-3">Accommodation</h3>
            <p className="font-montserrat text-lg text-charcoal/80">Rooms have been reserved for our guests at The Grand Palace Hotel. Please mention our names when booking.</p>
          </div>
          <div>
            <h3 className="font-playfair text-2xl text-gold-dark mb-3">Gifts</h3>
            <p className="font-montserrat text-lg text-charcoal/80">Your presence is the greatest gift. If you wish to bless us with a gift, a wishing well will be present at the reception.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Details;
