import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
import { useHistory } from "react-router-dom";
function About() {
  const history = useHistory();
  async function checkIfUserIsAuthenticated() {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 401) {
        history.push("/login");
      } else {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  }
  useEffect(() => {
    checkIfUserIsAuthenticated();
  }, []);
  return (
    <div className="about">
      <div className="aboutDetails">
        <h1>User Details</h1>
        <ul>
          <li>
            <label> Id </label> : <p> 232323232323</p>
          </li>
          <li>
            <label>Name</label> : <p> Munsif</p>
          </li>
          <li>
            <label>Email</label> : <p> xyz@gmail.com</p>
          </li>
          <li>
            <label>Phone</label> : <p> 000001222</p>
          </li>
          <li>
            <label>Profession</label> : <p> MERN STACK DEVELOPER</p>
          </li>
          <li>
            <label>Name</label> : <p> Munsif</p>
          </li>
        </ul>
      </div>
      <div className="timelineDetails">
        <h1>this is timeLine</h1>
      </div>
    </div>
  );
}

export default About;
