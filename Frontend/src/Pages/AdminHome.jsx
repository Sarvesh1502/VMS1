/* eslint-disable no-unused-vars */
import React from 'react';
import './AdminHome.css';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const eventsData = [
  { name: 'Event 1', participants: 200 },
  { name: 'Event 2', participants: 150 },
  { name: 'Event 3', participants: 300 },
  { name: 'Event 4', participants: 100 },
];

const statusData = [
  { name: 'Completed', value: 30 },
  { name: 'Pending', value: 8 },
  { name: 'Cancelled', value: 5 },
];

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

function AdminHome() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Stats />
        <Charts />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <NavLink to ="/createevent" className="create-event-btn">Create Event</NavLink>
    </div>
  );
}

function Stats() {
  return (
    <div className="stats-container">
      <div className="stat-card gradient-1">
        <h3>Events Organized</h3>
        <p>45</p>
      </div>
      <div className="stat-card gradient-2">
        <h3>Pending Requests</h3>
        <p>8</p>
      </div>
      <div className="stat-card gradient-3">
        <h3>Attendees</h3>
        <p>500</p>
      </div>
      <div className="stat-card gradient-4">
        <h3>Events Completed</h3>
        <p>30</p>
      </div>
    </div>
  );
}

function Charts() {
  return (
    <div className="charts-container">
      <div className="chart-card">
        <h3>Event Participants</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={eventsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="participants" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="chart-card">
        <h3>Event Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={statusData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#8884d8" dataKey="value">
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminHome;
