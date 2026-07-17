import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const RSVP = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    alert('Thank you for your RSVP!');
  };

  return (
    <section className="py-24 bg-bg-dark text-ivory">
      <div className="container-luxury">
        <h2 className="section-title">RSVP</h2>
        <motion.div 
          className="glass-card max-w-2xl mx-auto p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-playfair text-gold mb-2">Name</label>
              <input 
                {...register("name", { required: true })} 
                className="w-full bg-black/40 border border-gold/30 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-playfair text-gold mb-2">Email</label>
              <input 
                type="email"
                {...register("email", { required: true })} 
                className="w-full bg-black/40 border border-gold/30 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-playfair text-gold mb-2">Will you attend?</label>
              <select 
                {...register("attending")} 
                className="w-full bg-black/40 border border-gold/30 rounded px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors appearance-none"
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-[#C9A84C] to-[#8B3A4A] text-ivory font-playfair text-xl py-4 rounded shadow-luxury hover:opacity-90 transition-opacity mt-4"
            >
              Send RSVP
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default RSVP;
