import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import "../App.css";
import { Nav, Footer } from "../exports";
import banner from "../assets/bussiness-connect.png";

export default function Connect() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;

    // Validate name
    if (!formData.Name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      formValid = false;
    }

    // Validate phone number
    if (!validatePhoneNumber(formData.Phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Invalid phone number (10 digits required)",
      }));
      formValid = false;
    }

    // Validate email
    if (!validateEmail(formData.Email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      formValid = false;
    }

    if (formValid) {
      try {
        // Form submission to Google Script link
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzppvI4Se6Yvg_xPIjUCeH5GCWnO5ngtkrf3zJ13pvHoT9fWGYkmmYpPi3bl9LijpRM/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
          }
        );

        if (response.ok) {
          setShowPopup(true);
        } else {
          console.error("Failed to submit form data");
        }
      } catch (error) {
        console.error("Error submitting form data:", error);
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <Nav />

      <div className={`wrapper ${showPopup ? "blur" : ""}`}>
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
                <form className="form-wrap" onSubmit={handleSubmit}>
                  <h1>We Would Love To Hear From You!</h1>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your Name *"
                    value={formData.Name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}

                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number *"
                    value={formData.Phone}
                    onChange={handleInputChange}
                  />
                  {errors.phoneNumber && (
                    <p className="error">{errors.phoneNumber}</p>
                  )}

                  <input
                    type="email"
                    name="Email"
                    placeholder="Email Address *"
                    value={formData.Email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="error">{errors.email}</p>}

                  <textarea
                    name="Message"
                    cols="30"
                    rows="5"
                    placeholder="Message"
                    value={formData.Message}
                    onChange={handleInputChange}
                  ></textarea>

                  <button type="submit">Send Now</button>
                </form>
              </div>
              <div className="connect-persons">
                <div className="person">
                  <h2>Business Enquiries</h2>
                  <h3>marketing@flyrealty.in</h3>
                </div>
                <div className="person">
                  <h2>Sales Enquiries</h2>
                  <h3>sales@flyrealty.in</h3>
                </div>
                <div className="person">
                  <h2>Careers/Internships</h2>
                  <h3>hr@flyrealty.in</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrap-connect-address">
        <div className="connect-addresses">
          <div className="address-item">
            <h1>Bengaluru</h1>
            <h6>Headquarters</h6>
            <div className="address">
              <h6>3rd Floor, Sakti Statesman Building</h6>
              <h6>Outer Ring Rd, Green Glen Layout,</h6>
              <h6>Bellandur, Bengaluru, 560103</h6>
              <h6>PRM/KA/RERA/1251/309/</h6>
              <h6>AG/220530/002939</h6>
              <h6>+91 98444 73355</h6>
            </div>
            <a href="https://www.google.com/maps/dir//3rd+Floor,+Sakti+Statesman,+Building+Iblur,+Outer+Ring+Rd,+Green+Glen+Layout,+Bellandur,+Bengaluru,+Karnataka+560103/@12.9239613,77.5851863,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae1394202080ff:0x138b8e3f3971dd15!2m2!1d77.6675882!2d12.9239742?entry=ttu">
              View on Maps
            </a>
          </div>
          <div className="address-item">
            <h1>Pune</h1>
            <h6>Branch Office</h6>
            <div className="address">
              <h6>Office No. B-16, Floor No.6,</h6>
              <h6>City Vista, Kharadi</h6>
              <h6>Pune 411014</h6>
              <h6>MahaRERA - A52100046472</h6>
              <h6>+91 97655 50717</h6>
            </div>
            <a href="https://www.google.com/maps/dir/12.9140765,77.6650548/fly+realty+pune/@15.6837959,73.1549959,7z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2c1bb4e1c923b:0x949fed19272dee7c!2m2!1d73.9312748!2d18.5508936?entry=ttu">
              View on Maps
            </a>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Thank You!</h2>
            <p>Our Property Experts will get back to you soon!</p>
            <button
              onClick={() => {
                setShowPopup(false);
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginTop: "15px",
                color: "#0c1d3c",
              }}
            >
              <ImCancelCircle size={30} />
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
