import React from 'react';

const EventHistory = ({ events }) => {
  return (
    <div>
      <h2>Event History</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <p>{event.title} - {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventHistory;
