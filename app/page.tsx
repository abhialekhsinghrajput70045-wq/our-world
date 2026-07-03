'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Globe from '@/components/Globe';
import Timeline from '@/components/Timeline';
import MemoryCard from '@/components/MemoryCard';
import Ending from '@/components/Ending';
import { Memory, memories } from '@/data/memories';

export default function Home() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);

  return (
    <main className="w-full bg-primary">
      {/* Hero Section with Globe */}
      <section className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 right-0 z-10 pt-8 text-center"
        >
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-light drop-shadow-lg"
          >
            Our World
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-light text-opacity-75 mt-2"
          >
            A journey through time and places we hold dear
          </motion.p>
        </motion.div>

        <Globe />
      </section>

      {/* Timeline Section */}
      <section>
        <Timeline onMemorySelect={setSelectedMemory} />
      </section>

      {/* Ending Section */}
      <section>
        <Ending />
      </section>

      {/* Memory Card Modal */}
      <MemoryCard
        memory={selectedMemory || memories[0]}
        isOpen={selectedMemory !== null}
        onClose={() => setSelectedMemory(null)}
      />

      {/* Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-highlight text-2xl">↓</div>
      </motion.div>
    </main>
  );
}
