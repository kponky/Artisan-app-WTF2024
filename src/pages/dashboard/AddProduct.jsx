import React, { useState } from "react";
import "../../styles/addproduct.css";
import ProductInformation from "../../Components/ProductInformation";
import ProductPicture from "../../Components/ProductPicture";
import AddProductModal from "../../Components/AddProductModal";


const AddProduct = () => {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () =>{
    setOpenModal(true);
  }

  const handleCloseModal = () =>{
    setOPenModal(false)
  }
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
<<<<<<< HEAD
        <button className="btn" onClick={handleOpenModal}>Add Product</button>
=======
        <button className="btn">Add Product</button>
>>>>>>> db9c80ede3df7cff780b3e8e9f04011c0b25ee31
      </div>


    </div>
  );
};

export default AddProduct;

// <AddProductModal open = {openModal} onClose= {() => setOpenModal(false)}/>
