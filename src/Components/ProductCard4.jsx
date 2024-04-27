import React from "react";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const ProductCard4 = (props) => {
  const item = props;
  const { addToCart } = useCart();

  return (
    <div className="card-items">
      <Link to={`/dashboard/showcase-sales/${item.id}`}>
        <div className="card-img">
          <img src={item.image} alt="" />
        </div>
      </Link>
      <div className="item1">
        <Link to={`/dashboard/showcase-sales/${item.id}`}>
          <div className="card-title">
            <p>{item.title}</p>
          </div>
        </Link>
        <span>
          <span className="p-item">
            <p> {formatCurrency(item.discount, "NGN")}</p>
          </span>
        </span>
      </div>
      <div className="item2">
        <div className="stars">
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <FontAwesomeIcon icon={faStar} className="icon" />
          <span>(91)</span>
        </div>
        <div className="price">
          <p>
            <p>{formatCurrency(item.price, "NGN")}</p>
          </p>
        </div>
      </div>
      <div className="btn-wrap">
        <button className="btn" onClick={() => addToCart(item, item.id)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard4;
