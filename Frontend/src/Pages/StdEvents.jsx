import React from "react";
import "./StdEvents.css";

const liveEvents = [
  {
    id: 1,
    name: "DevTrack Designathon",
    date: "25th Nov, 2024",
    location: "Maggie Point",
    description: "Join us in the DesignFest.",
    slots: 15,
    applied: 5,
  },
  {
    id: 2,
    name: "Tree Plantation",
    date: "28th Nov, 2024",
    location: "Central Park",
    description: "Plant trees and contribute to a greener future.",
    slots: 20,
    applied: 10,
  },
  
];

function StdEvents() {
  const handleApply = (eventId) => {
    alert(`Applied for Event ID: ${eventId}`);
  };

  return (
    <div className="std-events-container">
      <div className="std-events-list">
        {liveEvents.map((event) => (
          <div className="std-event-card" key={event.id}>
            <h3 className="std-event-name">{event.name}</h3>
            <p className="std-event-detail">
              <strong>Date:</strong> {event.date}
            </p>
            <p className="std-event-detail">
              <strong>Location:</strong> {event.location}
            </p>
            <p className="std-event-description">{event.description}</p>
            <div className="std-event-stats">
              <span>
                <strong>{event.applied}</strong> / {event.slots} Slots Filled
              </span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${(event.applied / event.slots) * 100}%` }}
                ></div>
              </div>
            </div>
            <button
              className="apply-btn"
              onClick={() => handleApply(event.id)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StdEvents;

