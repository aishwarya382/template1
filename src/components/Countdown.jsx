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
    <section className="w-full py-24 px-6 flex flex-col items-center bg-rose-gold/5">
      <motion.h2 
        className="font-cinzel text-3xl text-champagne-gold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Countdown to Forever
      </motion.h2>
      
      <div className="flex justify-center flex-wrap gap-y-6">
        <FlipUnit value={timeLeft.days} label="Days" />
        <FlipUnit value={timeLeft.hours} label="Hours" />
        <FlipUnit value={timeLeft.minutes} label="Minutes" />
        <FlipUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </section>
  );
};

export default Countdown;
