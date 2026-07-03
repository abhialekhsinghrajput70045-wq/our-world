'use client';

import { motion } from 'framer-motion';

export default function BirthdayBanner() {
  const letters = "HAPPY BIRTHDAY".split("");
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: -20, rotate: -10 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-4 text-center overflow-hidden shadow-2xl">
      <motion.div
        className="flex justify-center gap-2 mb-2 flex-wrap"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
            variants={letterVariant}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="text-white text-lg font-semibold drop-shadow-lg"
      >
        July 4th 🎂✨ You make every day magical! 💕
      </motion.p>
    </div>
  );
}