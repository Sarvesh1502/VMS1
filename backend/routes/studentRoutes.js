const express = require('express');
const { applyForEvent } = require('../controllers/studentController');
const router = express.Router();

router.post('/:id/apply', applyForEvent);

module.exports = router;
