import React from 'react';
import '../App.css'
import logo from "../assets/FlyLogoW.png"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="links">
      
        
<div className="ext-links">
<h6>
  <Link to="/privacy">© 2024 Fly Realty. All Rights Reserved</Link>
</h6>
<span></span>
</div>
        <div className="social-media">
        <a href="https://www.linkedin.com/company/80794197/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/flyrealty.in/"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://www.facebook.com/flyrealty.in"><i class="fa-brands fa-facebook"></i></a>
        </div>
      </div>

    </div>
  )
}
