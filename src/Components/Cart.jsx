import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "../styles/cart.css";
import { formatCurrency } from "../utils/helpers";
import CartItem from "./CartItem";

const Cart = ({ setOpenCart }) => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setOpenCart(false);
    navigate("/dashboard/checkout");
  };
  return (
    <div className="cart">
      <div className="cart-overlay">
        <div className="cart-card">
        {cart ?.length < 1 ?(
<div className="cart-empty">
<h3>Cart empty</h3>
</div>
       ) : (

        <>
        
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
  <p>{formatCurrency(total, "NGN")}</p>
</div>
<div className="line"></div>
<div className="cart-checkout">
<button className="btn" onClick={handleCheckout}>
  Checkout
</button>
</div>
</div>
        </>
    )}  
    
  </div>
</div>
</div>
);
};

export default Cart;









































// import React from "react";
// import { useCart } from "../contexts/CartContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes } from "@fortawesome/free-solid-svg-icons";
// import CartItem from "./CartItem";
// import "../styles/cart.css";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Cart = ({ setOpenCart, id }) => {
//   const { cart, total, clearCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     setOpenCart(false);
//     navigate(`/dashboard/checkout`);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-overlay">
//         <div className="cart-card">
//           <div className="cart-card-header">
//             <div className="item-count">
//               <h3>My Cart</h3> <span>{cart.length}</span>
//             </div>
//             <div className="btn-close">
//               <button onClick={() => clearCart()} className="btn">
//                 Clear
//               </button>
//               <button onClick={() => setOpenCart(false)}>
//                 <FontAwesomeIcon icon={faTimes} className="icon" />
//               </button>
//             </div>
//           </div>
//           <div className="cart-items">
//             {cart.length < 1 ? (
//               <div>
//                 <h4>Cart empty</h4>
//               </div>
//             ) : (
//               cart.map((item, i) => <CartItem key={i} item={item} />)
//             )}
//             ;
//           </div>

//           <div className="cart-bottom">
//             <div className="cart-total">
//               <p>Subtotal:</p>
//               <p>${total}.00</p>
//             </div>
//             <div className="line"></div>

//             <div className="cart-checkout">
//               <button className="btn" onClick={handleCheckout}>
//                 Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;
