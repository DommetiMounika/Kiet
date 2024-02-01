import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './navbar1.css';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar ${isOpen ? 'open' : ''}`}>
      <RouterLink to="/intro">
        <span className="polytechnic-text">POLYTECHNIC</span>
      </RouterLink>
      <div className="nav-links">
        <ScrollLink activeClass="active" to="About" spy={true} smooth={true}>
          About
        </ScrollLink>
        <ScrollLink to="Branches" spy={true} smooth={true}>
          Branches
        </ScrollLink>
        <ScrollLink to="Testimonials" spy={true} smooth={true}>
          Testimonials
        </ScrollLink>
        <ScrollLink to="Gallery" spy={true} smooth={true}>
          Gallery
        </ScrollLink>
        <ScrollLink to="feedback" spy={true} smooth={true}>
          Feedback
        </ScrollLink>
      </div>
      <div className="menu-icon" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Nav;

