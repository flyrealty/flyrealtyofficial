import React from 'react';
import '../App.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import progress1 from '../assets/Asset 1.png';
import progress2 from '../assets/Asset 2.png';
import progress3 from '../assets/Asset 6.png';
import progress4 from '../assets/Asset 7.png';
import progress5 from '../assets/Asset 8.png';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-item">
        <img src={progress1} alt="" />
        <h3>Project Affiliated</h3>
      </div>
      <div className="hero-item">
        <img src={progress2} alt="" />
        <h3>Worth of Real Estate Sold</h3>
      </div>
      <div className="hero-item">
      <img src={progress4} alt="" />
        <h3>Delighted Customers</h3>
      </div>
      <div className="hero-item">
        <img src={progress3} alt="" />
        <h3>Professionals</h3>
      </div>
      <div className="hero-item">
        <img src={progress5} alt="" />
        <h3>Branch Offices</h3>
      </div>
    </div>
  )
}
