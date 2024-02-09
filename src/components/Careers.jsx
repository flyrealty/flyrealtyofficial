import React from "react";
import "./Careers.css";
import "../App.css";
import { Nav, Footer } from "../exports";
import flipcoin from "../assets/career-banner.jpg";

export default function Careers() {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="hero-section">
          <div className="hero-overlay">
            <h1 className="hero-text">
              Seeking a career that challenges you, inspires you, and rewards
              your hustle?<span> Then, Work With Us!</span>
            </h1>
          </div>
          <img className="hero-img" src={flipcoin} alt="" />
        </div>

        <div className="slider-container">
          <h2 className="section-heading">Here’s What Sets Us Apart</h2>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide card">
                <h3>Growth Opportunities</h3>
                <p>
                  We don't just hire talent, we cultivate it. Expect mentorship,
                  learning & development programs, and a chance to chart your
                  own career path.
                </p>
              </div>
              <div className="swiper-slide card">
                <h3>Collaborative Culture</h3>
                <p>
                  We believe in the power of teamwork. You'll be surrounded by
                  brilliant minds who are always ready to lend a hand (or a high
                  five).
                </p>
              </div>
              <div className="swiper-slide card">
                <h3>Fun and Rewarding</h3>
                <p>
                  We take work seriously, but we don't take ourselves too
                  seriously. Expect a fun, friendly atmosphere with perks that
                  go beyond the paycheck.
                </p>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>

        <div className="job-openings">
          <h2 className="section-heading">Current Job Openings</h2>
          <div className="job-cards">
            <div className="job-card">
              <h3 className="position-name">Position 1</h3>
              <button className="apply-button">Apply</button>
            </div>
            <div className="job-card">
              <h3 className="position-name">Position 2</h3>
              <button className="apply-button">Apply</button>
            </div>
            <div className="job-card">
              <h3 className="position-name">Position 3</h3>
              <button className="apply-button">Apply</button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
