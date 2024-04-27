import React from "react";
import ProductCard from "../../../Components/ProductCard";
import { discountData } from "../../../data/discountedData";
import "/src/styles/discountedMat.css";

const DiscountedMat = () => {
  return (
    <div className="disc-container">
      <div className="disc-heading">
        <h6>Discounted Materials</h6>
        <p>
          Artisan&apos;s Corner: Exclusive Discounts on Handcrafted Treasures!
        </p>
      </div>

      <div className="discounted-card">
        {discountData.map((item, i) => (
          <ProductCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiscountedMat;
