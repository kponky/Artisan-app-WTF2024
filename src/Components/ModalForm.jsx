import { faTimes, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const ModalForm = () => {
  const [showModal, setShowModal] = useState (true)

  const closeModal = () =>{
    setShowModal(false)
  }
  
  return (
    <>
    {showModal && (
      <div className="modalform-container">
      <div className="modal-close_icon">
      <button onClick={closeModal}> <FontAwesomeIcon icon={faTimes} className="icon"/></button>
   </div>
        <div className="modal-text"> 
          <h6>Register for Course Title</h6>
          <p>Explanation text here</p>
          </div>
          <div className="form-input">
            <form className="form-card">
              <div className="form-group">
                <label htmlFor="text">Enter Full Name</label>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Evelyn"
               
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Enter Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Evelynnmett@gmail.com"
                  required
                />
              </div>
  
              <div className="toggle-card">
              <div className="togle-btn">
              <FontAwesomeIcon icon={faToggleOn} className="icon" />
              <p>Use my ArtCorner details to register</p>
              </div>
  
              <div className="toggle-btn2">
              <button className="btn"> Register  </button>
              </div>
  
  
  
  
              </div>
            
            </form>
          </div>
       
      </div>
    )}
    </>
  );
};

export default ModalForm;
