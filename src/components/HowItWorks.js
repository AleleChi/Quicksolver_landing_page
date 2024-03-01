// HowItWorks.js

import React from "react";
import "./HowItWorks.css"; // Import your CSS file for styling

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="line2"></div>
      <h2 className="work">
        How The QuickSolver  App <span className="green">Works</span>
      </h2>
      <div className="background-images">
        <img className="app-image-1" src="./howitworks1.png" alt="How it works" />
        <img className="app-image-2" src="./howitworks2.png" alt="How it works 2" />
      </div>
      <div className="content-2">
        <div className="steps">
          <div className="step">
            <span className="step-number">Step 1:</span>
            <p>
              Download the App from PlayStore and presign in, <br /> or sign up if you don't have an account
              yet, <br /> to access  all pro features with our free trial version.
            </p>
          </div>
          <div className="step">
            <span className="step-number">Step 2:</span>
            <p>
              From the Home Screen, select your preferred <br /> Calculator, or simply select the Calculator
              tab, you <br /> can also use the calculator icon at the top right side.
            </p>
          </div>
          <div className="step">
            <span className="step-number">Step 3:</span>
            <p>
              Enter your variables, snap your question, or enter <br /> your results, depending on the
              feature you <br /> selected  in step 2, and let QuickSolver do the magic
              for you!
            </p>
          </div>
        </div>
        <button className="orange-button">Download the App</button>
      </div>
    </section>
  );
};

export default HowItWorks;
