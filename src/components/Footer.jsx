import React from 'react';
import '../App.css'
import logo from "../assets/FlyLogoW.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/"><img src={logo} alt="Fly Realty Logo" /></Link>
        <div className="ext-links">
          <h6>© 2023 Fly Realty. All Rights Reserved</h6>
          <span></span>
          <Link to="/privacy"><h6>Privacy Policy</h6></Link>
        </div>
        <div className="social-media">
        <a href="https://www.linkedin.com/company/80794197/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/flyrealty.in/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/flyrealty.in"><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>
      <h6>RERA Registration No. Karnataka - PRM/KA/RERA/1251/309/AG/220530/002939 <span className="rera-style">Maharashtra - A52100046472</span></h6>
    </div>
  )
}
