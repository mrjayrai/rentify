const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
    required: true,
  },
  ptype: {
    type: String,
    required: true,
  },
  userid:{
    type: String,
    required: true,
  },
  address:{
    type:String,
    required:true,
  },
  city:{
    type:String,
    required:true,
  },
  state:{
    type:String,
    required:true,
  },
  country:{
    type:String,
    required:true,
  },
  pincode:{
    type:String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
  isactive:{
    type:Boolean,
    required:true,
  },
  likecount:{
    type:Number,
    default:0,
  }
});

const User = mongoose.model('Property', PropertySchema);

module.exports = User;
