import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import useParallaxTilt from '../hooks/useParallaxTilt'; 

const AboutSection = () => {
  const tilt = useParallaxTilt(10);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-image"
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/assets/sportscar.jpg" alt="Performance Car" />
        </motion.div>
        <div className="about-content">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Born to Redefine Speed
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Every curve, every roar, every drive — crafted with precision and built to conquer.
            Our cars are not just machines; they are living, breathing art on wheels.
            Welcome to the future of performance.
          </motion.p>

          <motion.button
            className="learn-more-btn"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
