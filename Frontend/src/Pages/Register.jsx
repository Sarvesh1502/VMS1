/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [branch, setBranch] = useState("");
  const [srn, setSrn] = useState("");
  const [year, setYear] = useState("");
  const [semester, setSemester] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  // Validation function
  const validateInputs = () => {
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(username)) {
      validationErrors.username = "Name must contain only letters and spaces";
    }

    if (!branch) {
      validationErrors.branch = "Branch is required";
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(branch)) {
      validationErrors.branch = "Branch must contain only letters and spaces";
    }

    if (!srn) {
      validationErrors.srn = "SRN is required";
    } else if (!/^\d+$/.test(srn)) {
      validationErrors.srn = "SRN should be a number";
    }

    if (!year) {
      validationErrors.year = "Year is required";
    } else if (!/^\d+$/.test(year)) {
      validationErrors.year = "Year should be a number";
    }

    if (!semester) {
      validationErrors.semester = "Semester is required";
    } else if (!/^\d+$/.test(semester)) {
      validationErrors.semester = "Semester should be a number";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
    }

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/Register", {
        username,
        branch,
        srn,
        year,
        semester,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
        setTimeout(() => {
          navigate("/stdlogin"); // Redirect to login page
        }, 2000);

        // Clear form after success
        setUsername("");
        setBranch("");
        setSrn("");
        setYear("");
        setSemester("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Signup error:", error);
      setErrors({ api: error.response?.data?.message || "Signup failed" });
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            {successMessage && <p className="success">{successMessage}</p>}
            {errors.api && <p className="error">{errors.api}</p>}

            <div className="input-box">
              <input
                placeholder="Enter Full Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>

            <div className="input-box">
              <input
                placeholder="Enter Branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
              />
              {errors.branch && <p className="error">{errors.branch}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter SRN"
                value={srn}
                onChange={(e) => setSrn(e.target.value)}
                required
              />
              {errors.srn && <p className="error">{errors.srn}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
              />
              {errors.year && <p className="error">{errors.year}</p>}
            </div>

            <div className="input-box">
              <input
                type="number"
                placeholder="Enter Semester"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                required
              />
              {errors.semester && <p className="error">{errors.semester}</p>}
            </div>

            <div className="input-box">
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>

            <div className="button-container">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

