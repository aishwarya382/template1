import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    { title: "Mehendi", time: "10:00 AM", date: "26 Sep 2026", desc: "A morning of colors, music, and henna." },
    { title: "Sangeet", time: "07:00 PM", date: "26 Sep 2026", desc: "Dance the night away with friends and family." },
    { title: "Wedding", time: "06:00 PM", date: "27 Sep 2026", desc: "The grand ceremony." },
    { title: "Reception", time: "08:30 PM", date: "27 Sep 2026", desc: "Dinner, drinks, and celebration." }
  ];

  return (
    <section className="py-24 bg-transparent text-ivory">
      <div className="container-luxury">
        <h2 className="section-title text-gold">The Celebration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((e, idx) => (
            <motion.div 
              key={idx}
              className="glass-card-red luxury-card p-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-playfair text-2xl text-gold-light mb-2">{e.title}</h3>
              <p className="font-montserrat text-sm tracking-[2px] text-ivory/80 uppercase mb-4 font-semibold">{e.date} • {e.time}</p>
              <div className="w-12 h-[1px] bg-gold/50 mx-auto mb-4" />
              <p className="font-montserrat text-ivory/90 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
