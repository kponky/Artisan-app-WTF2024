import React, { useState } from "react";
import "../../styles/addproduct.css";
import ProductInformation from "../../Components/ProductInformation";
import ProductPicture from "../../Components/ProductPicture";
import AddProductModal from "../../Components/AddProductModal";


const AddProduct = () => {

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true)

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
        <button className="btn">Cancel</button>
        <button className="btn" onClick={handleOpenModal}>Add Product</button>
        <AddProductModal open = {openModal} onClose= {() => setOpenModal(false)}/>
      </div>


    </div>
  );
};

export default AddProduct;

// <AddProductModal open = {openModal} onClose= {() => setOpenModal(false)}/>
