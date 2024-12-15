const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  srn: { type: String, unique: true, required: true },
  appliedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
  approvedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }]
});

module.exports = mongoose.model('Student', studentSchema);
