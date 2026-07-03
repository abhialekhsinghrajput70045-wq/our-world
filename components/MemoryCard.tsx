'use client';

import { motion } from 'framer-motion';
import { Memory } from '@/data/memories';

interface MemoryCardProps {
  memory: Memory;
  isOpen: boolean;
  onClose: () => void;
}

export default function MemoryCard({ memory, isOpen, onClose }: MemoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0.8 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 bg-gradient-to-br from-secondary to-accent rounded-lg shadow-2xl overflow-hidden"
        style={{ x: '-50%', y: '-50%' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with emoji and colors */}
        <div className={`bg-gradient-to-r ${memory.color} p-6`}>
          <div className="text-6xl mb-4">{memory.image}</div>
          <h2 className="text-3xl font-bold text-white">{memory.title}</h2>
          <p className="text-light text-sm mt-2">{memory.location}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-highlight text-xs font-semibold uppercase">{memory.date}</p>
            <p className="text-light mt-2">{memory.description}</p>
          </div>

          <div className="border-t border-accent pt-4">
            <p className="text-light text-sm leading-relaxed italic">
              "{memory.story}"
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={onClose}
              className="w-full bg-highlight hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
