import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="home-container">
          <div className="home-left-content">
            <h5 className="home-primary-heading">
              Best Place In The
              World To Build Your 
              Startup
            </h5>
            <p className="home-primary-text">
              Co Create Labs is a game-changer in the startup ecosystem. It
              enables access to a global platform that brings together the best
              and brightest entrepreneurs, investors, mentors, and philanthropic
              organizations in an integrated ecosystem.
            </p>
            <div className="wrapper">
              <Link to="/">
                <button className="secondary-button1">Start Growing</button>
              </Link>
              <Link to="/about">
                <button className="secondary-button2">
                  <BsFillPlayCircleFill
                    size={300}
                    style={{ width: 50, height: 30 }}
                  />
                  Who are we
                </button>
              </Link>
            </div>
            {/* </div> */}
          </div>

          <div className="home-right-content">
            <div className="home-image-section rounded">
              {/* <img src={BannerImage} alt="" className="home-bannerimg"/> */}
              <iframe
                width="700"
                height="500"
                src="https://www.youtube.com/embed/OCnFnBtlg-c"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
