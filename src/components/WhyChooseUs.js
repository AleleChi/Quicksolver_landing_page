import React from "react";
import "./WhyChooseUs.css"; // Import your CSS file for styling

const WhyChooseUs = () => {
  // Function to handle scrolling to the hero section
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero-section");
    heroSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="why-choose-us">
      <div className="line"></div>
      <h2>
        Why you Should <br /> Choose <span className="green">QuickSolver</span>
      </h2>
      <div className="content">
        <div className="images">
          <img className="icon-1" src="./whychooseus1.png" alt="Image 1" />
          <img className="icon-2" src="./whychooseus2.png" alt="Image 2" />
        </div>
        <div className="info">
          <div className="item">
            <img src="./icon-write.png" alt="Icon 1" />
            <p>Updated topics according to NERDC Curriculum</p>
          </div>
          <div className="item">
            <img src="./icon-building.png" alt="Icon 2" />
            <p>Supported and endorsed by 100+ Schools in Nigeria</p>
          </div>
          <div className="item">
            <img src="./icon-people.png" alt="Icon 3" />
            <p>Loved by 10,000+ Nigerian Science Students</p>
          </div>
          <button className="green-button2" onClick={scrollToHero}>Download App</button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
