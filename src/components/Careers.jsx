import React from 'react';
import './Careers.css'; // Ensure your careers CSS file is linked

const Careers = () => {
  return (
    <div className="careers-section">
      <div className="careers-container">
        <div className="careers-header">
          <h1>Need a Job?</h1>
          <h3>We’re excited to have you join our team</h3>
        </div>
        <div className="careers-body">
          <p>We are always looking for the right people to join our growing team. Head to LinkedIn to fill out our online application, and we’ll be in touch soon.</p>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="careers-link">https://www.linkedin.com/feed/</a>
          <h3>Bluetop Construction</h3>
          <p>Armerchen@thebluetop.com</p>
          <p>(817) 366-8739</p>
        </div>
      </div>
    </div>
  );
};

export default Careers;