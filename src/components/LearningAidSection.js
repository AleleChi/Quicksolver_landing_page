// LearningAidSection.js

import React from "react";
import "./LearningAidSection.css";

const LearningAidSection = () => {
  return (
    <section className="learning-aid-section">
      <div className="grid-1">
        <div className="grid-content">
          <div className="yellow-line"></div>
          <h3>The only learning aid you <br /> need
          
            Solve complex  Science Calculations, <br /> and a greed button below the
            text. </h3>
          
          <button className="green-button-2">Try QuickSolver Now</button>
        </div>
      </div>
      <div className="grid-1" style={{ backgroundImage: `url('./mathematics.png')` }}>
        <div className="grid-content-h3">
          <h3>Further Mathematics</h3>
          <p>
            Volutpat arcu mattis lobortis elementum tellus curabitur facilisi
            blandit vitae auctor feugiat sit a imperdiet mauris dictumst.
          </p>
        </div>
      </div>
      <div className="grid-1" style={{ backgroundImage: `url('./statistics.png')` }}>
        <div className="grid-content-h3">
          <h3>Statistics</h3>
          <p>
            At vestibulum bibendum viverra tristique amet sed leo nulla id
            rhoncus phasellus in velit vulputate scelerisque fusce nisi amet.
          </p>
        </div>
      </div>
      <div className="grid-1" style={{ backgroundImage: `url('./chemistry-lady.png')` }}>
        <div className="grid-content-h3">
          <h3>Physics and Chemistry</h3>
          <p>
            Auctor ut tincidunt mi ipsum eu nibh. Volutpat magna eu blandit
            pellentesque molestie fringilla eget non scelerisque.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningAidSection;
