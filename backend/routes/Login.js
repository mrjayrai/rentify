const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const User = require('../db/models/User');


router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(206).json({ message: 'Invalid credentials' ,res:205});
    }

    // Hash the provided password with MD5
    const hashedPassword = crypto.MD5(password).toString();

    // Compare hashed passwords
    if (hashedPassword !== user.password) {
      return res.status(206).json({ message: 'Invalid credentials',res:205 });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        // res.json({ token ,payload,res:400});
        res.status(201).json({ token, payload, res: 201 });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
