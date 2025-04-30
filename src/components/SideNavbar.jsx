import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './SideNavbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      setActiveSection(current);

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
      {'BEAST'.split('').map((char, i) => (
      <span key={i} className="logo-letter" style={{ animationDelay: `${i * 0.15}s` }}>
       {char}
      </span>
      ))}
      </div>


      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={() => setMenuOpen(false)}
            className={activeSection === 'hero' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="models" smooth={true} duration={500} onClick={() => setMenuOpen(false)}
            className={activeSection === 'models' ? 'active' : ''}>
            Models
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}
            className={activeSection === 'about' ? 'active' : ''}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}
            className={activeSection === 'contact' ? 'active' : ''}>
            Contact
          </Link>
        </li>
      </ul>

      <div className={`burger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
