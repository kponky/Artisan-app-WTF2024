import React, { useState } from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import '../styles/forgotpassword.css';
import amico from "../assets/amico.png"
import { auth } from "../firebase";


const ForgotPasswordPage = () => {
const [email, setEmail] = useState("");
const [error, setError] = useState(null);
const [message, setMessage] = useState(null);

const handleResetPassword = async () => {
  try{
    await auth.sendPasswordResetEmail(email);
    setMessage('password reset email sent. please check your inbox');
    setError(null);
  }catch (error){
    setError ("Failed to password reset email. please try again")
    setMessage(null);
  }
}

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
              value={email}
              placeholder="Enter E-mail"
              className="form-control"
              onChange={ (e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn form-btn" onClick={handleResetPassword}>
            Reset Password
          </button>
          {error && <div className="error-message">{error}</div>}
          {message && <div className="password-error">{message}</div>}

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
