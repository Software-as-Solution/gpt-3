import "./Possibility.css";
import possibility from "../../assets/possibility.png";
import React from "react";

const Possibility = () => {
  return (
    <div className="gpt3-possibility section-padding" id="possibility">
      <div className="gpt3-possibility-img">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3-possibility-content">
        <h4>Request early Acces go Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyour your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
