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
    <section className="py-24 bg-transparent text-charcoal">
      <div className="container-luxury">
        <h2 className="section-title">Schedule of Events</h2>
        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold-light -translate-x-1/2" />
          
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
                  <div className={`glass-card-light p-6 ${idx % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <h3 className="font-playfair text-xl text-gold-dark">{e.title}</h3>
                    <p className="font-montserrat text-xs font-semibold tracking-widest text-charcoal/70 my-2">{e.time}</p>
                    <p className="font-montserrat text-sm text-charcoal/90">{e.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ivory border-2 border-gold shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Timeline;
