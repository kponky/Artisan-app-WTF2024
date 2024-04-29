import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/dashboard-header.css";
import {
  faBars,
  faCartShopping,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import passport from "../assets/passport.jpg";
import { useCart } from "../contexts/CartContext";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const DashboardHeader = ({ openCart, setOpenCart, setShowSidebar }) => {
  const { cart } = useCart();
  const { userLoggedIn, currentUser } = useContext(AuthContext);

  return (
    <div className="dashboard-header">
      <div className="dashboard-header-inner">
        <button className="collapse-btn" onClick={() => setShowSidebar(true)}>
          <FontAwesomeIcon icon={faBars} size="2x" className="icon" />
        </button>
        <div className="search-input">
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </div>
          <input type="text" placeholder="Search something here" />
        </div>

        <div className="header-right">
          <button
            onClick={() => setOpenCart(!openCart)}
            className={`${openCart && "activ-btn"}`}
          >
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </button>
          <button>
            <FontAwesomeIcon icon={faMessage} className="icon" />
            <span className="badge">4</span>
          </button>
          {userLoggedIn && currentUser ? (
            <div className="user-btn">
              <div className="user-img">
                <img src={currentUser.photoUrl || passport} alt="" />
              </div>
              <div className="user-info">
                <span className="u-info-name">
                  {currentUser.displayName || "JOhn Doe"}
                </span>
                <span className="u-info-email">
                  {currentUser.email || "johndoe@gmailcom"}
                </span>
              </div>
            </div>
          ) : (
            <div className="user-btn">
              <div className="user-img">
                <img src={passport} alt="passport" />
              </div>

              <div className="user-info">
                <span className="u-info-name"> John Doe </span>
                <span className="u-info-email">Johndoe@gmail.com</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
