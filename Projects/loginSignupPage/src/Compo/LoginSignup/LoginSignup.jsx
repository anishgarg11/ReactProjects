import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/user.jpeg";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";


const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up"); // Changing the states from Login to signup and reverse
  const [name, setName] = useState(""); //
  const [email, setEmail] = useState(""); //
  const [password, setPassword] = useState(""); //
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value.replace(/\s\s+/g, " "));
    console.log(e.target.value)
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (specialCharacterRegex.test(newPassword)) {
      setError("Password cannot contain special characters.");
    } else {
      setError("");
      setPassword(newPassword);
    }
  };

  const handleSubmit = async () => {
    if (action === "Sign Up") {
      // Perform sign-up logic here
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
      });
      console.log(response);
    } else {
      // Perform login logic here
      alert("Login successful!");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img className="user" src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        )}
        <div className="input">
          <img className="email" src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
            title="Please enter a valid email address."
          />
        </div>

        <div className="input">
          <img className="password" src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            pattern="^[a-zA-Z0-9]*$"
            title="Password should not contain commas or special characters."
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            if (action === "Sign Up") {
              handleSubmit();
            } else {
              setAction("Sign Up");
            }
          }}
        >
          {action === "Sign Up" ? "Sign Up" : "Sign Up"}
        </div>
        <div
          className="submit"
          onClick={() => {
            if (action === "Login") {
              handleSubmit();
            } else {
              setAction("Login");
            }
          }}
        >
          {action === "Login" ? "Login" : "Login"}
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
