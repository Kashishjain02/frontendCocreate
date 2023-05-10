import React from "react";
import mask1 from "../assets/pointer1.png";
import mask2 from "../assets/pointer2.png";
import mask3 from "../assets/pointer3.png";
import mask4 from "../assets/pointer4.png";
import "./investapply.css";

const Investapply = () => {
  return (
    <>
      <div className="invest-apply-parent-container">
        <div className="invest-apply-top-container">
          <h1 className="investapply-primary-heading">How To Apply</h1>
          <p className="invest-apply-primary-text">
            We understand the challenges that startups face when it comes to
            securing investment, and we're here to make it easier. <br /> <br />{" "}
            Our platform provides a simple way for startups to connect with
            investors and VC funds that are actively looking for new
            opportunities to invest in.
          </p>
          <div className="get-intouch-btn">
            <a href="">Get in touch with us</a>
          </div>
        </div>
        <div className="invest-apply-cards-container">
          <div className="invest-apply-center-container">
            <div className="invest-apply-center-left">
              <img src={mask1} alt="" />
              <br /> <br />
              <h3>Create a Profile</h3>
              <br /> <br />
              <p>
                Your profile should include information about the startup, such
                as its industry, stage of development, funding needs, and team
                members. The more complete the profile, the better chance the
                startup will have of being matched with investors who are
                interested in their particular niche.
              </p>
            </div>

            <div className="invest-apply-center-right">
              <img src={mask2} alt="" />
              <br /> <br />
              <h3>Matchmaking</h3>
              <br /> <br />
              <p>
                This platform will use its matchmaking algorithm to connect the
                startup with investors who are looking for opportunities that
                fit their criteria. The platform will also provide additional
                resources, such as help on how to create a compelling pitch, to
                help the startup founder prepare for investor meetings.
              </p>
            </div>
          </div>

          <div className="invest-apply-bottom-container">
            <div className="invest-apply-center-left">
              <img src={mask3} alt="" />
              <br /> <br />
              <h3>Investor Meetings</h3>
              <br />
              <p>
                Once the startup founder is connected with investors, the next
                step is to schedule meetings with them to discuss their business
                idea and funding needs.
              </p>
            </div>

            <div className="invest-apply-center-right">
              <img src={mask4} alt="" />
              <br /> <br />
              <h3>Funding and Support</h3>
              <br />
              <p>
                If the investor meetings go well, the startup may receive
                funding. CCL also provides additional resources, such as
                mentorship, networking opportunities, and educational content,
                to help the startup grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investapply;
