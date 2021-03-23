import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      {/* logn header */}
      <div className="login__header">
        <h1>Login</h1>
      </div>
      {/* form */}
      <div login__form>
        <form className="form">
          <input type="text" placeholder="Username" className="input__up" />
          <input type="text" placeholder="Password" className="input__up" />
          <input type="submit" value="Login" className="input__loginBtn" />
        </form>
      </div>
      {/* register button */}
      <div className="register__btn">
        <p>
          Need Help? <a href="#">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
