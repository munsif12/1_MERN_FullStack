import React from "react";

function Login() {
  return (
    <div className="login">
      <form action="">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="submit" name="submit" id="submit" />
      </form>
    </div>
  );
}

export default Login;
