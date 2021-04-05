import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register">
      <form action="">
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
        />
        <input type="text" name="email" id="email" placeholder="Email" />
        <input type="phone" name="phone" id="phone" placeholder="Phone" />
        <input type="text" name="work" id="work" placeholder="Work" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="text"
          name="cPassword"
          id="cPassword"
          placeholder="Confirm Password"
        />
        <input type="submit" value="Submit" name="submit" id="submit" />
      </form>
    </div>
  );
}

export default Register;
