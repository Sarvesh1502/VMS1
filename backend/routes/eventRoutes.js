const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// Event Routes
router.post('/create', eventController.createEvent);
router.get('/admin', eventController.getEventsForAdmin);
router.get('/history', eventController.getEventHistory);
router.post('/apply', eventController.applyForEvent);
router.patch('/requests/:requestId', eventController.approveOrDenyRequest);
router.patch('/:eventId', eventController.updateEventStatus);

module.exports = router;
