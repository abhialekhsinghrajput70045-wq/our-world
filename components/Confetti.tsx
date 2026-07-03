'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  emoji: string;
}

export default function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const emojis = ['🎉', '🎊', '🎈', '💕', '✨', '🎁', '🎀', '💖', '🌟', '🎂'];
    const pieces = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 2 + Math.random() * 1,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }));
    setConfetti(pieces);
  }, []);

  return (
    <>
      {confetti.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed pointer-events-none text-3xl"
          style={{ left: `${piece.left}%`, top: '-30px' }}
          initial={{ opacity: 0, y: -30, rotate: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: window.innerHeight + 30,
            rotate: 360,
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        >
          {piece.emoji}
        </motion.div>
      ))}
    </>
  );
}