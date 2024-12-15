/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "./StdLogin.css";
import { FaUser, FaLock } from "react-icons/fa";

const StdLogin = () => {
  const [srn, setSRN] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    //! SRN VALIDATION
    if (!srn) {
      validationErrors.srn = "SRN is required";
    } else if (!/^\d+$/.test(srn)) {
      validationErrors.srn = "SRN should contain numbers only";
    }

    //! PASSWORD VALIDATION
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    //! CHECK ERRORS
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      //! API CALL CODE
      console.log("Form submitted:", { srn, password });

      // Simulate a successful login and redirect to StdHome
      // Replace this with actual API call response handling
      const isLoginSuccessful = true; // Example condition
      if (isLoginSuccessful) {
        navigate("/StdHome"); // Redirect to StdHome page
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
                type="text"
                placeholder="Enter SRN"
                value={srn}
                onChange={(e) => setSRN(e.target.value)}
              />
              <FaUser className="icon" />
              {errors.srn && <p className="error">{errors.srn}</p>}
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="icon" />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="button-container">
              <button type="submit">Login</button>
            </div>
            <div className="register-link">
              <p>
                First time volunteer?{" "}
                <NavLink to="/register">Register!</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StdLogin;
