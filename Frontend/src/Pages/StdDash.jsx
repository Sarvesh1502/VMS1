import React, { useEffect, useState } from 'react';

const StudentDashboard = ({ students }) => {
  const [studentEvents, setStudentEvents] = useState([]);

  useEffect(() => {
    // Fetch student's applied events
    fetchStudentEvents();
  }, []);

  const fetchStudentEvents = async () => {
    try {
      const studentId = '12345';  // Replace with the actual student ID
      const response = await fetch(`/api/students/${studentId}/events`);
      const data = await response.json();
      setStudentEvents(data);
    } catch (error) {
      console.error('Error fetching student events:', error);
    }
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {studentEvents.map(event => (
          <li key={event.id}>
            <p>{event.title} - Status: {event.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
