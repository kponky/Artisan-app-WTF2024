import React, { useState } from "react";
import ContactForm from "../components/ContactForm";
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

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-header" id="contact">
        <h2>Contact Us</h2>
        <p>
          We are here for your questions, inquiries, feedback, and concerns.
          With 24/7 support, you can count on us to respond quickly to your
          needs.
        </p>
      </div>
      <section className="contact-section">
        <div className="contact-card">
          {/* contact form */}

          <ContactForm />
          <div className="contact-address">
            <h6>Contact Information</h6>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faPhone} className="footer-icon" />
              <p>123-456-7890</p>
            </div>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
              <p>info@example.com</p>
            </div>
            <div className="contact-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} 
               />
              <p>1234 Street Name </p>
            </div>

            <div className="contact-socials">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>

            <div className="googlemap-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d75565.64854887218!2d3.374598680792096!3d6.451316295032063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1712758154238!5m2!1sen!2sng"
                width={"100%"}
                height={240}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
