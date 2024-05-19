const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

// Route to create a new user
router.post('/', async (req, res) => {
  const { name, email, password,usertype } = req.body;
  try {
    const user = new User({ name, email, password,usertype });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
