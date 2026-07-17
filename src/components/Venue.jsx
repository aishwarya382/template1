import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Venue = () => {
  return (
    <section className="py-24 bg-transparent text-ivory">
      <div className="container-luxury text-center">
        <h2 className="section-title text-gold">The Venue</h2>
        
        <motion.div 
          className="max-w-4xl mx-auto glass-card-red p-10 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
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
