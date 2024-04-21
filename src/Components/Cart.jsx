import React from "react";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import "../styles/cart.css";

const Cart = () => {
  const { cart, total, clearCart } = useCart();

  return (
    <div className="cart">
      <div className="cart-overlay">
        <div className="cart-card">
          <div className="cart-card-header">
            <div>
              <h3>My Cart</h3> <span>{cart.length}</span>
            </div>
            <button>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <div className="cart-items">
            {cart.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
