import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InvitationReveal = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    // Set actual size in memory (scaled to account for extra pixel density)
    const scale = window.devicePixelRatio || 1;
    canvas.width = container.offsetWidth * scale;
    canvas.height = container.offsetHeight * scale;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(scale, scale);

    // Draw Gold Overlay
    const fillGoldGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, canvas.width/scale, canvas.height/scale);
      gradient.addColorStop(0, '#D8B98A');
      gradient.addColorStop(0.5, '#F3E5AB');
      gradient.addColorStop(1, '#B76E79');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width/scale, canvas.height/scale);

      // Add "Scratch to Reveal" text
      ctx.fillStyle = '#fff';
      ctx.font = '24px "Cinzel Decorative"';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch to Reveal', (canvas.width/scale) / 2, (canvas.height/scale) / 2 - 20);
      
      ctx.font = '14px Montserrat';
      ctx.fillText('✨ A special invitation awaits ✨', (canvas.width/scale) / 2, (canvas.height/scale) / 2 + 20);
    };

    fillGoldGradient();

    let isDrawing = false;
    let scratchedPixels = 0;
    const totalPixels = (canvas.width/scale) * (canvas.height/scale);

    const getMousePos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (e) => {
      if (!isDrawing) return;
      e.preventDefault();

      const { x, y } = getMousePos(e);

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();

      // Check scratched percentage occasionally
      if (Math.random() > 0.8 && !isScratched) {
        checkScratched();
      }
    };

    const checkScratched = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      let transparentPixels = 0;
      const data = imageData.data;
      
      for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) transparentPixels++;
      }

      const percentage = (transparentPixels / (data.length / 4)) * 100;
      if (percentage > 40) {
        setIsScratched(true);
        // Fade out canvas
        canvas.style.transition = 'opacity 1s ease-out';
        canvas.style.opacity = '0';
        setTimeout(() => {
          canvas.style.display = 'none';
        }, 1000);
      }
    };

    const handleDown = (e) => { isDrawing = true; scratch(e); };
    const handleUp = () => { isDrawing = false; };

    canvas.addEventListener('mousedown', handleDown);
    canvas.addEventListener('mousemove', scratch);
    canvas.addEventListener('mouseup', handleUp);
    canvas.addEventListener('mouseleave', handleUp);

    canvas.addEventListener('touchstart', handleDown, { passive: false });
    canvas.addEventListener('touchmove', scratch, { passive: false });
    canvas.addEventListener('touchend', handleUp);

    return () => {
      canvas.removeEventListener('mousedown', handleDown);
      canvas.removeEventListener('mousemove', scratch);
      canvas.removeEventListener('mouseup', handleUp);
      canvas.removeEventListener('mouseleave', handleUp);

      canvas.removeEventListener('touchstart', handleDown);
      canvas.removeEventListener('touchmove', scratch);
      canvas.removeEventListener('touchend', handleUp);
    };
  }, [isScratched]);

  return (
    <section className="w-full py-24 px-6 flex items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl glass-panel bg-white"
      >
        {/* The hidden invitation */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-envelope-texture">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isScratched ? 1 : 0, scale: isScratched ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="border border-champagne-gold/40 p-6 h-full flex flex-col justify-center items-center w-full"
          >
            <h3 className="font-cinzel text-2xl text-champagne-gold mb-6">You're Invited</h3>
            
            <p className="font-montserrat text-gray-700 font-semibold mb-2">Tuesday, 27 September 2026</p>
            <p className="font-montserrat text-gray-600 mb-6">6:30 PM</p>
            
            <p className="font-montserrat text-gray-800 text-lg mb-8">Grand Palace Hall</p>
            
            <p className="font-cinzel text-sm text-champagne-gold/80 italic">
              We can't wait to celebrate with you
            </p>
          </motion.div>
        </div>

        {/* The scratch canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-pointer touch-none z-10"
        />
      </div>
    </section>
  );
};

export default InvitationReveal;
