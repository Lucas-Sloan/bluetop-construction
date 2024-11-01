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
                At Bluetop Construction, we are dedicated to delivering excellence through innovation and integrity. 
                Together, our team brings over 20 years of experience in the construction industry, managing a diverse portfolio that spans from single-family homes to expansive interstate highways. 
                This experience has taught us that there's a spectrum of solutions to meet the unique demands of each project. 
                We prioritize cost-effectiveness without compromising on quality, tailoring our approach to align with any budget. 
                Our commitment extends beyond building; it's about crafting sustainable futures, nurturing our trade's legacy, and forging lasting client relationships. 
                Whether it's a residential, commercial, or civil earth moving project, we are your partners in construction, committed to your vision and the integrity of every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;