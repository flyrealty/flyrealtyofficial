import React from "react";
import "../App.css";
import teamImg from "../assets/teamphoto.png";
import { Link } from "react-router-dom";

export default function Team() {
  return (
    <div className="team">
      <div className="team-content">
        <h1>Powerhouse Team of 100+ Professionals</h1>

        <div className="team-content-subheading">
          <p>
            Our greatest strength lies not in any individual but in the combined
            spirit, talent, and dedication of each member. And we are confident
            that our team will continue to be committed to excellence and be the
            driving force behind our success.
          </p>
        </div>
      </div>
      <div className="team-image">
        <img src={teamImg} alt="" />
      </div>
      <button
        className="hustle-btn"
        onClick={() => {
          window.location.href = "/connect";
        }}
      >
        Join the Hustle
      </button>
    </div>
  );
}
