import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import logo from "../assets/Logo.png";
import groupVector from "../assets/Group.png";
import googleIcon from '../assets/Google.png'
import outlookIcon from  '../assets/Outlook.png'
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
    <div className="signupFormWrapper">
      <div className="signup-form-container">
        <img src={logo} alt="Logo" />
        <div className="formText">
          <h6>Hi, Welcome to ArtCorner!</h6>
          <p>Create an account and start enjoying ArtCorner</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Enter Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Evelyn Matt"
              value={formData.fullName}
              onChange={handleChange}
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
              required
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              onClick={toggleConfirmPasswordVisibility}
              className="icon"
            />
          </div>

          <div className="form-group checkbox">
            <label>
              <input
                type="checkbox"
                id="agreeToPrivacy"
                name="agreeToPrivacy"
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

          <button type="submit" className="btn formBtn">Sign Up</button>    
        </form>

        <div className="formAcc">
        <p>Already have an account <a href="#">Sign in</a>  </p>

        <span> <div></div>or Continue with <div></div></span> 
        </div>

        <button type="button" className="btn formBtn googlebtn"> <img src= {googleIcon} /> Google</button>
        <button type="button" className="btn formBtn outlookbtn"> <img src= {outlookIcon} /> Outlook</button>



      </div>
      <div className="vectorSection">
        <img src={groupVector} alt="Illustration" />
      </div>
    </div>
  );
};

export default SignupForm;
