import React from 'react';
import '../App.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-item">
        <CircularProgressbarWithChildren value={40} styles={buildStyles({
            pathColor: "#CCFF00",
            rotation: 0.5 + (1 - 30 / 100) / 2
          })}>
          <div style={{ fontSize: 30, marginTop: -5 }}>
            <strong>300+</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h3>Project Affiliated</h3>
      </div>
      <div className="hero-item">
        <CircularProgressbarWithChildren value={90} styles={buildStyles({
            pathColor: "#CCFF00",
          })}>
          <div style={{ fontSize: 30, marginTop: -5 }}>
            <strong>INR 1200+</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h3>Worth of Real Estate Sold</h3>
      </div>
      <div className="hero-item">
        <CircularProgressbarWithChildren value={75} styles={buildStyles({
            pathColor: "#CCFF00",
            rotation: 0.5 + (1 - 80 / 100) / 2
          })}>
          <div style={{ fontSize: 30, marginTop: -5 }}>
            <strong>800+</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h3>Delighted Customers</h3>
      </div>
      <div className="hero-item">
        <CircularProgressbarWithChildren value={30} styles={buildStyles({
            pathColor: "#CCFF00",
            rotation: 0.5 + (1 - 20 / 100) / 2
          })}>
          <div style={{ fontSize: 30, marginTop: -5 }}>
            <strong>100+</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h3>Professionals</h3>
      </div>
      <div className="hero-item">
        <CircularProgressbarWithChildren value={20} styles={buildStyles({
            pathColor: "#CCFF00",
            rotation: 0.5 + (1 - 90 / 100) / 2
          })}>
          <div style={{ fontSize: 30, marginTop: -5 }}>
            <strong>02</strong>
          </div>
        </CircularProgressbarWithChildren>
        <h3>Branch Offices</h3>
      </div>
      
      
    </div>
  )
}
