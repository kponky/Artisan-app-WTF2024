import {
  faComment,
  faMessage,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCart } from "../../contexts/CartContext";
import { useParams, Link } from "react-router-dom";
import { showdata } from "../../data/showcaseData";
import "../../styles/showcase.css";

const ShowcaseSinglePage = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const item = showdata.find((data) => data.id === id);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // const handleDecrement = () ={
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1)
  //   }

  return (
    <div className="single-showcasing">
      {/*breadcrumb*/}

      <nav className="breadcrumbs">
        <ol>
          <li>
            <Link to="/dashboard/showcase-sales">ShowCasing and Sales /</Link>
          </li>
          <li>{item.title}</li>
        </ol>
      </nav>

      <div className="single-showcasing_inner">
        <div className="grid-discount">
          <div className="grid-left">
            <div className="img-wrapper">
              <img src={item.image} alt={item.title} />
            </div>
          </div>

          <div className="grid-right">
            <h3 className="title">{item.title}</h3>
            <p className="desc">
              {" "}
              A Masterpiece crafted with love and traditon
            </p>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <span>(121)</span>
            </div>

            <div className="pricing">
              <h6>{formatCurrency(item.discount, "NGN")}</h6>

              <span>{formatCurrency(item.price, "NGN")}</span>
            </div>

            <div className="grid-bottom">
              <div className="line"></div>
              <div className="txt1">
                <p> Explore the sophiisticated artistry behind this creation</p>
              </div>

              <div className="designby-card">
                <div className="designImg-card">
                  <div className="design-Img">
                    <img
                      src={item.vendorImage}
                      alt=""
                      className="vendor-image"
                    />
                  </div>

                  <div className="desgin-text__icon">
                    <div className="design-text">
                      <span>Made and sold by</span>
                      <h6>{item.designer}</h6>
                    </div>
                  </div>
                </div>

                <div className="design-comment">
                  <FontAwesomeIcon icon={faMessage} className="icon" />
                </div>
              </div>

              <div className="colors">
                <p>Color</p>
                <div className="color">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="description">
                <p>Description</p>
                <span>{item.description}</span>
              </div>

              <div className="quantity-wrapper">
                <div className="quantity-card">
                  <h5>Quantity</h5>

                  <div className="quantity-btns">
                    <button onClick={handleDecrement}>
                      <FontAwesomeIcon icon={faMinus} className="icon" />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={handleIncrement}>
                      <FontAwesomeIcon icon={faPlus} className="icon" />
                    </button>
                  </div>
                  <div>
                    <span>
                      Only <strong>12 items</strong> left! <br />
                      Don't miss it
                    </span>
                  </div>
                </div>

                <div className="item-revw">
                  <h6>Reviews</h6>
                  <p>12phots .22coments</p>
                  <div className="flex-img">
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="revv-img over">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="overlay1">
                      <p> +9</p>
                    </div>
                  </div>
                </div>

                <div className="comments-wrapper">
                  <div className="comments-img">
                    <img
                      src={item.vendorImage}
                      alt=""
                      className="vendor-image"
                    />
                  </div>

                  <div className="commets-card">
                    <h6>Liela sheriff</h6>
                    <div className="stars">
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <FontAwesomeIcon icon={faStar} className="icon" />
                      <span> 6hours ago</span>
                    </div>
                    <div className="comm">
                      <p>
                        Absolutely stunning and very handy. The material is one
                        of the finest piece ever. Highly recommended{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="buttons">
              <Link to="/dashboard/checkout">
                <button className="btn">Buy Now</button>
              </Link>
              <button
                className="btn addtocart"
                onClick={() => addToCart(item, item.id)}>
                Add to Cart
              </button>

              <Link to="/dashboard/AddProduct">
                <button className="btn">Add Product</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSinglePage;
