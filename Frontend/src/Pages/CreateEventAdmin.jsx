import React, { useState } from 'react';

const ApplyEvent = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState('');

  const handleApply = async () => {
    try {
      const studentId = '12345';  // Replace with actual student ID
      const response = await fetch('/api/events/apply', {
        method: 'POST',
        body: JSON.stringify({ studentId, eventId: selectedEvent }),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      console.log('Applied successfully:', data);
    } catch (error) {
      console.error('Error applying for event:', error);
    }
  };

  return (
    <div>
      <h2>Apply for an Event</h2>
      <select onChange={(e) => setSelectedEvent(e.target.value)}>
        {events.map(event => (
          <option key={event.id} value={event.id}>{event.title}</option>
        ))}
      </select>
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default ApplyEvent;
