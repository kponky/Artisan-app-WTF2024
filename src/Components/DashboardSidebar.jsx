import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavMenu } from "../data/sidebarNavlist";
import "../styles/dashboard-sidebar.css";
import logo from "../assets/Logo.png";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSearch,
  faSignOutAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { set } from "firebase/database";

const DashboardSidebar = ({ setShowSidebar, setOpenCart }) => {
  const { pathname, hash } = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };

  const handleMenuClose = () => {
    setShowSidebar(false);
  };
  return (
    <div className="dashboard-sidebar">
      <div className="side-top">
        <div className="sidebar-logo">
          <Link to="/">
            <img src={logo} alt="artisan logo" />
          </Link>
        </div>

        <button className="close-menu-btn" onClick={() => handleMenuClose()}>
          <FontAwesomeIcon icon={faTimes} size="2x"  className="icon"/>
        </button>
      </div>

      {/* search bar on mobile */}

      <div className="search-input">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} className="icon" />
        </div>
        <input type="text" placeholder="Search something here" />
      </div>

      <div className="side-bottom">
        <h5>MENU</h5>
        <ul>
          {sideNavMenu.map(({ label, to }, i) => {
            const isActive = pathname === to || (hash && hash.includes(to));
            return (
              <li
                key={i}
                onClick={() => {
                  setShowSidebar(false);
                  setOpenCart(false);
                }}
              >
                <Link
                  to={to}
                  className={`sidebar-items ${isActive ? "active" : ""}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="side-other">
          <h5 style={{ marginTop: "2rem" }}>OTHER</h5>
          <ul>
            <li>
              <Link to="/dashboard/settings">
                <FontAwesomeIcon icon={faCog} className="icon" />
                Settings
              </Link>
            </li>
            <li>
              <div className="signout-logout">
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                <button onClick={() => handleLogout()}>Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
