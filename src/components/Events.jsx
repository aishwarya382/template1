import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: "Mehendi",
    date: "June 27, 2026",
    time: "4:00 PM",
    venue: "Bride's Home"
  },
  {
    title: "Haldi",
    date: "June 28, 2026",
    time: "10:00 AM",
    venue: "Groom's Home"
  },
  {
    title: "Sangeet",
    date: "June 29, 2026",
    time: "9:30 PM",
    venue: "Grand Palace Hall"
  }
];

const Events = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-rose-gold/5">
      <motion.h2 
        className="font-cinzel text-3xl text-champagne-gold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Pre-Wedding Events
      </motion.h2>
      
      <div className="w-full max-w-lg grid grid-cols-1 gap-6">
        {events.map((event, i) => (
          <motion.div 
            key={i}
            className="glass-panel p-6 flex flex-col items-center text-center border-t-4 border-t-champagne-gold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3 className="font-cinzel text-2xl text-champagne-gold mb-2">{event.title}</h3>
            <p className="font-montserrat text-sm font-semibold text-gray-700 mb-1">{event.date}</p>
            <p className="font-montserrat text-sm text-gray-500">{event.time} • {event.venue}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
