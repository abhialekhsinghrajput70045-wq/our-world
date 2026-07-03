'use client';

import { motion } from 'framer-motion';
import { Memory } from '@/data/memories';

interface MarkerProps {
  memory: Memory;
  onClick: () => void;
  isSelected: boolean;
}

export default function Marker({ memory, onClick, isSelected }: MarkerProps) {
  return (
    <motion.div
      className="absolute cursor-pointer"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      animate={{
        scale: isSelected ? 1.3 : 1,
      }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-highlight rounded-full"
          animate={{
            boxShadow: isSelected
              ? '0 0 20px rgba(233, 69, 96, 0.8)'
              : '0 0 5px rgba(233, 69, 96, 0.5)',
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center text-white text-xs font-bold">
          {memory.id}
        </div>
      </div>
    </motion.div>
  );
}
