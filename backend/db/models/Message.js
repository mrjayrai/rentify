const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  renterid:{
    type: String,
    required: true,
  },
  ownerid:{
    type: String,
    required: true,
  },
  chatid:{
    type: String,
    required: true,
  },
  message:{
    type: String,
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

const User = mongoose.model('messages', MessageSchema);

module.exports = User;
