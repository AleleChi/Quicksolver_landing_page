import React, { useState } from "react";
import "./HeaderComponent.css";
import { useMediaQuery } from 'react-responsive';

const logoSrc = "./logo.svg"; // Path to your logo image

const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 }); // Define mobile screen size
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 }); // Define tablet screen size
 

  // Function to toggle menu based on screen size and menu state
  const toggleMenu = () => {
    if (isMobile || isTablet) {
      setShowMenu(!showMenu);
    }
  };

  // Function to handle scrolling to the hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="left-section">
        {(isMobile || isTablet) && ( // Display hamburger menu on mobile and tablet screens
          <div className="menu-icon" onClick={toggleMenu}>
            {/* Hamburger menu icon */}
            <img src="./Vector-handburger.png" alt="Menu" />
          </div>
        )}
        <div className="logo">
          {/* Logo image */}
          <img src={logoSrc} alt="Logo" />
        </div>
      </div>
      <nav className={`navigation ${showMenu ? "show-menu" : ""}`}>
        {/* Navigation list */}
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
      <button className="download-btn" onClick={scrollToHero}>Download</button>
    </header>
  );
};

export default HeaderComponent;
