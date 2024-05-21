const express = require('express');
const router = express.Router();
const User = require('../db/models/User');
const crypto = require('crypto-js');

// Route to create a new user
router.post('/', async (req, res) => {
  const { name, email, password, usertype } = req.body;
  try {
    // Encrypt the password
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      const msg = {1:'Duplicate email',res:209}
      return res.status(209).json(msg);
    }
    const hashedPassword = crypto.MD5(password).toString();

    const user = new User({ name, email, password: hashedPassword, usertype });
    await user.save();
    res.status(201).json({ data: user, res: 201 });
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
