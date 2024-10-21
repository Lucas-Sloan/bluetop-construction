import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import './App.css';  // Assuming you're using a global CSS file

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Landing />
      </div>
      <Footer />
    </div>
  );
};

export default App;
