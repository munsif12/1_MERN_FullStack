import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./About.css";
function About() {
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
