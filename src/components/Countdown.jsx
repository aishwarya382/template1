import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipUnit = ({ value, label }) => (
  <div className="flex flex-col items-center mx-2">
    <div className="relative w-16 h-20 bg-white/40 backdrop-blur-md rounded-lg flex items-center justify-center shadow-lg border border-white/50 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 20, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -20, opacity: 0, rotateX: 90 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="absolute font-cinzel text-3xl text-champagne-gold font-bold"
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </AnimatePresence>
      {/* Subtle glow pulse every second (managed by key change in parent) */}
      <motion.div 
        key={`glow-${value}`}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-champagne-gold/20"
      />
    </div>
    <span className="mt-3 font-montserrat text-xs tracking-widest text-gray-500 uppercase">{label}</span>
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-27T10:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) return;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-bg-dark text-ivory relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="count-box flex flex-col items-center justify-center">
              <h2 className="text-4xl sm:text-5xl drop-shadow-md">
                {String(value).padStart(2, '0')}
              </h2>
              <span className="text-xs sm:text-sm font-montserrat uppercase tracking-[3px] text-ivory/70 mt-2">
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
