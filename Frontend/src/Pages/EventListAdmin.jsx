import React from 'react';

const EventListAdmin = ({ events }) => {
  const handleCompleteEvent = async (eventId) => {
    try {
      const response = await fetch(`/api/events/${eventId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'Completed' }),
        headers: { 'Content-Type': 'application/json' },
      });
      const updatedEvent = await response.json();
      // Emit the event status update to all clients
      socket.emit('eventStatusUpdated', updatedEvent);
    } catch (error) {
      console.error('Error completing event:', error);
    }
  };

  return (
    <div>
      <h2>Live Events</h2>
      <ul>
        {events.filter(event => event.status === 'Live').map(event => (
          <li key={event.id}>
            <p>{event.title} - {event.date}</p>
            <button onClick={() => handleCompleteEvent(event.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListAdmin;
