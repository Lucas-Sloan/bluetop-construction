import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Quote from './components/Quote';
import Footer from './components/Footer';
import Careers from './components/Careers';
import Services from './components/Services';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;