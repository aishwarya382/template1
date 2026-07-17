import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-bg-light border-t border-crimson/20 text-center relative overflow-hidden">
      <div className="container-luxury">
        <h2 className="font-script text-5xl text-crimson mb-4 drop-shadow-sm">A & R</h2>
        <div className="w-24 h-[1px] bg-gold/50 mx-auto mb-4" />
        <p className="font-montserrat text-xs font-semibold tracking-[4px] text-charcoal/60 uppercase mb-4">
          Forever & Always
        </p>
        <p className="font-playfair text-lg text-crimson-light italic">
          With Love, Aishwarya & Raghav
        </p>
      </div>
    </footer>
  );
};
export default Footer;
