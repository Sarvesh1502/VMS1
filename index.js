import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing pages from the pages folder
import StdHome from './Pages/StdHome';
import AdminHome from './Pages/AdminHome';
import StdDash from './Pages/StdDash';
import AdminDash from './Pages/AdminDash';

const socket = io('http://localhost:5000'); // Replace with your backend URL

function App() {
  const [events, setEvents] = useState([]);
  const [userRole, setUserRole] = useState('student'); // Example role; replace this with actual authentication logic

  useEffect(() => {
    // Fetch initial events (for Students or Admin)
    fetchEvents();

    // Real-time updates for new events
    socket.on('newEvent', (event) => {
      setEvents((prevEvents) => [...prevEvents, event]);
    });

    socket.on('eventStatusUpdated', (updatedEvent) => {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === updatedEvent.id ? updatedEvent : event
        )
      );
    });

    return () => {
      socket.off('newEvent');
      socket.off('eventStatusUpdated');
    };
  }, []);

  const fetchEvents = async () => {
    try {
      const endpoint = userRole === 'admin' ? '/api/events/admin' : '/api/events/student';
      const response = await fetch(endpoint);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Volunteering Management System</h1>
        <Routes>
          <Route path="/stdhome" element={<StdHome events={events} />} />
          <Route path="/adminhome" element={<AdminHome events={events} />} />
          <Route path="/stddash" element={<StdDash />} />
          <Route path="/admindash" element={<AdminDash />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
