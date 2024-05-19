const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verify');
const Message = require('../db/models/Message');

// Route to create a new message
router.post('/', verifyToken, async (req, res) => {
  const { renterid, ownerid, chatid, message } = req.body;
  try {
    const userId1 = ownerid;
    const userId2 = renterid;
    const chatId = [userId1, userId2].sort().join('_'); // Ensure consistent order of user IDs

    const newMessage = new Message({ renterid, ownerid, chatid:chatId, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to get all messages for a chat
router.get('/:chatid', verifyToken, async (req, res) => {
  const { chatid } = req.params;
  try {
    const messages = await Message.find({ chatid });
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
