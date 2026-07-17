import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { title: "Arrival", time: "05:00 PM", desc: "Welcome drinks and seating." },
    { title: "Ceremony", time: "06:00 PM", desc: "The exchange of vows." },
    { title: "Photos", time: "07:30 PM", desc: "Capturing memories with loved ones." },
    { title: "Dinner", time: "08:30 PM", desc: "A grand feast to celebrate." }
  ];

  return (
    <section className="py-24 bg-bg-dark text-ivory">
      <div className="container-luxury">
        <h2 className="section-title">Schedule of Events</h2>
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 -translate-x-1/2" />
          
          <div className="space-y-12 relative z-10">
            {events.map((e, idx) => (
              <motion.div 
                key={idx}
                className={`flex items-center ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-1/2 px-4 md:px-8">
                  <div className={`glass-card p-6 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="font-playfair text-xl text-gold">{e.title}</h3>
                    <p className="font-montserrat text-xs tracking-widest text-ivory/70 my-2">{e.time}</p>
                    <p className="font-lora text-sm text-ivory/90">{e.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-maroon border-2 border-gold shadow-[0_0_10px_rgba(201,168,76,0.8)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
