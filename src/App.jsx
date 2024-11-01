import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Careers from './components/Careers';
import Services from './components/Services';
import Values from './components/Values';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<Values />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
