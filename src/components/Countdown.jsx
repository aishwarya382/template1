import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // September 27, 2026 06:00 PM
    const targetDate = new Date("2026-09-27T18:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-transparent text-charcoal relative overflow-hidden flex justify-center w-full">
      <div className="container-luxury relative z-10 flex flex-col items-center">
        
        <h2 className="section-title text-maroon mb-16">The Final Countdown</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div 
              key={unit} 
              className="glass-card-light flex flex-col items-center justify-center w-28 sm:w-32 py-8 !p-0 shadow-[0_0_20px_rgba(153,27,27,0.1)] hover:shadow-[0_0_30px_rgba(153,27,27,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-crimson text-4xl sm:text-5xl font-cinzel tracking-wider drop-shadow-sm mb-2">
                {String(value).padStart(2, '0')}
              </h2>
              <span className="text-xs font-montserrat uppercase tracking-[3px] text-charcoal/70 font-semibold">
                {unit}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
