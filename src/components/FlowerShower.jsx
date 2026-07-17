import React from 'react';
import { motion } from 'framer-motion';

const FlowerShower = () => {
  // Create an array of 25 petals
  const petals = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {petals.map((_, i) => {
        // Randomize initial position, fall duration, delay, and rotation
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 15; // 10s to 25s
        const delay = Math.random() * -20; // Start at different times
        const size = 15 + Math.random() * 20; // 15px to 35px

        return (
          <motion.div
            key={i}
            className="absolute top-[-50px]"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.6 + Math.random() * 0.4,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: ['0vw', `${-10 + Math.random() * 20}vw`],
              rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gold/60 drop-shadow-md">
              <path d="M50,0 C60,30 90,40 100,50 C90,60 60,70 50,100 C40,70 10,60 0,50 C10,40 40,30 50,0 Z" />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FlowerShower;
