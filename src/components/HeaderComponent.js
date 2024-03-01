import React from "react";
import "./HeaderComponent.css";

const logoSrc = "./logo.svg"; // Path to your logo image

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoSrc} alt="Logo" />
      </div>
      <nav className="navigation">
        <ul className="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faqs">FAQs</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>
      <button className="download-btn">Download</button>
    </header>
  );
}

export default HeaderComponent;
