import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const AddProductInfo = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <div className="addproduct-wrapper">
          <div className="addproductModal_icon">
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          <div className="addproduct-txt">
            <h1>Product Added succesfully </h1>
            <Link to="/dashboard/showcase-sales">
              <button className="btn">Return Home</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProductInfo;
