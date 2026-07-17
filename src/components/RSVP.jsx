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
    <section className="py-24 bg-transparent text-charcoal">
      <div className="container-luxury">
        <h2 className="section-title text-gold">Will You Celebrate With Us?</h2>
        <p className="text-center font-montserrat text-lg text-ivory/90 max-w-2xl mx-auto mb-12">
          Your presence would mean the world to us. Kindly let us know if you will be joining our special day.
        </p>
        <motion.div 
          className="glass-card-red max-w-2xl mx-auto p-10 md:p-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block font-playfair text-gold-light mb-2">Name</label>
              <input 
                {...register("name", { required: true })} 
                className="w-full bg-maroon/50 border border-gold/30 rounded-xl px-4 py-3 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block font-playfair text-gold-light mb-2">Email</label>
              <input 
                type="email"
                {...register("email", { required: true })} 
                className="w-full bg-maroon/50 border border-gold/30 rounded-xl px-4 py-3 text-ivory placeholder-ivory/40 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block font-playfair text-gold-light mb-2">Will you attend?</label>
              <select 
                {...register("attending")} 
                className="w-full bg-maroon/50 border border-gold/30 rounded-xl px-4 py-3 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
              >
                <option value="yes" className="bg-bg-red text-ivory">Yes, I will be there</option>
                <option value="no" className="bg-bg-red text-ivory">Sorry, I cannot attend</option>
              </select>
            </div>
            <button 
              type="submit"
              className="w-full btn-luxury font-playfair text-xl py-4 mt-6 text-center"
            >
              Confirm Attendance
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
export default RSVP;
