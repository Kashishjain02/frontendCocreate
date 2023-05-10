import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./gettingstarted.css";
import rightarrow from "../assets/line.png";

const Gettingstarted = () => {
  return (
    <div>
      <div className="section">
        <div className="getstarted-content">
          <div className="text-section">
            <h1>Find Your Next Dream Connect</h1>
            <h2>Get started with us Sign up Today!</h2>
          </div>
          <div className="button-container">
            <button id="btn1">
              Sign Up{" "}
              <span>
                <img src={rightarrow} alt="" />
              </span>
            </button>
            <button id="btn2">Get Free Credit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gettingstarted;
