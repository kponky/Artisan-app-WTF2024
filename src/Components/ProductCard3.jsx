import React from "react";

const ProductCard3 = (props) => {
  const item = props;
  return (
    <div className="card-items">
      <div className="card-img">
        <img src={item.image} alt="" />
      </div>
      <div className="item1">
        <p>{item.title}</p>
        <span>
          <span className="p-item">{item.discount}</span>
        </span>
      </div>
      <div className="item2">
        <div className="price">
          <p style={{ textDecoration: "none" }}>
            {item.occupation}</p>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn"> Connect </button>
      </div>
    </div>
  );
};

export default ProductCard3;
