import React from "react";
import "./SnapAndSolveSection.css";

const SnapAndSolveSection = () => {
  return (
    <section className="snap-and-solve-section">
      <div className="content-snap">
        <h2 className="snap-h2">Snap and Solve <br /> Questions directly from your Notebook or Textbooks in one Tap</h2>
        <button className="orange-button-4">Snap and Solve Now</button>
      </div>
      <div className="background-images-snap">
        <img className="left-image-app" src="./left-hand-app-image.png" alt="Left Image" />
        <img className="center-image-app" src="./middle-app-image.png" alt="Center Image" />
        <img className="right-image-app" src="./right-app-image.png" alt="Right Image" />
      </div>
    </section>
  );
};

export default SnapAndSolveSection;
