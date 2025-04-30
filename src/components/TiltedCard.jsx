import React from 'react';
import { motion } from 'framer-motion';
import useParallaxTilt from '../hooks/useParallaxTilt';

const TiltedCard = ({ model, index }) => {
  const tilt = useParallaxTilt(12);

  return (
    <motion.div
      className="model-card"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
      viewport={{ once: false }}
    >
      <motion.img
        src={model.image}
        alt={model.title}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
        viewport={{ once: false }}
      />

      <div className="model-specs">
        {model.specs.map((spec, i) => (
          <motion.span
            key={i}
            className="spec-badge"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            viewport={{ once: false }}
          >
            {spec}
          </motion.span>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
        viewport={{ once: false }}
      >
        {model.title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
        viewport={{ once: false }}
      >
        {model.description}
      </motion.p>
    </motion.div>
  );
};

export default TiltedCard;
