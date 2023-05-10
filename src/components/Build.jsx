import React from "react";
import "./build.css";
import Knitting from "../assets/Knitting.png";

const Build = () => {
  return (
    <>
      <div className="build-parent-container">
        <div className="build-left-content">
          <b><h1>Build Connections that help you grow your business</h1></b>
          <p>
            Co - Create Labs is a one of a kind ecosystem of global leaders and
            founders that{" "}
            <wrap>connect businesses, people, expertise and funds.</wrap> 
            <p>All
            this is within your reach today.</p>
          </p>
          <div className="build-left-btn-container">
            <button>Explore Connects</button>
            <button>Learn More</button>
          </div>
        </div>
        <div className="build-right-content">
          <img src={Knitting} alt="" />
        </div>
      </div>
    </>
  );
};

export default Build;
