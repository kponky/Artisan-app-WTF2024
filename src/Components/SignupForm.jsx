import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles/form.css";
import logo from "../assets/Logo.png";
import groupVector from "../assets/Group.png";
import googleIcon from "../assets/Google.png";
import outlookIcon from "../assets/Outlook.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { getDocs, addDoc, collection, where, query } from "firebase/firestore";

const SignupForm = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dref = collection(db, "auth");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setInput({
      ...input,
      [name]: newValue,
    });
  };

  const validateEmail = (input) =>
    input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isEmailInvalid = useMemo(() => {
    if (input.email === "") return false;

    return validateEmail(input.email) ? false : true;
  }, [input.email]);

  const validatePassword = (input) => input.length >= 8;

  const isPasswordValid = useMemo(() => {
    if (input.password === "") return false;

    return !validatePassword(input.password);
  }, [input.password]);

  const isPasswordMatch = useMemo(() => {
    if (input.confirmPassword === "") return false;

    return input.password !== input.confirmPassword ? true : false;
  }, [input.confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!input.fullName || !input.email || !input.username || !input.password) {
    //   alert("all fields are required");
    //   return;
    // }

    if (input.password !== input.confirmPassword) {
      alert("passwords do not match");
      return;
    }

    const existingEmail = query(dref, where("email", "==", input.email));
    const existingUsername = query(
      dref,
      where("username", "==", input.username)
    );

    try {
      setLoading(true);
      // const res = await createUserWithEmailAndPassword(
      //   auth,
      //   input.email,
      //   input.password
      // );

      const emailSnapshot = await getDocs(existingEmail);
      const usernameSnapshot = await getDocs(existingUsername);
      const emailMatchArray = emailSnapshot.docs.map((doc) => doc.data());
      const userMatchArray = usernameSnapshot.docs.map((doc) => doc.data());

      if (emailMatchArray.length > 0) {
        alert("Email already exists");
      } else if (userMatchArray.length > 0) {
        alert("username exists");
      } else {
        const res = await addDoc(dref, {
          fullName: input.fullName,
          username: input.username,
          email: input.email,
          password: input.password,
        });

        if (res) {
          alert("Registration successful");
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
            <div style={{ height: "50px", position: "relative" }}>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Evelyn Matt"
                value={input.fullName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="username">Enter Username</label>
            <div style={{ height: "50px", position: "relative" }}>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Evelynna"
                value={input.username}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Email">Enter Email</label>
            <div style={{ height: "50px", position: "relative" }}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Evelynnmett@gmail.com"
                value={input.email}
                onChange={handleChange}
                className={`form-control ${isEmailInvalid && "error"} ${
                  !isEmailInvalid && "success"
                }`}
                required
              />
            </div>
            {isEmailInvalid && (
              <span className="error-msg">
                please enter a valid email address
              </span>
            )}
          </div>
          <div className="form-group password">
            <label htmlFor="password">Password</label>
            <div style={{ height: "50px", position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="atleast8characters"
                value={input.password}
                onChange={handleChange}
                className={`form-control ${isPasswordValid && "error"} ${
                  !isPasswordValid && "success"
                }`}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="icon"
              />
            </div>
            {isPasswordValid && (
              <span className="error-msg">
                passwords should be not less than 8 characters
              </span>
            )}
          </div>
          <div className="form-group password">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div style={{ height: "50px", position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="atleast8characters"
                value={input.confirmPassword}
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
            {isPasswordMatch && (
              <span className="error-msg">passwords do not match </span>
            )}
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
              By continuing, you acknowledge that you have read, understood and
              consent to the Privacy Policy of Artcorner
            </span>
          </div>

          <button type="submit" className="btn form-btn">
            {loading ? "Loading..." : " Sign Up"}
          </button>
        </form>

        <div className="form-acc">
          <p>
            Already have an account{" "}
            <Link smooth to="/login">
              Sign in{" "}
            </Link>{" "}
          </p>

          <span>
            {" "}
            <div></div>or Continue with <div></div>
          </span>
        </div>

        <div className="google-outlook-btn">
          <button type="button" className="btn form-btn googlebtn">
            <img src={googleIcon} className="g-btn-img" /> Google
          </button>
          <button type="button" className="btn form-btn outlookbtn">
            {" "}
            <img src={outlookIcon} className="o-btn-img" /> Outlook
          </button>
        </div>
      </div>
      <div className="vectorSection">
        <img src={groupVector} alt="Illustration" />
      </div>
    </div>
  );
};

export default SignupForm;
