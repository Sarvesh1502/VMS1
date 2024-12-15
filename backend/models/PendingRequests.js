const React = require('react');
const { useEffect, useState } = React;
const { io } = require('socket.io-client'); // Directly use io from socket.io-client

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  // Initialize socket connection
  const socket = io('http://localhost:5000'); // Replace with your server's URL

  useEffect(() => {
    fetchPendingRequests();

    // Listen for real-time updates from the server
    socket.on('requestApproved', (updatedRequest) => {
      setPendingRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== updatedRequest.id)
      );
    });

    socket.on('requestDenied', (updatedRequest) => {
      setPendingRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== updatedRequest.id)
      );
    });

    // Cleanup socket listeners when the component unmounts
    return () => {
      socket.off('requestApproved');
      socket.off('requestDenied');
    };
  }, []);

  const fetchPendingRequests = async () => {
    try {
      const response = await fetch('/api/events/pending');
      const data = await response.json();
      setPendingRequests(data);
    } catch (error) {
      console.error('Error fetching pending requests:', error);
    }
  };

  const handleApproveRequest = async (requestId) => {
    try {
      const response = await fetch(`/api/events/requests/${requestId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'Approved' }),
        headers: { 'Content-Type': 'application/json' },
      });
      const updatedRequest = await response.json();

      setPendingRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== requestId)
      );

      // Emit the approval to all clients
      socket.emit('requestApproved', updatedRequest);
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleDenyRequest = async (requestId) => {
    try {
      const response = await fetch(`/api/events/requests/${requestId}`, {
        method: 'PATCH',
        body: JSON.stringify({ status: 'Denied' }),
        headers: { 'Content-Type': 'application/json' },
      });
      const updatedRequest = await response.json();

      setPendingRequests((prevRequests) =>
        prevRequests.filter((request) => request.id !== requestId)
      );

      // Emit the denial to all clients
      socket.emit('requestDenied', updatedRequest);
    } catch (error) {
      console.error('Error denying request:', error);
    }
  };

  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, 'Pending Requests'),
    React.createElement(
      'ul',
      null,
      pendingRequests.map((request) =>
        React.createElement(
          'li',
          { key: request.id },
          React.createElement(
            'p',
            null,
            `${request.studentName} applied for ${request.eventTitle}`
          ),
          React.createElement(
            'button',
            { onClick: () => handleApproveRequest(request.id) },
            'Approve'
          ),
          React.createElement(
            'button',
            { onClick: () => handleDenyRequest(request.id) },
            'Deny'
          )
        )
      )
    )
  );
};

module.exports = PendingRequests; // Export the component using CommonJS
