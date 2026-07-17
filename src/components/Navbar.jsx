import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Story', 'Gallery', 'Events', 'RSVP'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-red/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury flex justify-between items-center">
        <div className="font-cinzel text-2xl font-bold text-gold tracking-widest">
          A<span className="text-ivory">&</span>R
        </div>
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link} className="relative group cursor-pointer">
              <span className={`font-montserrat text-sm tracking-[2px] uppercase transition-colors duration-300 ${scrolled ? 'text-ivory hover:text-gold-light' : 'text-ivory hover:text-gold-light'}`}>
                {link}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
