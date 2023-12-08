import React from 'react'
import '../App.css'
import { Nav, Footer} from '../exports';

export default function Connect() {
  return (
    <div className="container">
      <Nav />
      <div className="wrapper">
        <div className="connect">
          <div className="connect-header">
            <div className="heading">
              <h1>Get In Touch With Us</h1>
              <h6>For a Seamless Real Estate Consulting Services</h6>
            </div>
            <a href="tel:+91984473355">
              <i class="fa-solid fa-phone"></i>
              <h6>+91 98444 73355</h6>
            </a>
          </div>
          <div className="connect-form">
            <div className="connect-content">
              <div className="form">
                <h1><i class="fa-regular fa-address-card"></i> Get In Touch</h1>
                <form action="">
                  <input type="text" placeholder='Your Name' />
                  <input type="number" placeholder='Phone Number' />
                  <input type="email" placeholder='Email Address' />
                  <textarea name="" id="" cols="30" rows="5" placeholder='Message'></textarea>
                  <button>Send Now</button>
                </form>
              </div>
              <div className="connect-persons">
                <div className="person">
                  <h2>Business Enquiries</h2>
                  <h3>aishwarya@flyrealty.in</h3>
                </div>
                <div className="person">
                  <h2>Sales Enquiries</h2>
                  <h3>sales@flyrealty.in</h3>
                </div>
                <div className="person">
                  <h2>Careers/Internships</h2>
                  <h3>renukumari@flyrealty.in</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="connect-addresses">
            <div className="address-item">
              <h1>Bengaluru</h1>
              <h6>Headquarters</h6>
              <div className="address">
                <h6>3rd Floor, Sakti Statesman Building</h6>
                <h6>Outer Ring Rd, Green Glen Layour,</h6>
                <h6>Bellandur, Bengaluru, 560103</h6>
                <h6>+91 98444 73355</h6>
              </div>
              <a href="">View on Maps</a>
            </div>
            <div className="address-item">
              <h1>Pune</h1>
              <h6>Branch Office</h6>
              <div className="address">
                <h6>Office No. B-16, Floor No.6,</h6>
                <h6>City Vista, Kharadi</h6>
                <h6>Pune 411014</h6>
                <h6>+91 97655 50717</h6>
              </div>
              <a>View on Maps</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
