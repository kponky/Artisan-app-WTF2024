
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import '../styles/paymentinfo.css'
// import PaymentConfirmation from "./PaymentConfirmation";

const PaymentInfo = () => {
  const [loading, setLoading] = useState(false);
  const { cart } = useCart();

  const handlePayment = () => {};

  return (
    // <PaymentConfirmation />
    <div className="paymentInfo-card">
      <div className="paymentInfo-header">
        <h3>Payment Information</h3>
      </div>
      <div className="line"></div>
      <div className="payment-options">
        <p>Pay With</p>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">
               <p>Debit or Credit Card</p>
          </div>
        </div>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">
            <p>Pay with Crpto</p>{" "}
          </div>
        </div>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">
            <p>Pay on Delivery</p>
          </div>
          </div>
      </div>
      <div className="line"></div>
      <div className="card-info">
        <p>Enter Card Information</p>
        <form action="" className="form-card1">
          <label htmlFor="cardInfo">Cardholder Name</label>
          <div className="form-group">
            <input
              type="text"
              name="cardholderName"
              id="cardholderName"
              placeholder="Alexandra McPherson Grey"
              className="form-control"
              required
            />
          </div>
          <label htmlFor="cardInfo">Card Number</label>
          <div>
            <input
              type="number"
              name="cardNumber"
              id="cardNumber"
              placeholder="5061 2345 6789 1234"
              className="form-control"
              required
            />
          </div>
          <div className="exp-cvv">
            <div className="exp">
              <label htmlFor="expiryDate">Expiry Date </label>
              <div className="f">
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="09/2024"
                  className="form-control"
                />
              </div>
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <div>
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="223"
                  className="form-control"
                  />
                  <FontAwesomeIcon icon={faLock} className="icon" />
                </div>
              </div>
            </div>
          </form>
  
          <div className="line"></div>

          <div className="paymentopt-bottom">
            <div className="payment-section">
              <div className="payment-total">
                <p>SubTotal</p> <span>item.total</span>
              </div>
              <div className="payment-total">
                <p>Tax(10%)</p> <span>$4.50</span>
              </div>
              <div className="payment-total">
                <p>Shipping</p> <span>$0.00</span>
              </div>
            </div>

            <div className="line"></div>

            <div className="total-card">
              <div className="total">
                <p>Total</p><span>item.total</span>
              </div>
            </div>
            <div className="line"></div>
            <div className="info-btn">
            <button className="btn" onClick={() => handlePayment}>
              Pay $49.50
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
  




        
























// import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
// import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import React, { useState } from "react";
// import { useCart } from "../contexts/CartContext";
// // import PaymentConfirmation from "./PaymentConfirmation";

// const PaymentInfo = () => {
//   const [loading, setLoading] = useState(false);
//   const {cart} = useCart();

//   const handlePayment = () => {};
//   return (

//     // <PaymentConfirmation />
//     <div className="paymentInfo-card">
//       <div className="paymentInfo-header">
//         <h3>Payment Information</h3>
//       </div>
//       <div className="payment-options">
//         <p>Pay With</p>
//         <div className="payment-opt">
//           <div className="radio-btn">
//             <input type="radio" name="" id="" />
//           </div>
//           <div className="radio-text"> <p>Debit or Credit Card</p></div>
//         </div>
//         <div className="payment-opt">
//           <div className="radio-btn">
//             <input type="radio" name="" id="" />
//           </div>
//           <div className="radio-text"><p>Pay with Crpto</p> </div>
//         </div>
//         <div className="payment-opt">
//           <div className="radio-btn">
//             <input type="radio" name="" id="" />
//           </div>
//           <div className="radio-text"><p>Pay on Delivery</p></div>
//         </div>
//       </div>

//       <div className="card-info">
//       <p>Enter Card Information</p>
//         <form action="" className="form-card1">
//           <label htmlFor="cardInfo">Cardholder Name</label>
//           <div className="form-group">
//             <input
//               type="text"
//               name="cardholderName"
//               id="cardholderName"
//               placeholder="Alexandra McPherson Grey"
//               className="form-control"
//               required
//             />
//           </div>
//           <label htmlFor="cardInfo">Card Number</label>
//           <div>
//             <input
//               type="number"
//               name="cardNumber"
//               id="cardNumber"
//               placeholder="5061 2345 6789 1234"
//               className="form-control"

//               required
//             />
//           </div>
//           <div className="exp-cvv">
//             <div className="exp">
//               <label htmlFor="expiryDate">Expiry Date </label>
//               <input type="date" name="date" id="date" placeholder="09/2024">
//                 <FontAwesomeIcon icon={faCalendar} 
//                 className="form-control"
//                 />
                
//               </input>
//             </div>

//             <div className="cvv">
//               <label htmlFor="cvv">CVV</label>
//               <input type="number" name="number" id="number" placeholder="223">
//                 <FontAwesomeIcon icon={faLock} 
//                 className="form-control"
//                 />
//               </input>
//             </div>
//           </div>
//         </form>

       
//         <div className="paymentopt-bottom"> 

//           <div className="sub">
//             <div>
//               <p>SubTotal</p> <span>item.total</span>
//             </div>
//             <div>
//               <p>Tax(10%)</p> <span>$4.50</span>
//             </div>
//             <div>
//               <p>Shipping</p> <span>$0.00</span>
//             </div>
//           </div>

//           <div className="total">
//             <div>
//               <p>Total</p> <span>item.total</span>
//             </div>
//           </div>

//           <div className="info-btn">
//             <button className="btn" onClick={() => handlePayment}>
//               Pay $49.50
//             </button>
//           </div>
//         </div>
//       </div>
//       <PaymentInfo/>
//     </div>

//   );
// };

// export default PaymentInfo;
