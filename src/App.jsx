import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Quote from './components/Quote';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Landing page */}
        <Route path="/quote" element={<Quote />} /> {/* Get a Quote page */}
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;