import React, { useState } from "react";
import "./Register.css";
function Register() {
  const [formFilds, setFormFilds] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cPassword: "",
  });
  function getFormFieldsData(e) {
    e.preventDefault();
    const fieldValue = e.target.value;
    const fieldName = e.target.name;
    setFormFilds({ ...formFilds, [fieldName]: fieldValue });
  }
  return (
    <div className="register">
      <form action="">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Username"
          value={formFilds.name}
          onChange={getFormFieldsData}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={formFilds.email}
          onChange={getFormFieldsData}
        />
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={formFilds.phone}
          onChange={getFormFieldsData}
        />
        <input
          type="text"
          name="work"
          id="work"
          placeholder="Work"
          value={formFilds.work}
          onChange={getFormFieldsData}
        />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          value={formFilds.password}
          onChange={getFormFieldsData}
        />
        <input
          type="text"
          name="cPassword"
          id="cPassword"
          placeholder="Confirm Password"
          value={formFilds.cPassword}
          onChange={getFormFieldsData}
        />
        <input type="submit" value="Submit" name="submit" id="submit" />
      </form>
    </div>
  );
}

export default Register;
