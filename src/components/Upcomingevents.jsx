import React from "react";
import eventimg1 from "../assets/eventimg1.png";
import "./upcomingevents.css";

const Upcomingevents = () => {
  return (
    <div>
      <div className="events-parent-container">
      <div className="upcomingevents-container">
          <div className="event-primary-heading">
            <h3>
              <b>Upcoming Events</b>
            </h3>
          </div>
          <div className="event-primary-title">
            <p>
              Co Create Events are a great opportunity to meet investors,
              mentors and community and connect with the right kind of people
              from diverse domains.
            </p>
          </div>
        </div>
        <div className="evnts-card-container">
          <div className="events-card">
            <div className="event-img">
              <img
                src={eventimg1}
                alt=""
                height={256}
                style={{ width: "100%" }}
              />
            </div>
            <div className="eventcard-text-container">
              <div className="event-date-month-container">
                <div className="event-month-container">
                  <p>APR</p>
                </div>
                <div className="event-date-container">
                  <h3>14</h3>
                </div>
              </div>
              <div className="event-heading-description-container">
                <div className="event-card-heading">
                  <h6>
                    <b>Mentor Connect Event Taj Vivanta, Bangalore</b>
                  </h6>
                </div>
                <div className="event-card-description">
                  <p>
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="events-card">
            <div className="event-img">
              <img
                src={eventimg1}
                alt=""
                height={256}
                style={{ width: "100%" }}
              />
            </div>
            <div className="eventcard-text-container">
              <div className="event-date-month-container">
                <div className="event-month-container">
                  <p>APR</p>
                </div>
                <div className="event-date-container">
                  <h3>14</h3>
                </div>
              </div>
              <div className="event-heading-description-container">
                <div className="event-card-heading">
                  <h6>
                    <b>Mentor Connect Event Taj Vivanta, Bangalore</b>
                  </h6>
                </div>
                <div className="event-card-description">
                  <p>
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="events-card">
            <div className="event-img">
              <img
                src={eventimg1}
                alt="sample"
                height={256}
                style={{ width: "100%" }}
              />
            </div>
            <div className="eventcard-text-container">
              <div className="event-date-month-container">
                <div className="event-month-container">
                  <p>APR</p>
                </div>
                <div className="event-date-container">
                  <h3>14</h3>
                </div>
              </div>
              <div className="event-heading-description-container">
                <div className="event-card-heading">
                  <h6>
                    <b>Mentor Connect Event Taj Vivanta, Bangalore</b>
                  </h6>
                </div>
                <div className="event-card-description">
                  <p>
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="events-button-container">
          <button className="loadmore">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Upcomingevents;
