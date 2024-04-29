import React from "react";
import ModalForm from "../Components/ModalForm";
import "../styles/modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="modal-overlay">
      <div className="overlay">
        <div className="modalContainer"></div>
        <div className="modal-right">
          <p className="close-btn" onClick={onClose}>
            {" "}
            <FontAwesomeIcon icon={faTimes} />{" "}
          </p>
          <ModalForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
