import React from "react";
import "../App.css";
import teamImg from "../assets/teamphoto.png";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="team">
      <div className="team-image">
        <img src={teamImg} alt="" />
      </div>
      <div className="team-content">
        <h1>People-First</h1>
        <h1>Company Culture.</h1>
        <div className="team-content-subheading">
          <p>Our Greatest strength lies in our team.</p>
          <p>100+ Professionals.</p>
        </div>
        <Link to="/about" className="hustle-btn">
          Join the Hustle
        </Link>
      </div>
    </div>
  );
}
