import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="logo">
        {/* <img src="./src/assets/logo.png" alt="" srcset="" /> */}
           TASKQUEST
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {/* Use anchor tags for sections on the same page */}
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#testimonials" onClick={closeMenu}>
          Testimonials
        </a>
        {/* Link to another page for "Register" */}
        <Link to="/register" onClick={closeMenu}>
          Register
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
    </div>
  );
};

export default MyNavbar;
