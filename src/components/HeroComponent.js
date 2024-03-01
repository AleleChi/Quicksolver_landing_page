import React from "react";
import "./HeroComponent.css";

const HeroComponent = () => {
  return (
    <section className="hero" style={{ backgroundColor: "#064A0C" }}>
      <div className="hero-content">
        <h1>The all-in-one solution to all your science problems</h1>
        <p>
          Solve all Maths, Chemistry, Physics, and Statistics Problems in one
          single Calculator
        </p>
        <div className="buttons">
          <button className="google-btn">
            <a href="">
              <img src="./frame-google-download.png" alt="Google Icon" />
            </a>
          </button>
          <button className="apple-btn">
            <a href="">
              <img src="./apple-store.png" alt="Apple Icon" />
            </a>
          </button>
        </div>
        <div className="images">
          <img
            className="left-image"
            src="./left-image-app.png"
            alt="App left image"
          />
          <img
            className="middle-image"
            src="./middle-image-app.png"
            alt="App hero midlle image"
          />
          <img
            className="right-image"
            src="./right-image-app.png"
            alt="App hero right image"
          />
        </div>
        <div className="green-line"></div>
      </div>
    </section>
  );
};

export default HeroComponent;
