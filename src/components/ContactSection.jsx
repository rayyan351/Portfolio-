import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-background-blobs">
      <span></span>
      <span></span>
      <span></span>
      </div>
      <div className="contact-content">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Connect With Us
        </motion.h2>
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
