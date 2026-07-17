import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    time: "9:30 AM",
    title: "Guest Arrival",
    desc: "We welcome you with warmth and joy."
  },
  {
    time: "10:30 AM",
    title: "Wedding Ceremony",
    desc: "Your gracious presence is requested."
  },
  {
    time: "7:30 PM onwards",
    title: "Reception",
    desc: "Your gracious presence is requested at the reception."
  }
];

const TimelineItem = ({ item, index }) => (
  <motion.div 
    className="flex w-full mb-8 relative"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
  >
    {/* Line */}
    <div className="absolute left-6 top-0 bottom-[-32px] w-[1px] bg-champagne-gold/30" />
    
    {/* Dot */}
    <div className="w-3 h-3 rounded-full bg-champagne-gold absolute left-[22.5px] top-2 shadow-[0_0_10px_rgba(216,185,138,0.8)]" />

    <div className="ml-16 glass-panel p-6 w-full relative overflow-hidden">
      <div className="absolute -right-10 -top-10 opacity-5 w-32 h-32 bg-rose-gold rounded-full blur-2xl" />
      <h3 className="font-cinzel text-xl text-champagne-gold mb-1">{item.title}</h3>
      <p className="font-montserrat text-xs font-semibold text-gray-500 mb-3">{item.time} • 27 September 2026</p>
      <p className="font-montserrat text-sm text-gray-700">{item.desc}</p>
    </div>
  </motion.div>
);

const Timeline = () => {
  return (
    <section className="w-full py-24 px-6 flex flex-col items-center">
      <motion.h2 
        className="font-cinzel text-3xl text-champagne-gold mb-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Program Timeline
      </motion.h2>
      <motion.p 
        className="font-montserrat text-sm text-gray-500 mb-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Wedding Day
      </motion.p>
      
      <div className="w-full max-w-md relative">
        {timelineData.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
