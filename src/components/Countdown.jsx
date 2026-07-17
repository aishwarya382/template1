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
    // September 27, 2026
    const targetDate = new Date("2026-09-27T00:00:00").getTime();

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
    <section className="py-20 bg-transparent text-charcoal relative overflow-hidden">
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="count-box-light flex flex-col items-center justify-center">
              <h2 className="drop-shadow-sm text-gold-dark animate-pulse">
                {String(value).padStart(2, '0')}
              </h2>
              <span className="text-xs sm:text-sm font-montserrat uppercase tracking-[3px] text-charcoal/70 mt-2 font-semibold">
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
