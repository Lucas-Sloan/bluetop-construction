import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import halfLogo from '../assets/HalfLogo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" onClick={closeMenu}>
        <img src={halfLogo} alt="Half Logo" />
      </Link>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/quote" onClick={closeMenu}>Get a Quote</Link></li>
        <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
        <li><Link to="/careers" onClick={closeMenu}>Careers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;