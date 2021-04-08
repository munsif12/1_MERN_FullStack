import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand navbar_logo" to="##">
          MUNSIF
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <NavLink
                exact
                className="nav-link common"
                to="/"
                activeClassName="activeClass"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link common"
                to="/about"
                activeClassName="activeClass"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link common"
                to="/contect"
                activeClassName="activeClass"
              >
                Contect
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link common"
                to="/login"
                activeClassName="activeClass"
                // className="common"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link common"
                to="/register"
                activeClassName="activeClass"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
