const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userid:{
    type: String,
    required: true,
  },
  pid:{
    type: String,
    required: true,
  },
  ownerid:{
    type: String,
    required: true,
  },
  appDate:{
    type: Date,
    required: true,
  },
  status:{
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('Appointment', AppointmentSchema);

module.exports = User;
