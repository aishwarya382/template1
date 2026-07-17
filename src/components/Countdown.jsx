import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isRevealed, setIsRevealed] = useState(false);
  const canvasRef = useRef(null);

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

  useEffect(() => {
    if (isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set proper resolution for canvas
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Fill with luxury gold gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#E8D8B5');
    gradient.addColorStop(0.5, '#D4AF37');
    gradient.addColorStop(1, '#B5952F');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add instruction text
    ctx.fillStyle = '#1F1F1F';
    ctx.font = '24px "Cinzel Decorative", serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Scratch to Reveal', canvas.width / 2, canvas.height / 2);

    let isDrawing = false;
    let scratchedPixels = 0;
    // We'll estimate instead of scanning the whole image every frame
    const totalPixels = canvas.width * canvas.height;

    const startDrawing = (e) => {
      isDrawing = true;
      scratch(e);
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      e.preventDefault();

      const rect = canvas.getBoundingClientRect();
      const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
      const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();

      // Very rough check to reveal entirely if sufficiently scratched
      scratchedPixels += (Math.PI * 40 * 40);
      if (scratchedPixels > totalPixels * 0.4) {
        setIsRevealed(true);
      }
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseleave', stopDrawing);
      
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchend', stopDrawing);
    };
  }, [isRevealed]);

  return (
    <section className="py-20 bg-transparent text-charcoal relative overflow-hidden">
      <div className="container-luxury relative z-10 flex flex-col items-center">
        
        <h2 className="section-title text-gold-dark">The Final Countdown</h2>

        <div className="relative w-full max-w-3xl h-[280px] sm:h-[220px] rounded-3xl overflow-hidden shadow-glass-light border border-gold/30">
          
          {/* The Hidden Content (Countdown) */}
          <div className="absolute inset-0 bg-ivory/90 backdrop-blur-md flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isRevealed ? 1 : 0.4, scale: isRevealed ? 1 : 0.9 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 p-6"
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="count-box-light flex flex-col items-center justify-center w-20 sm:w-28">
                  <h2 className="drop-shadow-sm text-gold-dark animate-pulse text-3xl sm:text-4xl">
                    {String(value).padStart(2, '0')}
                  </h2>
                  <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-[2px] text-charcoal/70 mt-2 font-semibold">
                    {unit}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* The Scratch Canvas */}
          <AnimatePresence>
            {!isRevealed && (
              <motion.canvas
                ref={canvasRef}
                exit={{ opacity: 0, filter: 'blur(10px)', scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-20"
              />
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Countdown;
