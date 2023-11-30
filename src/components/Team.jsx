import React from 'react';
import '../App.css';
import teamImg from '../assets/teamphoto.png'

export default function Team() {
  return (
    <div className="team">
      <div className="team-image">
        <img src={teamImg} alt="" />
      </div>
      <div className="team-content">
        <h1>Build a People-First</h1>
        <h1>Company Culture.</h1>
        <div className="team-content-subheading">
          <p>Our Greatest strength lies in our team.</p>
          <p>100+ Professionals.</p>
        </div>
        <button>Join the Hustle</button>
      </div>
    </div>
  )
}
