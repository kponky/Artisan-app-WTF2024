import React from "react";
import "../styles/footer.css";
import whiteLogo from "../assets/whiteLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="footer-wrapper " id="footer">
    <div className="footer-card container">
        <div className="footer-col">
          <img src={whiteLogo}  className="footer-logo"/>
          <ul className="footer-items">
            <li>20th Pagham Avenue</li>
            <li>Tinmersale</li>
            <li>Nottingham NG72RD</li>
            <li>united Kingdom</li>
          </ul>

          <div className="footer-socials">
          <FontAwesomeIcon icon={faFacebook}   className="icon"/>
          <FontAwesomeIcon icon={faInstagram}  className="icon"/>
          <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
          <FontAwesomeIcon icon={faTwitter}  className="icon"/>
        </div>
          </div>

       

       
          <div className="footer-col ">
          <h6>Contact Us</h6>
          <div className="footer-contactus">
         
          <div>
            <FontAwesomeIcon icon={faPhone} className="footer-icon" />
            <p>123-456-7890</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
            <p>info@example.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
            <p>1234 Street Name </p>
          </div> 
          </div>
          </div>
      
          <div className="footer-col">
            <h6>Our Services</h6>
            <ul className="footer-links">
              <li>
                
                <Link smooth to="#">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="#aboutus">
                  About
                </Link>
              </li>
              {/*<li>  <Link  smooth to = '#testimonial'></Link> </li>  */}
              {/*<li>  <Link  smooth to = '#community'></Link> </li>*/}
              <li>
                <Link smooth to="#offer">
                  What We Offer
                </Link>
              </li>
              <li>
              
                <Link smooth to="#footer">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
     
          </div>

      <div className="footer-bar">
        <p>
          &copy; 2024 ArtCorner. All rights reserved. Designed by Abasz </p>
      </div>
    </div>
  );
};

export default Footer;
