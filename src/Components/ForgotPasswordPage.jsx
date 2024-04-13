import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import '../styles/forgotpassword.css';
import amico from "../assets/amico.png"

const ForgotPasswordPage = () => {
  return (
    <div className="forgotpassword-wrapper container">
      <div className="forgotpassword-text">
        <img src={logo} className="forgot-logo" />
        <h6>Forgot Password</h6>
        <p>
          Enter your email address and we will send a link to reset your
          password
        </p>
        <form>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter E-mail"
              className="form-control"
              required
            />
          </div>
          
          <button type="submit" className="btn form-btn">
            Submit
          </button>

          <p className="back-to-login"> <Link  smooth  to = "/login"> Back to Login</Link> </p>
        </form>
      </div>

      <div className="forgotpassword-img">
      <img src= {amico}/> 
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
