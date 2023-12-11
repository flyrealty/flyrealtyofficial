import React from 'react';
import '../App.css';
import { Nav, Footer} from '../exports';
import circleVector from '../assets/GroupCircle.png';
import '@splidejs/react-splide/css';
import element from '../assets/element.png'
import peopleVector from '../assets/peopleVector.png'
import PeopleFirst from '../assets/PeopleFirst.png'
import CoreValues from '../assets/CoreValues.png'
import puzzle from '../assets/puzzle.png'
import people from '../assets/people.png'

export default function About() {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="about">
          <div className="about-heading">
            <div className="main-heading">
              <h1>We consult two sides of the same coin,</h1>
              <h1><span>THE BUILDERS</span> <span>and</span> <span>THE HOME-BUYERS.</span></h1>
            </div>
            <h6>Essentially, we serve as consultants for all aspects of real estate needs.</h6>
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
                    <p>Thinking Big, Started Small, <span>Acting Right.</span></p>
                    <p>Founded in 2022 and based out of Bengaluru, FLY Realty is beyond a channel partner/brokerage firm, we’re a Consulting Firm.</p>
                    <p>We specialize in delivering actionable Marketing and Sales Consulting Services exclusively for builders, guiding them through every step from strategic planning to seamless execution (B2B). And, assisting home-buyers in making informed decisions and wise investments in purchasing residential properties (B2C).</p>
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
                <p>To accelerate sales velocity and foster sustainable growth for both our company and the builders by leveraging our custom-made models. We achieve this by enhancing the overall home-buying experience and ensuring the utmost satisfaction of our customers.</p>
              </div>
              <div className="value-text-item">
                <h1>Our Vision</h1>
                <p>To be the foremost trusted and reliable consultant, serving builders and customers alike.</p>
              </div>
            </div>
          </div>
          <div className="core">
          
            <div className="core-wrapper">
              <div className="core-items">
                <div className="core-heading">
                    <h1>Our Core Values</h1>
                </div>
                  <p>We consult, not sell.</p>
                  <p>We are people-centric. (People we serve and people we employ, both.)</p>
                  <p>We follow Guidelines, Processes, and Systems (GPS).</p>
                  <p>We are organized, transparent, and reliable.</p>
                  <p>We are culture-driven.</p>
                  <p>We promote employee growth & happiness.</p>
              </div>
              <div className="core-img">
                <img src={""} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="people">
            <div className="people-vector">
              <img src={peopleVector} alt="" />
            </div>
            <div className="people-content">
              <div className="people-text">
                <h1>People - First</h1>
                <p>Creating a healthy work environment built on trust, transparency, honesty, loyalty, and empathy.
                This in turn helps us engage you with professionalism, patience, and an ethical approach.
                </p>
              </div>
              <div className="people-img">
                <img src={puzzle} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}
