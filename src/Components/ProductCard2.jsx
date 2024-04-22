import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";



const ProductCard2 = (props) => {
  const item = props;

  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = ()=> setOpenModal(true)
  return (
    <div className="card-items">
      <Link to={`/dashboard/advance-training/${item.id}`}>
        <div className="card-img">
          <img src={item.image} alt="" />
        </div>
      </Link>

      <div className="item1">
        <Link to={`/dashboard/advance-training/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <span>
          <span className="p-item">{item.discount}</span>
        </span>
      </div>
      <div className="item2">
        <div className="price">
          <p style={{ textDecoration: "none" }}>
            5k people enrolled <span>{item.price}</span>
          </p>
        </div>
      </div>
      <div className="btn-wrap">
      <button className="btn" onClick={handleOpenModal}> Register</button>
      <Modal  open = {openModal} onClose={()=> setOpenModal(false)}/>
      </div>
    </div>
  );
};

export default ProductCard2;
 