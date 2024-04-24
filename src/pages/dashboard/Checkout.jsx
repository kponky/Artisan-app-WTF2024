import React from "react";
import OrderSummary from "../../Components/OrderSummary";
import PaymentInfo from "../../Components/PaymentInfo";
import "../../styles/checkout.css";
import DeliveryInfo from "../../Components/DeliveryInfo";

const Checkout = () => {
  return (
    <div className="checkout-container" id="checkout">
      <div className="left">
        <div className="left-top">
          <OrderSummary />
        </div>
          <div className="right">
          <PaymentInfo />
        </div>
      </div>
      <div className="left-bottom">
          <DeliveryInfo />
        </div>
    </div>
  );
};

export default Checkout;
