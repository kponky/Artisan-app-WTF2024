import React, { useState, useContext } from "react";
import logo from "../assets/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
import { navLinks } from "../data/menu";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const { userLoggedIn, currentUser } = useContext(AuthContext);

  const closeMenu = () => {
    setShowNav(false); // Change setNavActive to setShowNav
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="inner-navbar container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={`navbar--items ${showNav ? "show" : ""}`}>
          {navLinks.map(({ href, name }, i) => {
            const isActive = pathname === href || (hash && hash.includes(href));
            return (
              <li key={i}>
                <Link
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to={href}
                  className={`navbar-content ${isActive ? "active" : ""}`}
                  onClick={toggleNav}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <li className="mob-btn">
            <button className="btn"> Sign up</button>
          </li>
        </ul>

        {userLoggedIn ? (
          <div className="userlogin-details">
            <p>{currentUser?.displayName}</p>
            <button onClick={handleLogout} className = "btn">Logout</button>
          </div>
        ) : (
          <Link to="/signup">
            <div className="nav-btn">
              <button className="btn"> Sign up</button>
            </div>
          </Link>
        )}
        <div className="menubtn" onClick={toggleNav}>
          <FontAwesomeIcon icon={showNav ? faTimes : faBars}  className = "icon"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

