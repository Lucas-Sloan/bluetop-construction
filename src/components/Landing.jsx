import React from 'react';
import fullLogo from '../assets/FullLogo.png';
import background from '../assets/Background.png';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <div className="main-container" style={{ backgroundImage: `url(${background})` }}>
        <img src={fullLogo} alt="Full Logo" className="full-logo" />
        <div className="text-container">
          <h2>Dallas - Fort Worth</h2>
          <h3>Excavation & Grading Contractor</h3>
          <ul>
            <li>Arenas, Site Development, Demolition</li>
            <li>Soil Stabilization, Land Clearing, Erosion Control</li>
            <li>Ponds, Road Construction and more</li>
          </ul>
          <button>Contact Us</button>
        </div>
      </div>

      <div className="content-container">
        <div className="mission-container">
          <h3>Our Mission</h3>
          <div className='mission-section'>
            <p>
                At Blue Top Construction, we’re passionate about mastering the art of dirt. 
                Since day one, our mission has been to deliver exceptional excavation and grading services throughout the DFW area. 
                With a deep commitment to integrity, ingenuity, and sustainability, our team is prepared to handle projects of any size and complexity. 
                Whether you're planning a large-scale commercial development or need expert grading solutions, you can count on us to bring precision and reliability to every job. 
                At Blue Top, we believe in doing things the right way, every time, with an unwavering drive to exceed expectations and build for the future.
            </p>
          </div>
        </div>

        <div className="about-container">
          <h3>About Us</h3>
          <div className="about-section">
            <p>
                We bring together over 20 years of combined expertise, professionalism, and a passion for excellence.
                Our experienced team understands the nuances of excavation and grading, ensuring every project is
                completed with precision, on time, and within budget.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;