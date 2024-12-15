/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StdLogin from "./Pages/StdLogin";
import Register from "./Pages/Register";
import StdHome from "./Pages/StdHome";
import AdminHome from "./Pages/AdminHome";
import StdDash from "./Pages/StdDash";
import StdEvents from "./Pages/StdEvents";
import StdLeaderboard from "./Pages/StdLeaderboard";
import Navbar from "./Pages/Navbar";
import Sidebar from "./Pages/Sidebar";
import Landing from "./Pages/Landing";
import AdminLogin from "./Pages/AdminLogin";
import CreateEvent from "./Pages/CreateEventAdmin";

import PendingRequests from "./Pages/PendingRequests";
import EventHistory from "./Pages/EventHistory";
import EventListAdmin from "./Pages/EventListAdmin";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/adminlogin", element: <AdminLogin /> },
  { path: "/stdlogin", element: <StdLogin /> },
  { path: "/register", element: <Register /> },
  { path: "/createevent", element: <CreateEvent /> },

  // Admin routes with Sidebar
  {
    path: "/adminhome",
    element: (
      <>
        <Sidebar />
        <div className="main-content">
          <AdminHome />
        </div>
      </>
    ),
  },
  {
    path: "/eventslist",
    element: (
      <>
        <Sidebar />
        <div className="main-content">
          <EventListAdmin />
        </div>
      </>
    ),
  },
  {
    path: "/pending",
    element: (
      <>
        <Sidebar />
        <div className="main-content">
          <PendingRequests />
        </div>
      </>
    ),
  },
  {
    path: "/eventhistory",
    element: (
      <>
        <Sidebar />
        <div className="main-content">
          <EventHistory />
        </div>
      </>
    ),
  },

  // Student routes with Navbar
  {
    path: "/stdHome",
    element: (
      <>
        <Navbar />
        <StdHome />
      </>
    ),
  },
  {
    path: "/stddash",
    element: (
      <>
        <Navbar />
        <StdDash />
      </>
    ),
  },
  {
    path: "/stdevents",
    element: (
      <>
        <Navbar />
        <StdEvents />
      </>
    ),
  },
  {
    path: "/stdleaderboard",
    element: (
      <>
        <Navbar />
        <StdLeaderboard />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
