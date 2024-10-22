import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-section">
        <div className="services-content">
            <div className="services-container">
                <h2 className="services-title">Services</h2>
                <h1>Civil, Commercial, and Residential</h1>
                <ul>
                    <li>Excavation</li>
                    <li>Grading</li>
                    <li>Demolition</li>
                    <li>Soil Stabilization</li>
                    <li>Arenas</li>
                    <li>Ponds</li>
                    <li>Retaining Walls</li>
                    <li>Trucking</li>
                </ul>
            </div>
            <div className="video-content">
                {/* Embed Vimeo video */}
                <iframe 
                src="https://player.vimeo.com/video/1021797857?title=0&byline=0&portrait=0&badge=0&autopause=0&autoplay=1&loop=1&controls=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Bluetop Construction Video"
                className="services-video"
                ></iframe>
            </div>
        </div>
    </div>
  );
};

export default Services;

