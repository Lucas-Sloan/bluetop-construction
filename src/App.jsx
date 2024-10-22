import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Careers from './components/Careers';
import Services from './components/Services';
import './App.css'; // Ensure you have this imported for the .app-container styles

const App = () => {
  return (
    <div className="app-container"> {/* Add the app-container here */}
      <Router>
        <Navbar />
        <div className="main-content"> {/* This div allows the content to grow and push the footer down */}
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
