import React from 'react'
import '../App.css';
import logo from '../assets/FlyLogoX.png';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <div className="navigation">
      <Link to="/"><img src={logo} alt="Fly Realty Logo" /></Link>
        <div className="navbar">
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/insights">Insights</Link>
            <Link to="/about">About Us</Link>
            <Link to="/connect">Connect</Link>
        </div>
    </div>
  )
}
