import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  GoogleAuthProvider,
  OAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/Google.png";
import groupVector from "../assets/Group.png";
import logo from "../assets/Logo.png";
import outlookIcon from "../assets/Outlook.png";
import { auth, db } from "../firebase";
import "../styles/form.css";
import { getDocs, addDoc, collection, where, query } from "firebase/firestore";

const LoginForm = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const dref = collection(db, "auth");

  const provider = {
    google: new GoogleAuthProvider(),
    outlook: new OAuthProvider("microsoft.com"),
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // const res = await signInWithEmailAndPassword(
      //   auth,
      //   input.email,
      //   input.password
      // );
      const emailMatch = query(dref, where("email", "==", input.email));
      const passwordMatch = query(dref, where("password", "==", input.password));
      const emailSnapshot = await getDocs(emailMatch);
      const passwordSnapshot = await getDocs(passwordMatch);
      const emailMatchArray = emailSnapshot.docs.map((doc) => doc.data());
      const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());

      if (emailMatchArray.length > 0 && passwordArray.length > 0) {
        alert("Login successful");
        navigate("/dashboard");
      } else {
        alert("Incorrect email or password");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider.google);
      if (res) {
        alert("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMicrosoftSignIn = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider.outlook);
      if (res) {
        alert("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      alert(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginform-wrapper ">
      <div className="login-form-container container">
        <img src={logo} alt="Logo" className="form-logo" />
        <div className="form-text">
          <h6>Hi, Welcome back!! </h6>
          <p>Login to your account to enjoy</p>
        </div>
        <form onSubmit={handleSubmit} className="form-card">
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

          <div className="checkbox-card">
            <label>
              <input
                type="checkbox"
                id="agreeToPrivacy"
                name="agreeToPrivacy"
                className="checked"
                // checked={formData.agreeToPrivacyPolicy}
                // onChange={handleChange}
              />
              <p> Remember Me</p>
            </label>

            <span>
              <Link to="/forgot-password"> Forgot password</Link>
            </span>
          </div>

          <button type="submit" className="btn form-btn">
            {loading ? "Loading..." : "Sign in"}
          </button>
        </form>

        <div className="form-acc">
          <span>
            <div></div>or Continue with <div></div>
          </span>
        </div>

        <div className="google-outlook-btn">
          <button
            type="button"
            className="btn form-btn googlebtn"
            onClick={handleGoogleSignIn}
          >
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

export default LoginForm;
