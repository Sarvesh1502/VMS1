const express = require('express');
const { getPendingApplications, updateApplicationStatus } = require('../controllers/adminController');
const router = express.Router();

router.get('/:id/applicants', getPendingApplications);
router.put('/:eventId/applicants/:studentId', updateApplicationStatus);

module.exports = router;
