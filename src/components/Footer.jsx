import React from 'react';
import logo from '../assets/Logo.png';
import facebookIcon from '../assets/Facebook.png';
import instagramIcon from '../assets/Instagram.png';
import linkedinIcon from '../assets/Linkedin.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-info">
        <p>Contact us:</p>
        <p>Phone: (817) 366-8739</p>
        <p>Email: Arrmerchen@thebluetop.com</p>
        <div className="rights">
            <p>© 2024 Bluetop Construction. All Rights Reserved.</p>
        </div>
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <div className="social-icons">
        <img src={facebookIcon} alt="Facebook" className="icon" />
        <img src={instagramIcon} alt="Instagram" className="icon" />
        <img src={linkedinIcon} alt="LinkedIn" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
