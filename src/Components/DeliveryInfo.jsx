import React from "react";
import '../styles/delivery.css'

const DeliveryInfo = () => {
  return (
    <div className="delivery-info-container">
      <h3>Delivery Information</h3>
      <form className="form-card1">
        <div className="form-group">
          <label htmlFor="FirstName"> First Name</label>
          <div>
            <input
              type="text"
              id="firstName"
              name="FirstName"
              placeholder="First Name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="LastName"> Last Name</label>
          <div>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address"> Address</label>
          <div>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="City/Town"> City/Town</label>
          <div>
            <input
              type="text"
              id="cityTown"
              name="cityTown"
              placeholder="City/Town"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber"> Mobile Number </label>
          <div>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Mobile Number"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email Adress</label>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Zip Code"
              className="form-control"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeliveryInfo;
