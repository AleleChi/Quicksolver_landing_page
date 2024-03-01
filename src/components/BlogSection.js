import React from "react";
import "./BlogSection.css";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="orange-line"></div>
        <h4 className="heading-h">Read our free Tutorials <br /> delivered by Students</h4>
        
      </div>
      <div className="gr-btn"><button className="green-border-button">BROWSE ALL ARTICLES</button></div>
      <div className="blog-cards">
        <div className="blog-card">
          <img src="./computer.png" alt="Mathematics" />
          <button className="shadow-green-button">MATHEMATICS</button>
          <p>How to reduce 4x4 matrix using Eigen Vectors variable method.</p>
          <div className="learn-more">
            <p>LEARN MORE</p>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
        <div className="blog-card">
          <img src="./computer.png" alt="Chemistry" />
          <button className="shadow-green-button">CHEMISTRY</button>
          <p>Powerful trick to find the Mole Ratio of all Periodic table elements.</p>
          <div className="learn-more">
            <p>LEARN MORE</p>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
        <div className="blog-card">
          <img src="./man-with-laptop.png" alt="Physics" />
          <button className="shadow-green-button">PHYSICS</button>
          <p>How to estimate the Impact of Speed on Projectile Motions in Resonance.</p>
          <div className="learn-more">
            <p>LEARN MORE</p>
            <span className="arrow">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
