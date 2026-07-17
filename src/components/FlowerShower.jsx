import React from 'react';
import { motion } from 'framer-motion';

const FlowerShower = () => {
  // Reduced array to 12 petals for a minimal, gentle shower
  const petals = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {petals.map((_, i) => {
        // Randomize initial position, longer fall duration, delay, and smaller size
        const left = Math.random() * 100;
        const duration = 20 + Math.random() * 25; // Slower: 20s to 45s
        const delay = Math.random() * -30; // Start at different times
        const size = 8 + Math.random() * 12; // Smaller: 8px to 20px

        return (
          <motion.div
            key={i}
            className="absolute top-[-50px]"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              opacity: 0.2 + Math.random() * 0.3, // Much more subtle opacity
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: ['0vw', `${-5 + Math.random() * 10}vw`], // Less intense lateral sway
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
