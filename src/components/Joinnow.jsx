import React from "react";
import "./joinnow.css";
import Iphoneimg from "../assets/iphoneimg.png";
import Greenellipse from "../assets/greenellipse.png";
import Blueellipse from "../assets/blueellipse.png";
import Link from '@mui/material/Link';

const Joinnow = () => {
  return (
    <div>
      <div className="joinnow-parent-container">
        <div className="joinnow-background">
          <p></p>
        </div>
        <div className="joinnow-rectangular-card">
          <div className="joinnow-rectangle-content">
            <div className="joinnow-rectangle-content-left">
              <div>
                <p className="joinnow-primary-heading">
                  Join now & Become member Apply For Credit !
                </p>
              </div>
              <div>
                <p className="joinnow-primary-text">
                  Avail mentoring sessions on demand. Buy credits to avail
                  access easily. Anytime. Anywhere.
                </p>
              </div>
              <div className="joinnow-button-container">
                <Link href="/dashboard" variant="body2">
                  <button className="buynow"> Buy Now </button>
                </Link>
                <Link href="/dashboard" variant="body2">
                  <button className="getcredits">Get Credits</button>
                </Link>
              </div>
            </div>

            <div className="joinnow-rectangle-content-right">
              <div className="green-ellipse">
                <img src={Greenellipse} alt="" />
              </div>
              <div className="blue-ellipse">
                <img src={Blueellipse} alt="" />
              </div>
              <div className="iphone-img">
                <img src={Iphoneimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinnow;
