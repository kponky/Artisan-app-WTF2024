import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import PaymentConfirmation from "./PaymentConfirmation";

const PaymentInfo = () => {
  const [loading, setLoading] = useState(false);
  const {cart} = useCart();

  const handlePayment = () => {};
  return (
    <>
    <PaymentConfirmation />
    <div className="paymentInfo-card">
      <div className="paymentInfo-header">
        <h6>Payment Information</h6>
      </div>
      <div className="payment-options">
        <p>Pay With</p>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">Debit or Credit Card</div>
        </div>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">Pay with Crpto</div>
        </div>
        <div className="payment-opt">
          <div className="radio-btn">
            <input type="radio" name="" id="" />
          </div>
          <div className="radio-text">Pay on Delivery</div>
        </div>
      </div>

      <div className="card-info">
        <form action="">
          <label htmlFor="cardInfo">Cardholder Name</label>
          <div>
            <input
              type="text"
              name="cardholderName"
              id="cardholderName"
              placeholder="Alexandra McPherson Grey"
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
              required
            />
          </div>
          <div className="exp-cvv">
            <div className="exp">
              <label htmlFor="expiryDate">Expiry Date </label>
              <input type="date" name="date" id="date" placeholder="09/2024">
                <FontAwesomeIcon icon={faCalendar} />
              </input>
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV</label>
              <input type="number" name="number" id="number" placeholder="223">
                <FontAwesomeIcon icon={faLock} />{" "}
              </input>
            </div>
          </div>
        </form>

       
        <div className="paymentopt-bottom"> 

          <div className="sub">
            <div>
              <p>SubTotal</p> <span>{item.total}</span>
            </div>
            <div>
              <p>Tax(10%)</p> <span>$4.50</span>
            </div>
            <div>
              <p>Shipping</p> <span>$0.00</span>
            </div>
          </div>

          <div className="total">
            <div>
              <p>Total</p> <span>{item.total}</span>
            </div>
          </div>

          <div className="info-btn">
            <button className="btn" onClick={() => handlePayment}>
              Pay $49.50
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PaymentInfo;
