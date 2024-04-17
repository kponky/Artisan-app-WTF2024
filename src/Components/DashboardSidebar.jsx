// import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideNavMenu } from "../data/sidebarNavlist";
import "../styles/dashboard-sidebar.css";
import logo from '../assets/Logo.png'

const DashboardSidebar = () => {
  const {pathname, hash} = useLocation();
  return (
    <div className="dashboard-sidebar">
      <div className="side-top">
      <img src={logo} alt="artisan logo" className="sidebar-logo"/>
      </div>
      <h5>MENU</h5>
      <ul>
        {sideNavMenu.map(({ label, to }, i) => {
          const isActive = pathname === to || (hash && hash.includes(to));
          return (
            <li key={i}>
              <Link to={to} className= {`sidebar-items ${isActive ? 'active' : ""}`}>{label}</Link>
            </li>
          );
        })}
      </ul>

      <h5>OTHER</h5>
      <ul>
        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
