'use client';

import { motion } from 'framer-motion';

export default function Ending() {
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
    <div className="w-full bg-gradient-to-b from-accent to-primary py-20 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-4 space-y-8"
        variants={container}
        initial="hidden"
        whileInView="show"
      >
        <motion.div variants={item}>
          <h2 className="text-5xl font-bold text-light mb-4">Our World</h2>
          <p className="text-xl text-light opacity-90">
            A collection of moments that define us
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg text-light leading-relaxed opacity-75 max-w-2xl mx-auto"
        >
          Every destination, every memory, every moment shared has shaped who we are. 
          From the bustling streets of Tokyo to the serene mountains of Switzerland, 
          our world is painted with love, adventure, and unforgettable experiences.
        </motion.p>

        <motion.div variants={item} className="pt-8">
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="text-3xl">🌍</span>
            <span className="text-3xl">❤️</span>
            <span className="text-3xl">✨</span>
            <span className="text-3xl">🚀</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="pt-8">
          <p className="text-sm text-highlight font-semibold uppercase tracking-wider">
            More adventures await us
          </p>
          <p className="text-light text-opacity-50 mt-4">
            © 2024 Our World. A journey of love and discovery.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
