import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, delay = 0 }) => (
  <motion.div 
    className="w-full mb-16 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay }}
  >
    <h3 className="font-cinzel text-2xl text-champagne-gold mb-6 relative inline-block">
      {title}
      <span className="absolute -bottom-2 left-1/4 right-1/4 h-[1px] bg-champagne-gold/50" />
    </h3>
    {children}
  </motion.div>
);

const Details = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center max-w-2xl mx-auto">
      
      <Section title="Dress Code">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="font-montserrat font-bold text-gray-700 uppercase tracking-widest text-sm mb-2">Women</h4>
            <p className="font-montserrat text-gray-600">Elegant formal attire in pastel or jewel tones.</p>
          </div>
          <div>
            <h4 className="font-montserrat font-bold text-gray-700 uppercase tracking-widest text-sm mb-2">Men</h4>
            <p className="font-montserrat text-gray-600">Suits or traditional formal wear.</p>
          </div>
        </div>
      </Section>

      <Section title="Transportation">
        <p className="font-montserrat text-gray-600 mb-6">
          Shuttle service will be available from the city center to the venue.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-sm">
          <div>
            <h4 className="font-bold text-gray-700 mb-1">Pickup Point</h4>
            <p className="text-gray-600">Central Station</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-1">Departure</h4>
            <p className="text-gray-600">9:30 AM</p>
          </div>
        </div>
      </Section>

      <Section title="Accommodation">
        <p className="font-montserrat text-gray-600 mb-4">
          Special rates at Grand Palace (5 minutes from the venue).
        </p>
        <p className="font-montserrat text-sm text-gray-500">
          Use code <span className="font-bold text-champagne-gold">WEDDING2026</span> when booking
        </p>
      </Section>

      <Section title="With Love">
        <p className="font-montserrat text-gray-600 italic">
          Your love, blessings, and presence are the greatest gifts we could ever ask for.
          <br /><br />
          Thank you for being part of our journey.
        </p>
      </Section>

    </section>
  );
};

export default Details;
