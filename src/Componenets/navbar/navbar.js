import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './navbar.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const ScrolledDiv = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className={`scrolled-div ${scrolled ? 'scrolled' : ''} ${className}`}>
      {children}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar');

      // Check if the menu is open before processing the click event
      if (isMobileMenuOpen && navbar) {
        // Exclude the menu button from closing the menu
        if (
          !navbar.contains(event.target) &&
          event.target.className !== 'menuIcon' &&
          !navbar.querySelector('.linkMenu.open .links').contains(event.target)
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Set up the event listener only if the menu is open
    if (isMobileMenuOpen) {
      document.body.addEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts or when the menu is closed
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <ScrolledDiv className="navbar">
      <div className="loko">
        <img src={Logo} alt="Logo" className="Logo" />
        <h1 className="lokoText">AutoHeaven</h1>
      </div>
      <div ref={mobileMenuRef} className={`linkMenu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="menuIcon" onClick={handleMobileMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="links">
        <ScrollLink to="landing-section" smooth={true} duration={800} offset={-80} className="linkMenuItem">Etusivu</ScrollLink>
        <ScrollLink to="about-section" smooth={true} duration={800} offset={-80} className="linkMenuItem">Tieto</ScrollLink>
        <ScrollLink to="autopesut-section" smooth={true} duration={800} offset={-80} className="linkMenuItem">Autopesut</ScrollLink>
        <ScrollLink to="tuotteet-section" smooth={true} duration={800} offset={-80} className="linkMenuItem">Tuotteet</ScrollLink>
        <ScrollLink to="contacts-section" smooth={true} duration={800} offset={-80} className="linkMenuItem">Ota yhteyttä</ScrollLink>
        </div>
      </div>
    </ScrolledDiv>
  );
};

export default Navbar;
