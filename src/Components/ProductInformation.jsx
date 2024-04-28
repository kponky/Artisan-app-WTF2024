import React from "react";
import '../styles/productinfo.css'

const ProductInformation = () => {
  return (
    <div className="product-info-wrapper">
      <h6>Product Information</h6>

      <form className="form-card">
        <div className="form-group">
          <label htmlFor="nameofProduct"> Name of Product</label>
          <div>
            <input
              type="text"
              id="nameofProduct"
              name="nameofProduct"
              placeholder="Name of Product"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="nameofProduct"> Name of Product</label>
          <div>
            <input
              type="text"
              id="nameofProduct"
              name="nameofProduct"
              placeholder="Name of Product"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description"> Description</label>
          <div>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Decription"
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="price-quant">
          <div className="form-group">
            <label htmlFor="price"> Price </label>
            <div>
              <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                className="form-control"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="Quantity"> Quantity </label>
            <div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Quantity"
                className="form-control"
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category"> Category </label>
          <div className="items-category"> 
                    <div className="item-cat"> <p>clothes</p></div>
                    <div className="item-cat"> <p>Ceramics</p> </div>
                    <div className="item-cat"> <p>Pottery</p> </div>
                    <div className="item-cat"> <p>Paintings</p> </div>

          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location"> Location </label>
          <div>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="form-control"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductInformation;
