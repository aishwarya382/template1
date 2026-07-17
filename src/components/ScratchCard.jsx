import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScratchCard = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Set canvas size to match container
    const resizeCanvas = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        
        if (width === 0 || height === 0) {
          // If container isn't ready, try again in 100ms
          setTimeout(resizeCanvas, 100);
          return;
        }

        canvas.width = width;
        canvas.height = height;
        
        // Fill with metallic silver texture
        if (!isScratched) {
          fillCanvas(ctx, canvas);
        }
      }
    };

    const fillCanvas = (ctx, canvas) => {
      // Silver gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#e0e0e0');
      gradient.addColorStop(0.5, '#f5f5f5');
      gradient.addColorStop(1, '#c0c0c0');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add "Scratch to Reveal" text
      const drawText = () => {
        ctx.fillStyle = '#666';
        ctx.font = '24px "Playfair Display", serif, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('✨ Scratch to Reveal Your Invitation ✨', canvas.width / 2, canvas.height / 2);
      };

      if (document.fonts) {
        document.fonts.ready.then(drawText);
      } else {
        drawText();
      }
    };

    // Initial resize with a slight delay to ensure layout is complete
    setTimeout(resizeCanvas, 100);
    
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [isScratched]);

  const getPointerPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const handlePointerDown = (e) => {
    if (isScratched) return;
    setIsDrawing(true);
    scratch(e);
  };

  const handlePointerMove = (e) => {
    if (!isDrawing || isScratched) return;
    if (e.cancelable) e.preventDefault(); // Prevent scrolling on touch
    scratch(e);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    checkScratched();
  };

  const scratch = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pos = getPointerPos(e);
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 40, 0, Math.PI * 2);
    ctx.fill();
  };

  const checkScratched = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    
    let transparent = 0;
    // Check alpha channel (every 4th value)
    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] < 50) transparent++; // < 50 handles anti-aliasing edge cases
    }
    
    const percentage = transparent / (pixels.length / 4);
    if (percentage > 0.45) { // If 45% scratched, reveal all
      setIsScratched(true);
    }
  };

  return (
    <section className="py-24 px-6 bg-transparent text-charcoal">
      <div className="container-luxury text-center">
        <h2 className="section-title text-maroon">A Surprise Awaits</h2>
        
        <div 
          ref={containerRef}
          className="relative max-w-2xl mx-auto h-[450px] md:h-[500px] glass-card-light overflow-hidden shadow-2xl mt-12 rounded-xl border-2 border-crimson/20"
        >
          {/* Revealed Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white/80">
            <AnimatePresence>
              {isScratched && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="text-center w-full"
                >
                  <h3 className="font-cinzel text-2xl md:text-3xl text-maroon mb-6 uppercase tracking-widest">
                    You're Invited
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <p className="font-playfair text-sm text-crimson uppercase tracking-[3px] mb-1">Date</p>
                      <p className="font-montserrat text-lg font-semibold text-charcoal">27 September 2026</p>
                      <p className="font-montserrat text-sm text-charcoal/70">Sunday</p>
                    </div>
                    
                    <div>
                      <p className="font-playfair text-sm text-crimson uppercase tracking-[3px] mb-1">Time</p>
                      <p className="font-montserrat text-lg font-semibold text-charcoal">6:00 PM – 9:00 PM</p>
                    </div>
                    
                    <div>
                      <p className="font-playfair text-sm text-crimson uppercase tracking-[3px] mb-1">Venue</p>
                      <p className="font-montserrat text-lg font-semibold text-charcoal">Yamuna Palace Marriage Hall</p>
                      <p className="font-montserrat text-sm text-charcoal/80 max-w-[250px] mx-auto leading-relaxed">
                        319/1, Mullupadi Village<br/>
                        Pollachi Main Rd, Tamil Nadu – 642109
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-crimson/20">
                    <p className="font-playfair text-sm text-crimson uppercase tracking-[3px] mb-2">With Love</p>
                    <p className="font-cinzel text-xl text-maroon">Aishwarya 🩷 Raghav</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Scratch Canvas */}
          <AnimatePresence>
            {!isScratched && (
              <motion.canvas
                ref={canvasRef}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
                className="absolute inset-0 w-full h-full cursor-crosshair z-20 touch-none"
              />
            )}
          </AnimatePresence>
          
          {/* Shimmer effect when scratched */}
          <AnimatePresence>
             {isScratched && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 pointer-events-none rounded-xl shadow-[inset_0_0_50px_rgba(153,27,27,0.2)]"
                />
             )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ScratchCard;
