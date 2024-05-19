const express = require('express');
const router = express.Router();
const multer = require('multer');
const Property = require('../db/models/Property');
const path = require('path');

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add the timestamp to the file name to avoid name conflicts
  }
});

const upload = multer({ storage });

// Route to add a new property
router.post('/', upload.single('image'), async (req, res) => {
  const { title, description, price, ptype, userid, address, city, state, country, pincode, isactive } = req.body;
  const image = req.file ? req.file.path : null;

  try {
    const property = new Property({ title, description, price, image, ptype, userid, address, city, state, country, pincode, isactive });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to update a property
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, description, price, ptype, address, city, state, country, pincode, isactive } = req.body;
  const image = req.file ? req.file.path : req.body.image; // Keep the current image if no new image is uploaded

  try {
    const property = await Property.findByIdAndUpdate(
      id,
      { title, description, price, image, ptype, address, city, state, country, pincode, updatedAt: Date.now(), isactive },
      { new: true, runValidators: true }
    );
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to delete a property
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const property = await Property.findByIdAndDelete(id);
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
