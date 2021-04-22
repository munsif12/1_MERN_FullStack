import React from "react";
import "./ErrorPage.css";
import SvgErrorPage from "./SvgErrorPage";
import { useHistory } from "react-router-dom";
function ErrorPage() {
  const history = useHistory();
  return (
    <div className="errorPage">
      <div className="svgContainer">
        <SvgErrorPage />
      </div>
      <button
        className="errorPageBtn"
        onClick={() => {
          history.push("/");
        }}
      >
        Home Page
      </button>
    </div>
  );
}
export default ErrorPage;
