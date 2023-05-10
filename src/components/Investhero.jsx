import React from "react";
import "./investhero.css";
import investbanner from "../assets/Investbanner.png";

const Investhero = () => {
  return (
    <>
      <div className="investor-parent-container">
        <div className="investor-left-content">
          <div className="invest-lefttop-content">
            <span className="value"><h5>Value | Impact | Scale </h5></span>

            <h1 className="invest-primary-heading"><b>Creating the next generation of changemakers</b></h1>

            <p className="invest-primary-text">
              Get Access to Pitch in front of global investors to launch/ scale
              up your start-up initiatives with investment caps ranging from
              10,000 USD- 1.2 M USD.
            </p>
            <p className="invest-primary-text">XXX Investors | XXX VC</p>
          </div>
          <div className="invest-btn-container">
            <button className="ibtn">Apply Now</button>
          </div>
        </div>
        <div className="invest-right-content">
          <img src={investbanner} alt="" />
        </div>
      </div>
    </>
  );
};

export default Investhero;
