const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  usertype:{
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likedProperties: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Property' 
}]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
