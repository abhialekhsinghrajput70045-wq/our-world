'use client';

import { motion } from 'framer-motion';
import { Memory, memories } from '@/data/memories';

interface TimelineProps {
  onMemorySelect: (memory: Memory) => void;
}

export default function Timeline({ onMemorySelect }: TimelineProps) {
  return (
    <div className="w-full bg-primary border-t border-accent py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-light mb-12 text-center">Our Journey</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-highlight to-accent" />

          {/* Timeline items */}
          <div className="space-y-8">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    onClick={() => onMemorySelect(memory)}
                    className="bg-gradient-to-r from-secondary to-accent p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-2">{memory.image}</div>
                    <h3 className="text-xl font-bold text-light">{memory.title}</h3>
                    <p className="text-sm text-accent mt-1">{memory.location}</p>
                    <p className="text-xs text-highlight mt-2">{memory.date}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className="w-0 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-4 h-4 bg-highlight rounded-full border-4 border-primary cursor-pointer"
                  />
                </div>

                {/* Spacer */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
