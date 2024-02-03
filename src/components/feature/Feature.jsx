import "./feature.css";
import React from "react";

const Feature = ({ title, text }) => (
  <div className="gpt3-features-container-feature">
    <div className="gpt3-features-container-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3-features-container-feature-text">
      <p className="gpt3-text">{text}</p>
    </div>
  </div>
);

export default Feature;
