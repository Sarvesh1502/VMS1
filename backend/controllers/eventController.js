const Event = require('../models/Event');
const Student = require('../models/Student');
const PendingRequest = require('../models/PendingRequests');

const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Error creating event' });
  }
};

const getEventsForAdmin = async (req, res) => {
  try {
    const events = await Event.find({ status: 'Live' });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching live events' });
  }
};

const getEventHistory = async (req, res) => {
  try {
    const events = await Event.find({ status: 'Completed' });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching event history' });
  }
};

const applyForEvent = async (req, res) => {
  const { studentId, eventId } = req.body;

  try {
    const student = await Student.findById(studentId);
    const event = await Event.findById(eventId);

    if (event.applicants.some(applicant => applicant.studentId.toString() === studentId)) {
      return res.status(400).json({ message: 'Student has already applied for this event' });
    }

    event.applicants.push({ studentId, name: student.name, srn: student.srn });
    await event.save();

    student.eventsApplied.push({ eventId, status: 'Applied' });
    await student.save();

    const pendingRequest = new PendingRequest({ eventId, studentId });
    await pendingRequest.save();

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error applying for event' });
  }
};

const approveOrDenyRequest = async (req, res) => {
  const { requestId } = req.params;
  const { status } = req.body;

  try {
    const request = await PendingRequest.findById(requestId);

    if (status === 'Approved') {
      // Update event and student status
      await Event.findByIdAndUpdate(request.eventId, {
        $set: { "applicants.$[elem].status": 'Accepted' },
      }, { arrayFilters: [{ "elem.studentId": request.studentId }] });

      await Student.findByIdAndUpdate(request.studentId, {
        $set: { "eventsApplied.$[elem].status": 'Accepted' },
      }, { arrayFilters: [{ "elem.eventId": request.eventId }] });
    }

    request.status = status;
    await request.save();

    res.status(200).json({ message: 'Request status updated' });
  } catch (error) {
    res.status(500).json({ error: 'Error approving/denying request' });
  }
};

const updateEventStatus = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    event.status = 'Completed';
    await event.save();

    res.status(200).json({ message: 'Event status updated to Completed' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating event status' });
  }
};

module.exports = {
  createEvent,
  getEventsForAdmin,
  getEventHistory,
  applyForEvent,
  approveOrDenyRequest,
  updateEventStatus
};
