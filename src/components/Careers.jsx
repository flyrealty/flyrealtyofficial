import React, { useState } from "react";
import "./Careers.css";
import "../App.css";
import { Nav, Footer } from "../exports";
import flipcoin from "../assets/connectus.png";
import PopupForm from "./PopupForm";
import bottom from "../assets/bottom-img.png";
import growth from "../assets/customer-experience.png";
import buddy from "../assets/buddy.png";
import loyal from "../assets/loyal-customer.png";

export default function Careers() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const togglePopup = (job) => {
    setSelectedJob(job);
    setShowPopup(!showPopup);
  };

  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="title-img-wrapp">
          <div className="careers-head">
            <p>
              Seeking a career that challenges you, inspires you, and rewards
              your hustle?{" "}
            </p>
            <h1>Then, Work With Us!</h1>
          </div>
          <div className="hero-section">
            <img className="hero-img" src={flipcoin} alt="" />
          </div>
        </div>
        <div className="sets-contain">
          <div className="sets-apart-wrapper">
            <h1 className="sets-aprt-head">Here’s What Sets Us Apart,</h1>

            <div className="sets-aprt-content">
              <div className="img-text-head">
                <img src={growth} alt="Growth Opportunities" />
                <div className="point-wrapper">
                  <h2 className="point-heading">Growth Opportunities</h2>
                  <div className="point-content-career">
                    <p className="point-apart">
                      We don't just hire talent, we cultivate it. Expect
                      mentorship, learning & development programs, and a chance
                      to chart your own career path.
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaborative Culture */}

              <div className="img-text-head">
                <img src={buddy} alt="Collaborative Culture" />
                <div className="point-wrapper">
                  <h2 className="point-heading">Collaborative Culture</h2>
                  <div className="point-content-career">
                    <p className="point-apart">
                      We believe in the power of teamwork. You'll be surrounded
                      by brilliant minds who are always ready to lend a hand (or
                      a high five).
                    </p>
                  </div>
                </div>
              </div>

              {/* Fun and Rewarding */}
              <div className="img-text-head">
                <img src={loyal} alt="Fun and Rewarding" />
                <div className="point-wrapper">
                  <h2 className="point-heading">Fun and Rewarding</h2>
                  <div className="point-content-career">
                    <p className="point-apart">
                      We take work seriously, but we don't take ourselves too
                      seriously. Expect a fun, friendly atmosphere with perks
                      that go beyond the paycheck.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="jobs-open-contain">
          <div className="jobs-open-wrapper">
            <h1 className="jobs-open-head">Current Job Openings</h1>
            <div className="wrap-job-cards">
              <div className="job-card">
                <h2 className="job-title">Relationship Manager</h2>
                <p className="job-requirements">
                  Full Time | Residential Sales | 0 to 3 Years Exp | Bengaluru &
                  Pune
                </p>
                <div className="btn-apply">
                  <button
                    className="apply-button"
                    onClick={() => togglePopup("Relationship Manager")}
                  >
                    <span style={{ fontWeight: "bold" }}>Apply Now &gt; </span>
                  </button>
                </div>
              </div>

              <div className="job-card">
                <h2 className="job-title">Senior Relationship Manager</h2>
                <p className="job-requirements">
                  Full Time | Residential Sales | 3 to 6 Years Exp | Bengaluru
                </p>
                <div className="btn-apply">
                  <button
                    className="apply-button"
                    onClick={() => togglePopup("Senior Relationship Manager")}
                  >
                    <span style={{ fontWeight: "bold" }}>Apply Now &gt; </span>
                  </button>
                </div>
              </div>

              <div className="job-card">
                <h2 className="job-title">Team Leader</h2>
                <p className="job-requirements">
                  Full Time | Residential Sales | 6+ Years Exp | Bengaluru
                </p>
                <div className="btn-apply">
                  <button
                    className="apply-button"
                    onClick={() => togglePopup("Team Leader")}
                  >
                    <span style={{ fontWeight: "bold" }}>Apply Now &gt; </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dont-hustle-contain">
          <div className="dont-hustle-wrapper">
            <h1 className="dont-hustle-head">
              {" "}
              Don't just find a job, Join The Hustle!
            </h1>

            <div className="bottom-image">
              <img src={bottom} alt="Description of the image" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {showPopup && <PopupForm job={selectedJob} onClose={togglePopup} />}
    </div>
  );
}
