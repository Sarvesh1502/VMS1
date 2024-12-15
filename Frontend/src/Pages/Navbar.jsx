/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar-container">
      <ul className="navbar">
        <li>
          <NavLink
            to="/stdhome"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            HOME
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stddash"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            DASHBOARD
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stdevents"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            LIVE EVENTS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/stdleaderboard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            LEADERBOARD
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
