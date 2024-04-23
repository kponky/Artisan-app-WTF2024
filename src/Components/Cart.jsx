import React from "react";
import { useCart } from "../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import CartItem from "./CartItem";
import "../styles/cart.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Cart = ({ setOpenCart, id }) => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate(`/discounted-materials/${id}/checkout`);
  };
  return (
    <div className="cart">
      <div className="cart-overlay">
        <div className="cart-card">
          <div className="cart-card-header">
            <div className="item-count">
              <h3>My Cart</h3> <span>{cart.length}</span>
            </div>
            <div className="btn-close">
              <button onClick={() => clearCart()} className="btn">
                Clear
              </button>
              <button onClick={() => setOpenCart(false)}>
                <FontAwesomeIcon icon={faTimes} className="icon" />
              </button>
            </div>
          </div>
          <div className="cart-items">
            {cart.length < 1 ? (
              <div>
                <h4>Cart empty</h4>
              </div>
            ) : (
              cart.map((item, i) => <CartItem key={i} item={item} />)
            )}
          </div>

          <div className="cart-bottom">
            <div className="cart-total">
              <p>Subtotal:</p>
              <p>${total}.00</p>
            </div>
            <div className="line"></div>
            <Link to= '/checkout'>
                        <div className="cart-checkout">
                <button className="btn" >
                  Checkout
                </button>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
// <Link to=""></Link>;
