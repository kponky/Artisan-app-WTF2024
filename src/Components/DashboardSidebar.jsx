// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavMenu } from "../data/sidebarNavlist";
import "../styles/dashboard-sidebar.css";
import logo from "../assets/Logo.png";
import { auth } from "../firebase";

const DashboardSidebar = () => {
  const { pathname, hash } = useLocation();

  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className="dashboard-sidebar">
      <div className="side-top">
        <div className="sidebar-logo">
        <Link to= '/'>  
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

        <h5 style={{ marginTop: "2rem" }}>OTHER</h5>
        <ul>
          <li>
            <Link to="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <button onClick={() => handleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
