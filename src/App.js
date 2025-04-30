import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/SideNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ModelsSection from './components/ModelsSection';
import ContactSection from './components/ContactSection';
import Loader from './components/Loader';
import ScrollButton from './components/ScrollButton';  
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="app-container"
        >
          <CustomCursor/>
          <Navbar />
          <HeroSection />
          <ModelsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
          <ScrollButton />
        </motion.div>
      )}
    </>
  );
}

export default App;
