import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import HeroComponent from "./components/HeroComponent";
import FeaturesSection from "./components/FeaturesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";
import LearningAidSection from "./components/LearningAidSection";
import SnapAndSolveSection from "./components/SnapAndSolveSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="main-content">
      <HeaderComponent />
      <HeroComponent />
      <FeaturesSection />
      <WhyChooseUs />
      <HowItWorks />
      <LearningAidSection />
      <SnapAndSolveSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
