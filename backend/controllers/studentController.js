const Event = require('../models/Event');
const Student = require('../models/Student');

exports.applyForEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { studentId, name, srn } = req.body;

    const event = await Event.findById(id);
    event.applicants.push({ studentId, name, srn });
    await event.save();

    const student = await Student.findById(studentId);
    student.appliedEvents.push(id);
    await student.save();

    res.status(200).json({ success: true, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
