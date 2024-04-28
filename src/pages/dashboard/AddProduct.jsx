import React from "react";
import "../../styles/addproduct.css";
import ProductInformation from "../../Components/ProductInformation";
import ProductPicture from "../../Components/ProductPicture";

const AddProduct = () => {
  return (
    <div className="add-product__container" id="addproduct">
      <div>
        <h6>Add Product</h6>
        <span> Explanations text</span>
      </div>
      <div className="add-product-wrapper">
        <div className="left">
        <ProductInformation/>
        </div>
        <div className="right">
        <ProductPicture/>
      </div>
      </div>
      <div className="buttons">
        <button>Cancel</button>
        <button>Add Product</button>
      </div>
    </div>
  );
};

export default AddProduct;
