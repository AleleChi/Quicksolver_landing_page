import React from "react";
import "./FeaturesSection.css"; // Import your CSS file for styling

const FeaturesSection = () => {
  // Function to handle scrolling to the hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="features-section">
      {/* Feature 1 */}
      <div className="feature">
        <img src="./icon-write.png" alt="Icon 1" />
        <p>Updated topics according  <br />to NERDC Curriculum</p>
      </div>
      {/* Feature 2 */}
      <div className="feature">
        <img src="./icon-building.png" alt="Icon 2" />
        <p>Supported and endorsed <br /> by 100+ Schools in Nigeria</p>
      </div>
      {/* Feature 3 */}
      <div className="feature">
        <img src="./icon-people.png" alt="Icon 3" />
        <p>Loved by 10,000+ <br /> Nigerian Students</p>
      </div>
      {/* Feature 4 */}
      <div className="feature">
        <img src="./icon-write.png" alt="Icon 4" />
        <p>Updated topics according <br /> to NERDC Curriculum</p>
      </div>
      {/* Feature 5 */}
      <div className="feature">
        <img src="./icon-building.png" alt="Icon 5" />
        <p>Supported and endorsed <br /> by 100+ Schools in Nigeria</p>
      </div>
      {/* Feature 6 */}
      <div className="feature">
        <img src="./icon-people.png" alt="Icon 6" />
        <p>Loved by 10,000+ <br /> Nigerian Students</p>
        
      </div>
      {/* Green button */}
      <div className="btn-green">
        <button className="green-button" onClick={scrollToHero}>Try Quick Solver Now</button>
      </div>
    </section>
  );
}

export default FeaturesSection;
