const { body, param, validationResult } = require('express-validator');

// Middleware to validate request body for creating events
exports.validateEventCreation = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('date').isISO8601().withMessage('Date must be in a valid format (YYYY-MM-DD)'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];

// Middleware to validate request parameters for event updates
exports.validateEventId = [
  param('id').isMongoId().withMessage('Invalid event ID'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];

// Middleware to validate request body for student application
exports.validateStudentApplication = [
  body('studentId').isMongoId().withMessage('Invalid student ID'),
  body('name').notEmpty().withMessage('Name is required'),
  body('srn').notEmpty().withMessage('SRN is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  }
];
