'use client';

import { motion } from 'framer-motion';

export default function BirthdayMessage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full bg-gradient-to-b from-pink-900 to-red-900 py-20 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-4 space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.div variants={item}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Happy Birthday! 🎉
          </h2>
          <p className="text-2xl text-pink-200 font-semibold">July 4th, 2024</p>
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <p className="text-xl text-light leading-relaxed">
            To the most amazing person in my life,
          </p>
          <p className="text-lg text-light opacity-90 leading-relaxed italic">
            "Every moment with you feels like a memory worth cherishing forever. 
            From the first time we met to every adventure we've shared, you've filled my world with 
            colors I never knew existed. Your smile lights up my darkest days, your laugh is my favorite 
            song, and your presence is my greatest gift."
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="pt-8 space-y-4"
        >
          <p className="text-lg text-pink-200">
            Today, we celebrate YOU! 💕✨
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <span className="text-4xl animate-heartbeat">💖</span>
            <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.1s' }}>🌹</span>
            <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.3s' }}>🎂</span>
            <span className="text-4xl animate-heartbeat" style={{ animationDelay: '0.4s' }}>🎊</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="pt-8 border-t border-pink-400">
          <p className="text-pink-200 text-lg font-semibold mb-3">
            My wishes for you on this special day:
          </p>
          <ul className="space-y-2 text-light text-sm md:text-base">
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-xl">💝</span> May every dream of yours come true
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-xl">🌟</span> May you shine brighter than ever
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-xl">🚀</span> May this year bring endless adventures
            </motion.li>
            <motion.li 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-2"
            >
              <span className="text-xl">💫</span> May we create more beautiful memories together
            </motion.li>
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="pt-8"
        >
          <p className="text-pink-100 text-base md:text-lg">
            Forever yours, with all my love 💕
          </p>
          <p className="text-pink-200 text-sm mt-2">
            — Your loving boyfriend ❤️
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}