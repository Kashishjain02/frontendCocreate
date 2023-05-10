import React from "react";
import "./process.css";
import Processbanner from "../assets/process.png";
import Lineicon from "../assets/lineicon.png";

const Process = () => {
  return (
    <>
      <div className="process-parent-container">
        <div className="process-top-container">
          <div className="process-top-left-content">
            <h6>OUR CORE VALUES</h6>
            <h3><b>Goal focused</b></h3>
            <p>
              Our Goal is to Build an equitable, inclusive, sustainable,
              <p> and
              integrity-inspired global entrepreneurial ecosystem.</p>
            </p>
          </div>
          <div className="process-top-right-content">
            <h3><b>Continuous improvement</b></h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

        </div>
        <div className="process-middle-container">
            <img src={Processbanner} alt="" />
        </div>
        <div className="process-bottom-conntainer">
            <h2><b>The process we follow</b></h2>
            <div className="process-bottom-content-container">
                <div className="bottom-content">
                    <img src={Lineicon} alt="" />
                    <h6><b>Planning</b></h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                <div className="bottom-content">
                    <img src={Lineicon} alt="" />
                    <h6><b>Conception</b></h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                <div className="bottom-content">
                    <img src={Lineicon} alt="" />
                    <h6><b>Design</b></h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
                <div className="bottom-content">
                    <img src={Lineicon} alt="" />
                    <h6><b>Development</b></h6>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Process;
