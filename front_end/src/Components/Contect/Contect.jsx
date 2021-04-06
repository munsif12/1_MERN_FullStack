import React from "react";

function Contect() {
  return (
    <div className="contect">
      <div className="upper">
        <div className="phoneDetail">
          <p className="phone">Phone: 033531175557</p>
        </div>
        <div className="emailDetail">
          <p className="email">Email :xyz@gmail.com</p>
        </div>
        <div className="addressDetail">
          <p className="address">Address : block xyz XYZ</p>
        </div>
        <div className="getInTouch">
          <p>Get In Touch</p>
          <form action="">
            <input type="text" name="name" id="name" placeholder=" Name. " />
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" Email. "
            />
            <input type="text" name="phone" id="phone" placeholder=" Phone. " />
            <input
              type="text"
              name="userMessage"
              id="userMessage"
              placeholder=" Message. "
            />
            <input type="submit" value="Submit" id="submit" name="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contect;
