// ThankYouPopup.js
import React from "react";
import "./ThankYouPopup.css";

function ThankYouPopup({ onClose }) {
  return (
    <div className="thank-you-popup">
      <h2>Thank You!</h2>
      <p>Your message has been submitted successfully.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default ThankYouPopup;
