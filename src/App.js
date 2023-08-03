
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import the Routes element
import './components/Navbar/Navbar.css';
import './components/Contact/ContactUs.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutUs from './components/About/AboutUs';
import AllJobs from './components/AllJobs/AllJobs';
import ContactUs from './components/Contact/ContactUs';
import BookDemo from './components/BookDemo';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/AllJobs" element={<AllJobs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/bookdemo" element={<BookDemo />} />
        
      </Routes>
    </>
  );
};

export default App;
