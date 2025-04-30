import React from 'react';
import { motion } from 'framer-motion';
import './ModelsSection.css';
import TiltedCard from './TiltedCard';

const carModels = [
  {
    title: 'Vortex GT',
    image: '/assets/vortex.jpg',
    description: 'A supercar built for pure speed and performance.',
    specs: ['900HP', '2.6s 0–100', 'AWD']
  },
  {
    title: 'Nebula X',
    image: '/assets/nebula.webp',
    description: 'Luxury meets futuristic design in our latest model.',
    specs: ['850HP', 'Electric', 'RWD']
  },
  {
    title: 'Phantom V',
    image: '/assets/phantomv.jpg',
    description: 'An electric beast redefining the future of mobility.',
    specs: ['1000HP', 'Electric', 'AWD']
  }
];

const ModelsSection = () => {
  return (
    <section id="models" className="models-section">
      <div className="models-header">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          Our Models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          viewport={{ once: false }}
        >
          Crafted for those who dare to dream.
        </motion.p>
      </div>

      <div className="models-grid">
        {carModels.map((model, index) => (
          <TiltedCard key={index} model={model} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ModelsSection;
