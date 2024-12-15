const Event = require('../models/Event');

exports.getPendingApplications = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    const pendingApplicants = event.applicants.filter(applicant => applicant.status === 'pending');
    res.status(200).json({ success: true, data: pendingApplicants });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const { eventId, studentId } = req.params;
    const { status } = req.body;

    const event = await Event.findById(eventId);
    const applicant = event.applicants.find(app => app.studentId.toString() === studentId);
    if (applicant) applicant.status = status;
    await event.save();

    res.status(200).json({ success: true, message: 'Application status updated' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
