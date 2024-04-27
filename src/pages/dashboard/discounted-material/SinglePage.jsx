import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { discountData } from "../../../data/discountedData";
import "./discounted.css";
import { useCart } from "../../../contexts/CartContext";
import { formatCurrency } from "../../../utils/helpers";

const SinglePageDiscount = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const item = discountData.find((data) => data.id === id);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="single-discounted">
      {/* breadcrumb */}
      <nav className="breadcrumbs">
        <ol>
          <li>
            <Link to="/dashboard/discounted-materials">
              Discounted Materials /
            </Link>
          </li>
          <li>{item.title}</li>
        </ol>
      </nav>

      <div className="single-discounted_inner">
        <div className="grid-discount">
          <div className="grid-left">
            <div className="img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
          <div className="grid-right">
            <h3 className="title">{item.title}</h3>
            <p className="desc">{item.description}</p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span>(121)</span>
            </div>
            <div className="pricing">
              <h6>{formatCurrency(item.discount, "NGN")}</h6>
              <span> {formatCurrency(item.price, "NGN")}</span>
            </div>
            <div className="quantity-wrapper">
              <h5>Quantity</h5>
              <div className="quantity">
                <div className="quantity-btns">
                  <button onClick={handleDecrement}>
                    <FontAwesomeIcon icon={faMinus} className="icon" />
                  </button>
                  <span>{quantity}</span>
                  <button onClick={handleIncrement}>
                    <FontAwesomeIcon icon={faPlus} className="icon" />
                  </button>
                </div>

               
              </div>
            </div>
            <div className="or">
              <div></div>
              Or
              <div></div>
            </div>
            {/* selection card */}
            <div className="radio-select">
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div className="radio-select-text">
                <p>Make Bulk Purchase</p>
                <span>
                  But larger qunatities of this item at a discounted rate
                </span>
              </div>
            </div>
            <div className="radio-select">
              <div>
                <input type="radio" name="" id="" />
              </div>
              <div className="radio-select-text">
                <p>Make Peer Purchase</p>
                <span>Collectively place an order with multiple artisans</span>
              </div>
            </div>

            <div className="buttons">
              <Link to="/dashboard/checkout">
                <button className="btn">Buy Now</button>
              </Link>
              <button className="btn" onClick={() => addToCart(item, item.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageDiscount;
