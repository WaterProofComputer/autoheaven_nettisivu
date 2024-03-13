
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from '../../Componenets/navbar/navbar';
import Landing from '../../Componenets/landing/landing';
import About from '../../Componenets/About/About';
import Autopesut from '../../Componenets/Autopesut/Autopesut';
import Tuotteet from '../../Componenets/Tuotteet_osio/Tuotteet';
import Contacts from '../../Componenets/Contacts/Contacts';
import Footer from '../../Componenets/Footer/Footer';

const Home = () => {
  const location = useLocation();
  
  // Function to scroll to the specified section based on query parameter
  const scrollToSection = () => {
    const params = new URLSearchParams(location.search);
    const sectionToScroll = params.get("scrollTo");
    if (sectionToScroll) {
      const sectionElement = document.getElementById(sectionToScroll);
      if (sectionElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight;
        window.scrollTo({
          top: sectionElement.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    }
  };

  // Scroll to the specified section when the component mounts or when the location changes
  useEffect(() => {
    scrollToSection();
  }, [location]);

  return (
    <>
      <Navbar />
      <Landing id="landing-section" />
      <About id="about-section" />
      <Autopesut id="autopesut-section" />
      <Tuotteet id="tuotteet-section" />
      <Contacts id="contacts-section" />
      <Footer />
    </>
  );
}

export default Home;