import React from "react";
import "../App.css";
import heropageimg1 from "../assets/Frame 7.png";
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";

const HeroSection = () => {
  return (
    <div className="heroWrapper" id="home">
    <div className="hero-content">
      <div className="heroText">
        <h1>Empowering Artisans</h1>
        <p>
          ArtCorner is more than just a marketplace, it’s your one-stop platform
          for discounted materials, skill enhancement, networking and direct
          sales.
        </p>

        <div className="buttons">
          <Link to="/login">
            <button className="btn signup">
              Sign up
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn login">
              Login
            </button>
          </Link>
        </div>
      </div>

      </div>
      
      <div className="heroImg">
        <img src={heropageimg1} alt="pot moulding" />
      </div>
    </div>
  );
};

export default HeroSection;
