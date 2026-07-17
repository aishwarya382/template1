import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';

const RSVP = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("RSVP Data:", data);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="w-full py-24 px-6 flex flex-col items-center bg-champagne-gold/10">
      <motion.div 
        className="w-full max-w-md glass-panel p-8 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-champagne-gold to-transparent" />
        <div className="absolute -right-10 -bottom-10 opacity-10 w-40 h-40 bg-rose-gold rounded-full blur-3xl" />
        
        <h2 className="font-cinzel text-3xl text-center text-champagne-gold mb-8">Send a Message</h2>
        
        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center text-center py-10 h-[400px]"
            >
              <CheckCircle2 className="w-16 h-16 text-champagne-gold mb-4" />
              <h3 className="font-cinzel text-xl text-gray-800 mb-2">Thank You!</h3>
              <p className="font-montserrat text-gray-600">Your message has been received.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 h-[400px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.name ? 'border-red-400' : 'border-champagne-gold/30'} rounded focus:outline-none focus:border-champagne-gold font-montserrat transition-colors`}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="text-red-500 text-xs mt-1 block font-montserrat">{errors.name.message}</span>}
              </div>

              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className={`w-full px-4 py-3 bg-white/50 backdrop-blur-sm border ${errors.email ? 'border-red-400' : 'border-champagne-gold/30'} rounded focus:outline-none focus:border-champagne-gold font-montserrat transition-colors`}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs mt-1 block font-montserrat">{errors.email.message}</span>}
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-montserrat text-sm text-gray-700">Will you be attending?</span>
                <label className="flex items-center gap-2 font-montserrat text-sm text-gray-600 cursor-pointer">
                  <input type="radio" value="yes" {...register("attending")} defaultChecked className="accent-champagne-gold" />
                  Yes, I will be there
                </label>
                <label className="flex items-center gap-2 font-montserrat text-sm text-gray-600 cursor-pointer">
                  <input type="radio" value="no" {...register("attending")} className="accent-champagne-gold" />
                  Sorry, I can't make it
                </label>
              </div>

              <div>
                <textarea 
                  placeholder="Your Wish" 
                  rows="3"
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-champagne-gold/30 rounded focus:outline-none focus:border-champagne-gold font-montserrat transition-colors resize-none"
                  {...register("message")}
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="mt-auto w-full py-3 bg-champagne-gold text-white font-montserrat tracking-widest text-sm uppercase rounded shadow-lg flex items-center justify-center hover:bg-[#B76E79] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RSVP;
