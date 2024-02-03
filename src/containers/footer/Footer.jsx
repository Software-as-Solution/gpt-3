import "./Footer.css";
import gpt3Logo from "../../assets/logo.svg";
import React from "react";

const Footer = () => {
  return (
    <div className="gpt3-footer section-padding">
      <div className="gpt3-footer-heading">
        <h1 className="gradient-text">
          Do you want to step in to the future before other
        </h1>
      </div>
      <div className="gpt3-footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3-footer-links">
        <div className="gpt3-footer-links-logo">
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 Dk, All Rights Reserved</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 Dk</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3-footer-copyright">
        <p>&copy; 2021 GPT-3. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
