import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Apple, Mail, CheckCircle2, ChevronDown } from 'lucide-react';

const SaveCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const eventDetails = {
    title: 'Wedding Reception – R Praveenkumar & C Suryaprabha',
    description: 'Join us to celebrate the wedding reception of R Praveenkumar & C Suryaprabha.',
    location: 'Yamuna Palace Marriage Hall, 319/1, Mullupadi Village, Pollachi Main Rd, Mulluppadi, Tamil Nadu – 642109',
    // 22 August 2026 6:00 PM IST -> 12:30 PM UTC
    startTimeUTC: '20260822T123000Z', 
    // 22 August 2026 9:00 PM IST -> 3:30 PM UTC
    endTimeUTC: '20260822T153000Z'
  };

  const generateICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding Invitation//EN
BEGIN:VEVENT
UID:${new Date().getTime()}@wedding.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDetails.startTimeUTC}
DTEND:${eventDetails.endTimeUTC}
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Praveenkumar_Suryaprabha_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGoogle = () => {
    const title = encodeURIComponent(eventDetails.title);
    const desc = encodeURIComponent(eventDetails.description);
    const loc = encodeURIComponent(eventDetails.location);
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${eventDetails.startTimeUTC}/${eventDetails.endTimeUTC}&details=${desc}&location=${loc}`;
    window.open(url, '_blank');
    triggerSuccess();
  };

  const handleOutlook = () => {
    generateICS();
    triggerSuccess();
  };

  const handleApple = () => {
    generateICS();
    triggerSuccess();
  };

  const triggerSuccess = () => {
    setIsOpen(false);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 4000);
  };

  return (
    <section className="py-16 bg-transparent flex justify-center w-full relative z-30">
      <div className="container-luxury flex flex-col items-center relative">
        
        <AnimatePresence mode="wait">
          {!isSaved ? (
            <motion.div 
              key="button-container"
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-[#4a3b10] px-8 py-4 rounded-full font-montserrat font-bold uppercase tracking-[2px] flex items-center justify-center shadow-[0_0_20px_rgba(191,149,63,0.4)] hover:shadow-[0_0_30px_rgba(191,149,63,0.6)] transition-all duration-300 gap-3 border border-[#fcf6ba]/50"
              >
                <Calendar className="w-5 h-5" />
                <span>Add to Calendar</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gold/30 p-2 w-64 overflow-hidden z-50"
                  >
                    <button onClick={handleGoogle} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gold/10 rounded-xl transition-colors text-charcoal font-montserrat text-sm text-left">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                      Google Calendar
                    </button>
                    <button onClick={handleApple} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gold/10 rounded-xl transition-colors text-charcoal font-montserrat text-sm text-left">
                      <Apple className="w-5 h-5" />
                      Apple Calendar
                    </button>
                    <button onClick={handleOutlook} className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gold/10 rounded-xl transition-colors text-charcoal font-montserrat text-sm text-left">
                      <Mail className="w-5 h-5" />
                      Outlook
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center gap-3 text-gold"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                <CheckCircle2 className="w-12 h-12 text-[#bf953f] drop-shadow-md" />
              </motion.div>
              <p className="font-playfair text-lg text-charcoal tracking-wide">
                Your seat has been reserved in the calendar
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
};

export default SaveCalendar;
