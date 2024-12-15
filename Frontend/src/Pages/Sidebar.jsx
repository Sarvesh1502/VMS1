/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <NavLink to="/adminhome" activeClassName="active">Dashboard</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/eventslist" activeClassName="active">Events List</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/pending" activeClassName="active">Pending Requests</NavLink>
        </li>
        <li className="menu-item">
          <NavLink to="/eventhistory" activeClassName="active">Event History</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
