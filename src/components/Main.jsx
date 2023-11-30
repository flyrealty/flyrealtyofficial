import React from 'react';
import '../App.css';

export default function Main() {
  return (
    <div className="main">
        <div className="main-heading">
          <h1>Our</h1>
          <h1>Services.</h1>
          <div className="search">
            <div className='search-bar'>
              <input type='text' placeholder='Search...'/>
              <button>Go</button>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery-wrap">
            <div className="item item-1">
              <div><h5>Property Consultation</h5></div>
              <div className="explore">
                <h5>I need help with searching for available properties.</h5>
                  <ul>
                    <li>Zero Consultancy Charges</li>
                    <li>Exclusive Inventory Availability</li>
                    <li>Best Guaranteed Price</li>
                  </ul>
                <button>Explore Projects</button>
              </div>
            </div>
            <div className="item item-2">
              <div>
                <h5>Business Consultation</h5></div>
                <div className="explore">
                <h5>I want to enhance the sales velocity.</h5>
                  <ul>
                    <li>360-degree Marketing Strategy & Execution</li>
                    <li>Building End-to-end Sales Process</li>
                    <li>After-Sales CRM Support</li>
                  </ul>
                <button>Know More</button>
              </div>
            </div>
            <div className="item item-3">
              <div>
                <h5>Marketing Consultation</h5>
              </div>
              <div className="explore">
                <h5>I need help with a strategic marketing approach.</h5>
                  <ul>
                    <li>Proficient in Real Estate Marketing</li>
                    <li>Digital, Design & Communications</li>
                    <li>Quick TAT for Deliverables</li>
                  </ul>
                <button>Know More</button>
              </div>
            </div>
            <div className="item item-4">
              <div><h5>RE Portfolio Consultation</h5></div>
              <div className="explore">
                <h5>I need help with real estate investment opportunities.</h5>
                  <ul>
                    <li>Safe & Secured Collateral Investment</li>
                    <li>18 to 40% Annual Returns</li>
                    <li>Minimum Investment of INR 20 Lakhs</li>
                  </ul>
                <button>Know More</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
