import React from "react";
import "../App.css";
import { Nav, Footer } from "../exports";
import circleVector from "../assets/GroupCircle.png";
import "@splidejs/react-splide/css";
import element from "../assets/element.png";
import peopleVector from "../assets/peopleVector.png";
import people from "../assets/people.png";
import flipcoin from "../assets/flipcoin.png";

export default function About() {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="about">
          <div className="about-heading">
            <div className="main-heading">
              <h1>We consult two sides of the same coin,</h1>
              <h1>
                <span>The Builder and</span>{" "}
                <span>
                  <b></b>
                </span>
              </h1>
              <h1>
                {" "}
                <span>The Home-Buyers.</span>
              </h1>
              <h6>
                Essentially, we serve as consultants for all aspects of real
                estate needs.
              </h6>
            </div>
            <div className="about-heading-img">
              <img src={flipcoin} alt="" />
            </div>
          </div>

          <div className="story">
            <div className="story-heading">
              <h1>Our Story In The Making</h1>
              <div className="story-content">
                <div className="story-bg-element">
                  <img src={circleVector} alt="" />
                </div>
                <div className="story-text">
                  <div className="story-text-block">
                    <p>
                      Thinking Big, Started Small, <span>Acting Right.</span>
                    </p>
                    <p>
                      Founded in 2022 and based out of Bengaluru, FLY Realty is
                      beyond a channel partner/brokerage firm, we’re a
                      Consulting Firm.
                    </p>
                    <p>
                      We specialize in delivering actionable Marketing and Sales
                      Consulting Services exclusively for builders, guiding them
                      through every step from strategic planning to seamless
                      execution (B2B). And, assisting home-buyers in making
                      informed decisions and wise investments in purchasing
                      residential properties (B2C).
                    </p>
                    <p>We’re Consultants, for real.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parent-sib">
            <div className="parent-heading">
              <h1>The Parent And Siblings</h1>
              <div className="parent-detail">
                <h2>MODERN SPAACES</h2>
                <h4>(Real Estate Developer)</h4>
              </div>
            </div>
            <div className="siblings">
              <div className="sib-item">
                <div className="sib">
                  <h3>FLY REALTY</h3>
                  <h6>Real Estate Consultancy</h6>
                </div>
                <span></span>
                <div className="sib">
                  <h3>iREx</h3>
                  <h6>Prop-Tech Firm</h6>
                </div>
              </div>
              <div className="sib-item">
                <div className="sib">
                  <h3>ELEMENTURE</h3>
                  <h6>Water Saving Technology</h6>
                </div>
                <span></span>
                <div className="sib">
                  <h3>FUEB</h3>
                  <h6>Water Saving Technology</h6>
                </div>
              </div>
              <div className="sib-item">
                <div className="sib">
                  <h3>LAVEN</h3>
                  <h6>Winery and Breweries</h6>
                </div>
                <span></span>
                <div className="sib">
                  <h3>UNEXPLORED</h3>
                  <h6>Experiental Travel</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="value-title-img">
              {/* <div className="value-title">
                  <h1>OUR</h1>
                  <h1>VALUES</h1>
                </div> */}
              <div className="value-img">
                <img src={element} alt="" />
              </div>
            </div>
            <div className="value-text-content">
              <div className="value-text-item">
                <h1>Our Mission</h1>
                <p>
                  To accelerate sales velocity and foster sustainable growth for
                  both our company and the builders by leveraging our
                  custom-made models. We achieve this by enhancing the overall
                  home-buying experience and ensuring the utmost satisfaction of
                  our customers.
                </p>
              </div>
              <div className="value-text-item">
                <h1>Our Vision</h1>
                <p>
                  To be the foremost trusted and reliable consultant, serving
                  builders and customers alike.
                </p>
              </div>
            </div>
          </div>
          <div className="core">
            <div className="core-wrapper">
              <div className="core-items">
                <div className="core-heading">
                  <h1>Our Core Values</h1>
                </div>
              </div>
              <div className="accordion-wrapper">
                <div className="accordion-points">
                  <div className="accordion-heading">
                    <h2>
                      <span>+</span> We consult, not sell.
                    </h2>
                  </div>
                  <div className="accordion-content">
                    <p>
                      This emphasizes the focus on understanding the client's
                      needs and challenges before proposing any solutions.
                      Consultants prioritize building trust and relationships
                      with clients, ensuring that their recommendations are
                      tailored to their specific context and situation. This
                      consultative approach creates a sense of partnership
                      rather than a transactional sales pitch.
                    </p>
                  </div>
                </div>
                <div className="accordion-points">
                  <div className="accordion-heading">
                    <h2>
                      <span>+</span> We are people-centric.
                    </h2>
                  </div>
                  <div className="accordion-content">
                    <p>
                      We prioritize our employees' well-being and growth,
                      fostering a work environment built on ethical principles
                      and strong work ethic. We believe happy, valued employees
                      thrive when treated with respect and empowered to make
                      positive contributions, ultimately fueling our
                      collective success.
                    </p>
                  </div>
                </div>
                <div className="accordion-points">
                  <div className="accordion-heading">
                    <h2>
                      <span>+</span> We follow Guidelines, Processes, and
                      Systems.
                    </h2>
                  </div>
                  <div className="accordion-content">
                    <p>
                      Our framework revolves around clear-cut guidelines setting
                      the big picture, well-defined processes outlining the
                      steps to achieve it, and robust systems ensuring every
                      action operates smoothly within the established norms – a
                      structured approach driving consistency and success.
                    </p>
                  </div>
                </div>
                <div className="accordion-points">
                  <div className="accordion-heading">
                    <h2>
                      <span>+</span> We are organized, transparent, and
                      reliable.
                    </h2>
                  </div>
                  <div className="accordion-content">
                    <p>
                      We run a tight ship! Our organization operates with clear
                      structure, open communication, and consistent results,
                      meaning people can trust you to deliver on your promises.
                    </p>
                  </div>
                </div>
                <div className="accordion-points">
                  <div className="accordion-heading">
                    <h2>
                      <span>+</span> We promote employee growth & happiness.
                    </h2>
                  </div>
                  <div className="accordion-content">
                    <p>
                      By prioritizing employee welfare and happiness, we
                      cultivate a thriving environment where individuals feel
                      valued, supported, and engaged. This translates to
                      increased productivity, lower turnover, and a stronger
                      company culture, ultimately benefiting both employees and
                      the overall success of the organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="people">
            <div className="people-vector">
              <img src={peopleVector} alt="" />
            </div>
            <div className="people-content">
              <div className="people-text">
                <h1>People - First</h1>
                <p>
                  Creating a healthy work environment built on trust,
                  transparency, honesty, loyalty, and empathy. <br></br>This in
                  turn helps us engage you with professionalism, patience, and
                  an ethical approach.
                </p>
              </div>
              <div className="people-img">
                <img src={people} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
