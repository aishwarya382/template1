import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const SaveCalendar = () => {
  const handleSaveCalendar = () => {
    const title = encodeURIComponent('Aishwarya & Raghav Wedding');
    const description = encodeURIComponent('Join us as we celebrate the wedding of Aishwarya & Raghav.');
    const location = encodeURIComponent('Yamuna Palace Marriage Hall, 319/1, Mullupadi Village, Pollachi Main Rd, Tamil Nadu – 642109');
    const startTime = '20260927T123000Z'; // 6:00 PM IST is 12:30 PM UTC
    const endTime = '20260927T153000Z';   // 9:00 PM IST is 3:30 PM UTC

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${description}&location=${location}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="py-16 bg-transparent text-charcoal flex justify-center w-full">
      <div className="container-luxury text-center">
        <motion.button
          onClick={handleSaveCalendar}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-crimson text-white px-8 py-4 rounded-full font-montserrat uppercase tracking-[2px] flex items-center justify-center mx-auto shadow-xl hover:shadow-[0_0_20px_rgba(153,27,27,0.5)] transition-all duration-300 gap-3"
        >
          <Calendar className="w-5 h-5" />
          <span>Save to Calendar</span>
        </motion.button>
      </div>
    </section>
  );
};

export default SaveCalendar;
