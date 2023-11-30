import React from 'react';
import '../App.css'
import logo from "../assets/FlyLogoW.png"

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
        <img src={logo} alt="Fly Realty Logo" />
        <h6>© 2023 Fly Realty. All Rights Reserved</h6>
        <div className="social-media">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-x-twitter"></i>
        <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
      <h6>RERA State | RERA Registration No.Karnataka - PRM/KA/RERA/1251/309/AG/220530/002939 Maharashtra - A52100046472</h6>
    </div>
  )
}
