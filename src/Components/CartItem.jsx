import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../contexts/CartContext";
import { formatCurrency } from "../utils/helpers";

const CartItem = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const handleIncrement = (id) => {
    increaseQuantity(id);
  };
  const handleDecrement = (id) => {
    decreaseQuantity(id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item_image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="card-item_detail">
        <div className="card__item1">
          <p>{item.title}</p>
          <p>{formatCurrency(item.discount, "USD")}</p>
        </div>
        <div className="card__item2">
          <div className="quantity-btns">
            <button className="quantity-btn"
              onClick={() => handleDecrement(item.id)}
              disabled={item.quantity < 2}
            >
              <FontAwesomeIcon icon={faMinus} className="icon"/>
            </button>
            <span>{item.quantity}</span>
            <button className="quantity-btn" onClick={() => handleIncrement(item.id)}>
              <FontAwesomeIcon icon={faPlus}  className="icon"/>
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} className="icon"  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
