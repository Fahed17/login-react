import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import user_email from "../Assets/email.png";
import user_password from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={user_email} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={user_password} alt="" />
          <input type="password" placeholder="password" />
        </div>
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_password} alt="" />
            <input type="password" placeholder="confirm password" />
          </div>
        )}
      </div>
      {action === "Login" && (
        <div className="forgot-password">
          forget password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
