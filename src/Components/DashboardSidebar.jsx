// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavMenu } from "../data/sidebarNavlist";
import "../styles/dashboard-sidebar.css";
import logo from "../assets/Logo.png";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

const DashboardSidebar = () => {
  const { pathname, hash } = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className="dashboard-sidebar">
      <div className="side-top">
        <div className="sidebar-logo">
          <Link to="/">
            <img src={logo} alt="artisan logo" />
          </Link>
        </div>
      </div>
      <div className="side-bottom">
        <h5>MENU</h5>
        <ul>
          {sideNavMenu.map(({ label, to }, i) => {
            const isActive = pathname === to || (hash && hash.includes(to));
            return (
              <li key={i}>
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
                <button onClick={() => handleLogout}>Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
