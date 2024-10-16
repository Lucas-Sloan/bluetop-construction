import React from 'react';
import halfLogo from '../assets/HalfLogo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={halfLogo} alt="Half Logo" />
      <ul className="nav-links">
        <li><a href="#quote">Get a Quote</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#careers">Careers</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
