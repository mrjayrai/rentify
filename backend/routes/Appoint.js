const express = require('express');
const router = express.Router();
const verifytk = require('../middleware/verify');
const Appointment = require('../db/models/Appointment');


router.post('/', verifytk,async (req, res) => {
  const { userid, pid, ownerid, appDate, status } = req.body;
  try {
    const appointment = new Appointment({ userid, pid, ownerid, appDate, status });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { userid, pid, ownerid, appDate, status } = req.body;
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { userid, pid, ownerid, appDate, status, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
