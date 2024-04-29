import React from "react";
import "../styles/modal2.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal2 = ({ open, onclose}) => {
  if (!open) return null;
  return (
    <div className="modal2-container">
      <div className="overlay">
        <div className="modal-card">
        <button className="closeBtn" onClick={onclose}>
        <FontAwesomeIcon icon={faTimes}/>
        </button>
        <div className="modalcard-text">
        <h6>Product Added Succesfully</h6>
        <Link to="/dashboard/showcase-sales">
          <button className="btn"> Back to home </button>
        </Link>

        </div>
          <div className="modal2-right">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal2;
