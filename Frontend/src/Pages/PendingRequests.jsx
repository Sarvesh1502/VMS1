/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./PendingRequests.css";

const PendingRequests = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      id: 1,
      name: "Tree Plantation Drive",
      date: "2024-12-05",
      requests: [
        { id: 1, name: "Utkarsh Aditya", status: "Pending" },
        { id: 2, name: "V Sarvesh", status: "Pending" },
      ],
    },
    {
      id: 2,
      name: "DevTrack Designathon",
      date: "2024-12-10",
      requests: [
        { id: 3, name: "Atul", status: "Pending" },
        { id: 4, name: "Bharathan", status: "Pending" },
      ],
    },
  ];

  const toggleEventDetails = (id) => {
    setExpandedEvent(expandedEvent === id ? null : id);
  };

  const handleAction = (eventId, requestId, action) => {
    console.log(`Event ID: ${eventId}, Request ID: ${requestId}, Action: ${action}`);
  };

  return (
    <div className="event-list-container">
      
      <ul className="event-list">
        {events.map((event) => (
          <li key={event.id} className="event-item">
            <div className="event-header" onClick={() => toggleEventDetails(event.id)}>
              <span className="event-name">{event.name}</span>
              <span className="event-date">{event.date}</span>
            </div>
            {expandedEvent === event.id && (
              <div className="event-details">
                <h3>Requests</h3>
                <ul className="request-list">
                  {event.requests.map((request) => (
                    <li key={request.id} className="request-item">
                      <span className="request-name">{request.name}</span>
                      <div className="request-actions">
                        <button
                          className="approve-btn"
                          onClick={() => handleAction(event.id, request.id, "approve")}
                        >
                          Approve
                        </button>
                        <button
                          className="deny-btn"
                          onClick={() => handleAction(event.id, request.id, "deny")}
                        >
                          Deny
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingRequests;
