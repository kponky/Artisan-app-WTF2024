import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/productpicture.css";
import bag from "../assets/bag.jpg";

const ProductPicture = () => {
  const [file, setFile] = useState();
  const handleChange = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="product-picture__container">
      <h6>Product Picture </h6>

      <div className="img-update">
        <img src={bag} alt="handcrafted bag" className="handbag" />
        <div>
          <div className="edit">
            <p>Edit your photo</p>
          </div>
          <div className="del-update">
            <button>Delete</button> <button>Update</button>{" "}
          </div>
        </div>
      </div>

      <div className="addimage-card">
        <FontAwesomeIcon icon={faImage} className="icon" />
        <input type="file" onChange={handleChange} />
        <img src={file} alt="" className="uploaded-img" />
        <p>Upload your product picture</p>
        <span>Only PNG, JPG format allowed.</span>
        <span>500x500 pixels are recommended</span>
      </div>
    </div>
  );
};

export default ProductPicture;
