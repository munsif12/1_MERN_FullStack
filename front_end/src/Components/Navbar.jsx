import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="##">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="##">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">
                Contect
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="##">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="##">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
