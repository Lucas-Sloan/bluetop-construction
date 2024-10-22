import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/Background.svg';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <div className='Landing'>
        <div className="main-container" style={{ backgroundImage: `url(${background})` }}>
          <div className="video-container">
            {/* Embed the Vimeo video with autoplay, loop, and no controls */}
            <iframe
              src="https://player.vimeo.com/video/1021797732?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&loop=1&controls=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%' }}
              title="Bluetop Construction Video"
            ></iframe>
          </div>
          <div className="text-container">
            <h2>Dallas - Fort Worth</h2>
            <h3>Excavation & Grading Contractor</h3>
            <ul>
              <li>Arenas, Site Development, Demolition</li>
              <li>Soil Stabilization, Land Clearing, Erosion Control</li>
              <li>Ponds, Road Construction and more</li>
            </ul>
            <Link to="/quote">
              <button>Get a Quote</button>
            </Link>
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
      </div>
    </>
  );
};

export default Landing;