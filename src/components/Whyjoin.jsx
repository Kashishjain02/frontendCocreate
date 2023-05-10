import React from "react";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon1.png";
import icon3 from "../assets/Icon2.png";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/manworking.png";
import "./whyjoin.css";

const Whyjoin = () => {
  return (
    <div className="whyjoin-container">
      <div className="join-primary-heading">
          <b>Why Join Co-Create Labs?</b>
      </div>

      <div className="card-container">
        <div className="card">
          <img src={icon1} alt="" />
          <h2>Connections</h2>
        </div>
        <div className="card">
          <img src={icon2} alt="" />
          <h2>Growth</h2>
        </div>
        <div className="card">
          <img src={icon3} alt="" />
          <h2>Community</h2>
        </div>
      </div>
      

      
      <div className="whyjoin-parent-container">
        <div className="join-parent-conatainer">
          <div className="join-text-section">
            <div className="join-primary-title">
              <h4>Connections</h4>
            </div>
            <div className="join-primary-text">
              <b>
                {" "}
                Connect with
                <span className="join-text-primary">
                  {" "}
                  global impact makers{" "}
                </span>{" "}
                and achieve excellence in all spheres of{" "}
                <span className="join-text-primary">
                  business & personal development
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1">
              Our global reach and network can help you discover and forge
              meaningful connections for mentorship, fundraise, growth and
              propel you on a journey of personal and professional evolution.
            </div>
          </div>
          <div className="join-img-section">
            <img src={Banner} alt="" className="responsive-imag" />
          </div>
        </div>
        
        <div className="join-parent-conatainer2">
          <div className="join-img-section">
            <img src={Banner2} alt="" className="responsive-imag"/>
          </div>
          <div className="join-text-section">
            <div className="join-primary-title">
              <h4>Growth</h4>
            </div>
            <div className="join-primary-text">
              <b>
                Master Your Craft & Grow With
                <span className="join-text-primary">
                  {" "}
                  Every Mentoring Interaction{" "}
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1">
              Find opportunities to expand your skills and explore new avenues
              of development with amazing outcomes. Seek and get support from a
              thriving ecosystem of like minded people.
            </div>
          </div>
        </div>

        <div className="join-parent-conatainer">
          <div className="join-text-section">
            <div className="join-primary-title">
              <h4>Community</h4>
            </div>
            <div className="join-primary-text">
              <b>
                {" "}
                Be Part Of A
                <span className="join-text-primary"> Caring Community </span> ,
                develop key{" "}
                <span className="join-text-primary">
                  Social/Business Relationships & Opportunities
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1">
              Level up your startup with a world class community that supports
              you in pursuing your dream of building value driven business.
            </div>
          </div>
          <div className="join-img-section">
            <img src={Banner3} alt="" className="responsive-imag"/>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Whyjoin;
