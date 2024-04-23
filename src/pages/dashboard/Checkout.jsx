import React from "react";
import OrderSummary from "../../Components/OrderSummary";
import PaymentInfo from "../../Components/PaymentInfo";

const Checkout = () => {
  return (
    <div className="checkout-container" id="checkout">
      <div className="left">
        <div className="left-top">
          <OrderSummary />
          <PaymentInfo/>
        </div>
        <div className="left-bottom">delvery information</div>
      </div>
      <div className="right">
     {  /* <PaymentInfo />*/}
      </div>
    </div>
  );
};

export default Checkout;
