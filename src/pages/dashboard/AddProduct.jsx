import React, { useState } from "react";
import "../../styles/addproduct.css";
import ProductInformation from "../../Components/ProductInformation";
import ProductPicture from "../../Components/ProductPicture";
// import AddProductModal from "../../Components/AddProductModal";
import Modal2 from "../../Components/Modal2";
import '../../styles/modal2.css'

const AddProduct = () => {
const [openModal, setOpenModal] = useState(false);
// const handleOpenModal = () => setOpenModal(true);

  return (
    <div className="add-product__container" id="addproduct">
      <div>
        <h6>Add Product</h6>
        <span> Explanations text</span>
      </div>
      <div className="add-product-wrapper">
        <div className="left">
          <ProductInformation />
        </div>
        <div className="right">
          <ProductPicture />
        </div>
      </div>
      <div className="buttons">
        <button className="btn">Cancel</button>
        <button className="btn" onClick= {() => setOpenModal(true)}>
          Add Product
        </button>
        <Modal2 open={openModal} onclose={()=> setOpenModal(false) }/>
        </div>

    </div>
  );
};

export default AddProduct;

// <AddProductModal open = {openModal} onClose= {() => setOpenModal(false)}/>
