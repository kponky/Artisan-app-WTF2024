import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/form.css";
import logo from "../assets/Logo.png";
import groupVector from "../assets/Group.png";
import googleIcon from '../assets/Google.png'
import outlookIcon from  '../assets/Outlook.png'
import { Link } from "react-router-dom";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    agreeToPrivacyPolicy: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="signupform-wrapper ">
      <div className="signup-form-container container">
        <img src={logo} alt="Logo" className="form-logo" />
        <div className="form-text">
          <h6>Hi, Welcome to ArtCorner!</h6>
          <p>Create an account and start enjoying ArtCorner</p>
        </div>
        <form onSubmit={handleSubmit} className="form-card">
          <div className="form-group">
            <label htmlFor="fullName">Enter Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Evelyn Matt"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullName">Enter Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Evelyn Matt"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"

              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Email">Enter Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Evelynnmett@gmail.com"
              value={formData.username}
              onChange={handleChange}
              className="form-control"

              required
            />
          </div>
          <div className="form-group password">
            <label htmlFor="password">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="atleast8characters"
              value={formData.password}
              onChange={handleChange}
              className="form-control password-card"

              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              onClick={togglePasswordVisibility}
              className="icon"
            />
          </div>
          <div className="form-group password" >
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="atleast8characters"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control password-card"
              required
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              onClick={toggleConfirmPasswordVisibility}
              className="icon"
            />
          </div>

          <div className="checkbox-card">
            <label>
              <input
                type="checkbox"
                id="agreeToPrivacy"
                name="agreeToPrivacy"
                className="checked"
                // checked={formData.agreeToPrivacyPolicy}
                // onChange={handleChange}
                required
              />
             </label>
             <span>
             By continuing, you acknowledge that you have read, understood
             and consent to the Privacy Policy of Artcorner
           </span>
          </div>

          <button type="submit" className="btn form-btn">Sign Up</button>    
        </form>

        <div className="form-acc">
        <p>Already have an account <Link smooth to = "/login">Sign in </Link> </p>

        <span> <div></div>or Continue with <div></div></span> 
        </div>

        <div className="google-outlook-btn">
        
        <button type="button" className="btn form-btn googlebtn"> <img src= {googleIcon} className="g-btn-img" /> Google</button>
        <button type="button" className="btn form-btn outlookbtn"> <img src= {outlookIcon} className="o-btn-img" /> Outlook</button>
        </div>

      </div>
      <div className="vectorSection">
        <img src={groupVector} alt="Illustration" />
      </div>
    </div>
  );
};

export default SignupForm;
