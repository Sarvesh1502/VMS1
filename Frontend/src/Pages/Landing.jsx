import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome</h1>
        <p className="landing-subtitle">
          Join us in organizing and participating in events. Select your role to continue:
        </p>
        <div className="landing-buttons">
          <NavLink to="/stdlogin" className="landing-btn student-btn">
            Login as Student
          </NavLink>
          <NavLink to="/adminlogin" className="landing-btn admin-btn">
            Login as Admin
          </NavLink>
        </div>
      </div>
      <footer className="landing-footer">
        © 2024 Volunteer Management System | All Rights Reserved
      </footer>
    </div>
  );
};

export default Landing;
