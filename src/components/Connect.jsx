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
          "https://script.google.com/macros/s/AKfycbxt9cHPUpfG8_MnWde3VoREkT--4vHx7U0oIkeHHB0ajFbnU2V8JwHoOt3D7cGOoYjV/exec",
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
              <i className="fa-solid fa-phone"></i>
              <h6>+91 9844473355</h6>
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
            <h1 className="w-full">Bengaluru</h1>
            <h6 className="w-full">Headquarters</h6>
            <div className="address">
              <h6 className="w-full">Ground Floor, Urban Vault, 19, </h6>
              <h6 className="w-full">18th Cross Rd, Sector 6, </h6>
              <h6 className="w-full">HSR Layout, Bengaluru, 560102</h6>
              <h6 className="w-full">PRM/KA/RERA/1251/309/</h6>
              <h6 className="w-full">AG/220530/002939</h6>
              <h6 className="w-full">+91 9844473355</h6>
            </div>
            <a href="https://maps.app.goo.gl/BP9DcCixNa7hTdRB9">View on Maps</a>
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
