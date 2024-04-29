import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AddProductInfo = () => {
  return (
    <div className="addproduct-wrapper">
      <div className="addproductModal_icon">
        <button>
          {" "}
          <FontAwesomeIcon icon={faTimes} />{" "}
        </button>
      </div>

      <div className="addproduct-txt">
        <h1>Product Added succesfully </h1>
        <Link to = "/dashboard/showcase-sales">
        
        </Link>
        <button className="btn">Return Home</button>
      </div>
    </div>
  );
};

export default AddProductInfo;
