import React from "react";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="errorPage">
      <h1>404 Page Not found</h1>
      <NavLink to="/">HOME</NavLink>
    </div>
  );
}

export default ErrorPage;
