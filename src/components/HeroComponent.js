import React, { useState, useEffect } from "react";

import "./HeroComponent.css";


const HeroComponent = () => {
  // State to hold the current index of the text
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of texts to cycle through
  const texts = [
    "science problems",
    "math problems",
    "chemistry problems",
    "physics problems",
    "statistics problems",
  ];

  // Effect to change the text every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    // Cleanup function
    // eslint-disable-next-line
    return () => clearInterval(interval);
  }, [texts.length]); // Run only once on component mount

  // Function to handle scrolling to the hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section" className="hero" style={{ backgroundColor: "#064A0C" }}>
      <div className="hero-content">
        <h1>
          The all-in-one solution to all your{" "}
          <span className="science">{texts[currentIndex]}</span>{" "}
        </h1>
        <p>
          Solve all Maths, Chemistry, Physics, and Statistics Problems in one
          single Calculator
        </p>
        <div className="buttons">
          <button className="google-btn" onClick={scrollToHero}>
            <a href="https://play.google.com/store/apps/details?id=com.myapp.quick_solver2">
              <img src="./frame-google-download.png" alt="Google Icon" />
            </a>
          </button>
          <button className="apple-btn" onClick={scrollToHero}>
            <a href="https://apps.apple.com/app/quick-solver/id6474582912">
              <img src="./apple-store.png" alt="Apple Icon" />
            </a>
          </button>
        </div>
        <div className="images">
          <img
            className="left-image"
            src="./left-image-app.png"
            alt="App left "
          />
          <img
            className="middle-image"
            src="./middle-image-app.png"
            alt="App hero midlle "
          />
          <img
            className="right-image"
            src="./right-image-app.png"
            alt="App hero right "
          />
        </div>
        <div className="green-line"></div>
      </div>
    </section>
  );
};

export default HeroComponent;
