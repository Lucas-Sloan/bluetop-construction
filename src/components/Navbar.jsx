import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import halfLogo from '../assets/HalfLogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={halfLogo} alt="Half Logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#quote">Get a Quote</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#careers">Careers</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;