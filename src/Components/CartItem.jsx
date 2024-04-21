import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../contexts/CartContext";

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
        <div>
          <p>{item.title}</p>
          <p>{item.discount}</p>
        </div>
        <div>
          <div className="quantity-btns">
            <button
              onClick={handleDecrement(item.id)}
              disabled={item.quantity < 2}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span>{item.quantity}</span>
            <button onClick={handleIncrement(item.id)}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
