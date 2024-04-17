import React from 'react'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "/src/styles/discountedMat.css";
import img1 from "/src/assets/art 1.jpg";
import img2 from "/src/assets/art 2.jpg";
import img3 from "/src/assets/art 3.jpg";
import img4 from "/src/assets/art 4.jpg";


const Networking = () => {
  return (
    <div className="disc-container">
    <div className="disc-heading">
      <h6>Networking</h6>
      <p>
        Artisan&apos;s Corner: Exclusive Discounts on Handcrafted Treasures!
      </p>
    </div>

    <div className="discounted-card">
      <div className="card-items">
        <img src={img1} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img2} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn "> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img3} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img4} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img4} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img3} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img1} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />

            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
      <div className="card-items">
        <img src={img2} alt="" className="card-img" />
        <div className="item1">
          <p>Item Name</p>
          <span>
            $ <span>16.</span>50
          </span>
        </div>
        <div className="item2">
          <div className="stars">
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
            <span>(91)</span>
          </div>
          <div className="price">
            <p>
              $ <span>20.</span>00
            </p>
          </div>
        </div>
        <button className="btn"> Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default Networking
