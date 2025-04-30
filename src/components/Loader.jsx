import React, { useEffect} from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      finishLoading();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="logo-container">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="loader-logo"
        >
          VROOM
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Loader;
