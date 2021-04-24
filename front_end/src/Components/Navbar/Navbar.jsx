import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import { loginLogoutContext } from "../../App";
function Navbar() {
  const { state } = useContext(loginLogoutContext);
  const [globalUserName, setGlobalUserName] = useState("");
  async function setUserDataToForm() {
    const response = await fetch("/contect-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setGlobalUserName(data.userName);
  }
  useEffect(() => {
    setUserDataToForm();
    // === !== != >= <= <> +=
  });

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand navbar_logo" to="##" id="navbar__logo">
          <h2 style={{ margin: "0px" }}>
            {!globalUserName ? "BLM" : `${globalUserName}`}
          </h2>
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
                id="_1"
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
                id="_2"
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
                id="_3"
              >
                Contect
              </NavLink>
            </li>
            {!state ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link common"
                    to="/login"
                    activeClassName="activeClass"
                    id="_4"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link common "
                    to="/register"
                    activeClassName="activeClass"
                    id="_5"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link common"
                    to="/our-users"
                    activeClassName="activeClass"
                  >
                    Registered Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link common"
                    to="/logout"
                    activeClassName="activeClass"
                    id="logout__btn"
                  >
                    Logout
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
