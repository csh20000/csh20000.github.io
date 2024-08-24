import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDark(darkMode);
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={isDark ? 'dark bg-gray-800' : 'bg-white dark:bg-gray-800'}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
