import React from "react";
import knowledgeimg1 from "../assets/knowledgeimg1.png";
import "./knowledge.css";
import { MdArrowRightAlt } from "react-icons/md";

const Knowledge = () => {
  return (
    <div>
        
      <div className="knowledge-parent-container">
      <div className="knowledge-heading">
          <b><p>Our Knowledge Center</p></b>
        </div>
        <div className="knowledge-card-container">
          <div className="knowledge-card">
            <div className="knowledge-img">
              <img src={knowledgeimg1} alt="" />
            </div>
            <div className="knowledge-date-container">
              <p>27 Jan 2021</p>
            </div>
            <div className="knowledge-card-heading">
              <h5>
                How one CCL user grew his consultancy from $0-100K in 12 months
              </h5>
            </div>
            <div className="knowledge-card-primary-text">
              <p>
                See how pivoting to CCL changed one person’s sales strategy &
                allowed
              </p>
            </div>
            <div className="card-readmore-conatainer">
              <button className="readmore">
                <b>
                  Read More{" "}
                  <span><MdArrowRightAlt/></span>
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
