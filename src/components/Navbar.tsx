import React, { useState, useEffect } from 'react';

import './components.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="/TRINETRA METALS AND RECYCLING.png" alt="Trinetra Metals Logo" style={{ height: '50px', width: 'auto' }} />
          <span className="logo-text">TRINETRA <span className="text-accent-gradient">METALS</span> AND RECYCLING</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact" className="btn btn-primary nav-btn">Get a Quote</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
