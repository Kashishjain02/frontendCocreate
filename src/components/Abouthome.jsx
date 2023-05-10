import React from "react";
import "./abouthome.css";
import Aboutbanner from "../assets/Aboutbanner.png";
import People from "../assets/People.png";
import Fist from "../assets/Fist.png";

function Abouthome() {
  return (
    <>
      <div className="about-header-parent-conatiner">
        <div className="about-header-left-container">
          <div className="about-home-main-heading">
            <h1>
              <b>About CCL</b>
            </h1>
            <h4>A game-changer in the startup ecosystem</h4>
          </div>
          <div className="about-home-primary-text">
            <p>
              It enables access to a global platform that brings together the
              best and brightest entrepreneurs, investors, mentors, and
              philanthropic organizations in an integrated ecosystem.
            </p>
            <p>
              With a network of world-class mentors from companies like Meta,
              Netflix, Uber, Shell, and Harvard University, along with the World
              Bank and OECD, and other multi-laterals, Co Create Labs is set to
              revolutionize the way start-ups are launched and grown.
            </p>
          </div>
          <div about-home-apply-btn>
            <button className="apply-btn">Apply Now</button>
          </div>
          <div className="about-slogan-conatiner">
            <div className="about-slogan">
              <img src={Fist} alt="" />
              <h3>EMPOWER</h3>
              <p>
                Empowering the world’s best entrepreneurs through all stages of
                their growth with mentorship, funds and services.
              </p>
            </div>
            <div className="about-slogan">
              <img src={People} alt="" />
              <h3>COMMUNITY</h3>
              <p>
                Connecting the investors with a curated list of impactful &
                investment ready startups.
              </p>
            </div>
          </div>
        </div>
        <div className="about-header-right-container">
          <img src={Aboutbanner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Abouthome;
