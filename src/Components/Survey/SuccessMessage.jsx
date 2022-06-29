import React from "react";
import "./successMessage.css";

import { BsCheckCircleFill } from "react-icons/bs";

function SuccessMessage() {
  return (
    <div className="success-container">
      <div className="submit-success container">
        <div className="success-header">
          <BsCheckCircleFill className="icon" />
          <p>Your answers have been successfully submitted!</p>
        </div>
        <div className="success-message">
          <p>Thank you for your participation</p>
        </div>
      </div>
    </div>
  );
}

export default SuccessMessage;
