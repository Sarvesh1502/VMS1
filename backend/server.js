const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const http = require('http'); // Add http module to create the server
const socketIo = require('socket.io'); // Add socket.io for real-time functionality
const eventRoutes = require('./routes/eventRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Create HTTP server to use with Socket.IO
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.IO

// Middleware to parse incoming JSON requests
app.use(express.json());

// API Routes
app.use('/api/events', eventRoutes); // Routes for managing events
app.use('/api/students', studentRoutes); // Routes for student-related operations
app.use('/api/admins', adminRoutes); // Routes for admin-related operations

// MongoDB Connection
const dbConnection = process.env.DB_CONNECTION;

if (!dbConnection) {
  console.error('Error: DB_CONNECTION is not defined in .env file.');
  process.exit(1); // Exit the application if DB_CONNECTION is not defined
}

mongoose
  .connect(dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit the application if the connection fails
  });

// Setup socket.io event listeners
io.on('connection', (socket) => {
  console.log('New client connected');

  // Example: Emit event when a new event is created
  socket.on('createEvent', (event) => {
    io.emit('newEvent', event); // Broadcast the new event to all connected clients
  });

  // Disconnect handling
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
