import axios from "axios";

// Set the base URL for all API requests
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor (Optional: Add authorization tokens if required)
API.interceptors.request.use(
  (config) => {
    // Example: Attach tokens if needed
    const token = localStorage.getItem("token"); // Adjust token retrieval based on your auth system
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor (Optional: Handle global errors)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error.response || error.message);
    return Promise.reject(error);
  }
);

// API Endpoints

/**
 * Registers a new user
 * @param {Object} data - User registration data
 */
export const registerUser = async (data) => {
  try {
    const response = await API.post("/Register", data);
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
};

/**
 * Logs in a user
 * @param {Object} data - User login data
 */
export const loginUser = async (data) => {
  try {
    const response = await API.post("/Stdlogin", data);
    return response.data; // Return the response data
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

/**
 * Example API call: Get user details
 * @param {String} userId - User ID
 */
export const getUserDetails = async (userId) => {
  try {
    const response = await API.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch user details";
  }
};

export default API;
