const express = require('express');
const router = express.Router();

// Import necessary middleware and models
const verifyToken = require('../middleware/verify');
const Message = require('../db/models/Message');

// Route to fetch all chats of a specific user
router.post('/user/:userid', verifyToken, async (req, res) => {
  const { userid } = req.params;
  try {
    // Find all messages where the user is either the renter or owner
    const messages = await Message.find({ $or: [{ renterid: userid }, { ownerid: userid }] });

    // Group messages by chat ID
    const chats = messages.reduce((acc, message) => {
      const chatId = message.chatid;
      if (!acc[chatId]) {
        acc[chatId] = [];
      }
      acc[chatId].push(message);
      return acc;
    }, {});

    res.json(chats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
