import React from "react";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

const OrderSummary = () => {
  const { cart } = useCart();

  return (
    <div className="order-wrapper">
      <div className="cart-card">
        <div className="cart-card-header">
          <div className="item-count">
            <h3>Order Summary </h3> 
            <span>{cart.length}</span>
          </div>
          {cart.map((item, i) => (
            <div className="cart-item">
              <div className="cart-item_image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-item_detail" key={i}>
                <div className="card__item1">
                  <p>{item.title}</p>
                  <p>{formatCurrency(item.discount, "USD")}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
