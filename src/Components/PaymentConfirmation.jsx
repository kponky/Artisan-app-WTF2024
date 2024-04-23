import React from "react";
import checkimg from '../assets/Frame 1000009966.png'

const PaymentConfirmation = () => {
  return (
    <div className="confirmation-card">
      <div className="tick">
        <img src={checkimg} alt="check" />
      </div>

      <div>
        <h3>Payment Succesfull</h3>
        <p>
          Thank you for buying with us today <br />
          We value You!
        </p>
        <div className="confirmation-btn">
          <Link to="/">
            <button>Return Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
