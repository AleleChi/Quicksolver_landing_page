import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-column">
        <div className="footer-row">
          <img src="./Logo-footer.png" alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-row">
          <button className="google-download-button">
            <img
              src="./download-google-footer.png"
              alt="Google Download"
              className="download-image"
            />
          </button>
        </div>
        <div className="footer-row">
          <button className="apple-download-button">
            <img
              src="./download-apple-footer.png"
              alt="Apple Download"
              className="download-image"
            />
          </button>
        </div>
      </div>
      <div className="footer-column">
        <h4>Contact Address</h4>
        <p>91 Ikot Ekpene, Road, Abak Akwa</p>
        <p>Ibom State</p>
        <p>
          Email:{" "}
          <a href="mailto:help@quicksolverapp.com">help@quicksolverapp.com</a>
        </p>
        <p>
          Phone: <a href="tel:+2348165336903">+234 816 533 6903</a>
        </p>
      </div>
      <div className="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Social Media</h4>
        <div className="social-media-icons">
          <a href="https://twitter.com">
            <img src="./Twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.facebook.com">
            <img src="./Facebook.png" alt="Facebook" />
          </a>

          <a href="https://www.instagram.com">
            <img src="./Instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="./Instagram.png" alt="LinkedIn" />
          </a>
        </div>
        <div className="footer-row-1">
          <a href="/terms-of-use">Terms of Use</a>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
