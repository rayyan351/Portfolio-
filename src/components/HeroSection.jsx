import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import './HeroSection.css';

const TEXTS = ['Unleash the Beast', 'Command the Road', 'Built to Dominate'];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const target = document.getElementById('models');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <video autoPlay muted loop className="background-video">
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="overlay"></div>
      <div className="particles-overlay"></div>

      <Parallax speed={-10}>
        <div className="hero-content">
          <AnimatePresence mode="wait">
            <motion.h1
              key={TEXTS[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="hero-heading"
            >
              {TEXTS[index]}
            </motion.h1>
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience the future of driving today.
          </motion.p>
        </div>
      </Parallax>

      <motion.div
        className="scroll-down-arrow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={handleScroll}
      >
        ↓
      </motion.div>
    </section>
  );
};

export default HeroSection;
