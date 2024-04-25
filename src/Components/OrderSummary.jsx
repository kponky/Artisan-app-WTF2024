import React from "react";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

const OrderSummary = () => {
  const { cart } = useCart();

  return (
    <div className="order-wrapper">
  <div className="order-wrapper-header">
    <h3>Order Summary </h3>
    <span>{cart.length}</span>
  </div>
  {cart.map((item, i) => (
    <div key={i} className="cart-item">
      <div className="cart-item_image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-item_detail" key={i}> {/* Closing tag was missing here */}
        <div className="card__item1">
          <p>{item.title}</p>
          <p>{formatCurrency(item.discount, "USD")}</p>
        </div>
      </div>
    </div>
  ))}
  </div>
)}

  export default OrderSummary;

