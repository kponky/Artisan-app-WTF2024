import React from "react";
import { Link } from "react-router-dom";

const ProductCard3 = ({ item, pathname }) => {
  return (
    <div className="card-items">
      <Link to={`/dashboard/${pathname}/${item.id}`}>
        <div className="card-img">
          <img src={item.image} alt="" />
        </div>
      </Link>
      <div className="item1">
        <Link to={`/dashboard/${pathname}/${item.id}`}>
          <p>{item.title}</p>
        </Link>
        <span>
          <span className="p-item">{item.discount}</span>
        </span>
      </div>
      <div className="item2">
        <div className="price">
          <p style={{ textDecoration: "none" }}>{item.occupation}</p>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn"> Connect </button>
      </div>
    </div>
  );
};

export default ProductCard3;
