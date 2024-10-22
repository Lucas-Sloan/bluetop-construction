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
        <li><Link to="/quote">Get a Quote</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><a href="#team">Our Team</a></li>
        <li><Link to="/careers">Careers</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;