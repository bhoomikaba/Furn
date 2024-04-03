import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Component_CSS/Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons.js";
import n__logo from './image/n__logo.png';
//import Sofa from '../src/Shop/Sofa.js';



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img className="logo" src= {n__logo} />
          </NavLink>

          <div>
          <ul className= {click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
      <div className="dropdown">
        <NavLink
          exact
          to="/Product"
          activeClassName="active"
          className="nav-links"
          onClick={handleClick}
        >
          Shop
        </NavLink>
        <div className="dropdown-content">
          
          <NavLink exact to="/Lamp" onClick={handleClick}>LAMP</NavLink>
          <NavLink exact to="/Sofa"  onClick={handleClick}>SOFA</NavLink>
          <NavLink exact to="/Table"  onClick={handleClick}>TABLE</NavLink>
          <NavLink exact to="/Bed"  onClick={handleClick}>BED</NavLink>
          <NavLink exact to="/Chair"  onClick={handleClick}>CHAIR</NavLink>
          
        </div>
      </div>
    </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact
              </NavLink>
            </li>

            
          </ul>
          </div>

          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;