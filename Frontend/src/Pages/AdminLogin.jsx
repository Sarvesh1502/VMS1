/* eslint-disable no-unused-vars */
import React from "react";
import "./AdminLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const navigate = useNavigate(); // For navigation to AdminHome

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!email) {
      validationErrors.email = "E-mail is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Enter valid E-mail";
    }

    if (!password) {
      validationErrors.password = "Enter Password";
    } else if (password.length < 6) {
      validationErrors.password = "Invalid Password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        // Dummy fetch request for demonstration
        const response = await fetch("http://localhost:5000/AdminLogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log("Login successful:", data);
        } else {
          console.log("Admin not found, redirecting anyway.");
        }
        // Redirect to AdminHome regardless of the login outcome
        navigate("/AdminHome");
      } catch (error) {
        console.error("Error during login:", error);
        // Redirect to AdminHome even if there's an error
        navigate("/AdminHome");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <input
                type="email"
                placeholder="Enter e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <FaUser className="icon" />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <FaLock className="icon" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="button-container">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
