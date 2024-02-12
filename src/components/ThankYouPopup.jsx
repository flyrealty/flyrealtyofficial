import React from "react";
import "./ThankYouPopup.css";

function ThankYouPopup({ onClose }) {
  const closePopups = () => {
    onClose();
  };

  return (
    <div className="thank-you-popup-modal">
      <div className="thank-you-popup-content">
        <button className="close-button-popup" onClick={closePopups}>
          x
        </button>
        <p>Thank you for your interest in joining our team.</p>
      </div>
    </div>
  );
}

export default ThankYouPopup;
