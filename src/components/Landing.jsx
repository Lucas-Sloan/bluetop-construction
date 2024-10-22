import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <>
      <div className='Landing'>
        <div className="main-container">
          <div className="video-container">
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
              From inception, our mission has been to deliver unparalleled quality in every project, ensuring profitability for our clients through competitive pricing. 
              Our passion for shaping the earth drives us to employ the latest technologies and construction methods, guaranteeing that every job is executed with precision, on schedule, and to the highest standards of excellence. 
              We are committed to doing it right the first time, every time. 
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