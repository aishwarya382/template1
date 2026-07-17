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

  useEffect(() => {
    if (isRevealed) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set proper resolution for canvas
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Fallback gradient while loading
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#E8D8B5');
    gradient.addColorStop(0.5, '#D4AF37');
    gradient.addColorStop(1, '#B5952F');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const drawText = () => {
      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.6)';
      ctx.shadowBlur = 8;

      ctx.font = '20px "Montserrat", sans-serif';
      ctx.fillText('🎁 SPECIAL MESSAGE', canvas.width / 2, canvas.height / 2 - 20);

      ctx.font = '28px "Cinzel Decorative", serif';
      ctx.fillText('Scratch to Reveal', canvas.width / 2, canvas.height / 2 + 20);
      
      ctx.shadowBlur = 0;
    };
    drawText();

    // Load Luxury Glitter Image
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = 'https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop'; // Dark/Gold luxury bokeh glitter
    img.onload = () => {
      // Re-draw with glitter
      ctx.globalCompositeOperation = 'source-over'; // ensure we paint over
      
      // Draw image to cover canvas
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      
      // Add a golden tint over the glitter for richness
      ctx.fillStyle = 'rgba(212,175,55,0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawText();
    };

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

      // Check to reveal entirely if sufficiently scratched
      scratchedPixels += (Math.PI * 40 * 40);
      if (scratchedPixels > totalPixels * 0.45) {
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
        
        {/* The Countdown Section */}
        <h2 className="section-title text-crimson mb-12">The Final Countdown</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-20"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="count-box-red flex flex-col items-center justify-center w-24 sm:w-28 py-6">
              <h2 className="drop-shadow-sm text-crimson-light animate-pulse text-4xl sm:text-5xl">
                {String(value).padStart(2, '0')}
              </h2>
              <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-[2px] text-charcoal/80 mt-3 font-semibold">
                {unit}
              </span>
            </div>
          ))}
        </motion.div>

        {/* The Scratch to Reveal Section */}
        <div className="relative w-full max-w-2xl h-[250px] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-crimson/30">
          
          {/* The Hidden Content (Special Message) */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl flex items-center justify-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isRevealed ? 1 : 0, scale: isRevealed ? 1 : 0.9 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <h3 className="font-playfair text-2xl text-crimson-light">✨ REVEALED ✨</h3>
              <p className="font-montserrat text-lg text-charcoal/90">
                We can't wait to celebrate with you!
              </p>
              <p className="font-montserrat text-sm font-semibold tracking-widest text-crimson uppercase mt-2 border-t border-crimson/30 pt-4">
                Dress Code: Traditional / Elegant
              </p>
              
              {/* Sparkle effects */}
              {isRevealed && (
                <>
                  <motion.div className="absolute -top-4 -left-4 w-8 h-8 bg-gold rounded-full filter blur-xl opacity-50" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} />
                  <motion.div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gold rounded-full filter blur-xl opacity-50" animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }} />
                </>
              )}
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
