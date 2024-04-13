import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { navLinks } from "../data/menu";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  // const [activeLink, setActiveLink] = useState("");
  const { pathname, hash } = useLocation();

  const closeMenu = () => {
    setNavActive(false);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  return (
    <nav className="navbar">
    <div className="inner-navbar container">
      <div className="navbar-logo">
        <img src={logo} />
      </div>

      <ul className={`navbar--items ${showNav ? "show" : ""}`}>
        {navLinks.map(({ href, name }, i) => {
          const isActive = pathname === href || (hash && hash.includes(href));
          return (
            <li key={i}>
              <Link
                spy='true'
                smooth={true}
                offset={-70}
                duration={500}
                to={href}
                className={`navbar-content ${isActive ? "active" : ""}`}
              onClick={toggleNav}>
                {name}
              </Link>
            </li>
          );
        })}
        <li className="mob-btn">
          <button className="btn"> Sign up</button>
        </li>
      </ul>
      <Link to="/signup">
           
      <div className="nav-btn">
        <button className="btn"> Sign up</button>
      </div>
     </Link>
          

      <div className="menubtn" onClick={toggleNav}>
        {showNav ? "Close" : "Menu"}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className='navbar-container'>

//     <div className='Navlogo'>      <img src={logo}/>
//     </div>

//     <div className='navbar-links'>
//     <Link smooth to  = "/">Home</Link>
//     <Link smooth to  = "/">About</Link>
//     <Link smooth to  = "/">Contact us</Link>

//     </div>

//     <div className='nav-btn'>
//     <button  className='btn'> Sign up</button>
//     </div>

//     </div>
