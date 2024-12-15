import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // The main App component
//import "./index.css"; // Optional: Global CSS (if you have it)
import { BrowserRouter as Router } from "react-router-dom"; // Import Router for routing in the app

// Render the App component inside the root element in your index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
