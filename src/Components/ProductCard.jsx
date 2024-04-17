import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductCard = (props) => {
  const item = props;
  return (
    <div className="card-items">
      <div className="card-img">
        <img src={item.image} alt="" />
      </div>
      <div className="item1">
        <p>{item.title}</p>
        <span>
          $ <span className="p-item">{item.discount}</span>
        </span>
      </div>
      <div className="item2">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span>(91)</span>
        </div>
        <div className="price">
          <p>
            $ <span>{item.price}</span>
            .00
          </p>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn"> Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
