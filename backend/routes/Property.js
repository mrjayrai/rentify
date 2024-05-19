const express = require('express');
const router = express.Router();
const Property = require('../db/models/Property');


router.post('/', async (req, res) => {
  const { title, description, price, image, ptype, userid, address, city, state, country, pincode,isactive } = req.body;
  try {
    const property = new Property({ title, description, price, image, ptype, userid, address, city, state, country, pincode,isactive });
    await property.save();
    res.status(201).json(property);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, price, image, ptype, address, city, state, country, pincode ,isactive} = req.body;
  try {
    const property = await Property.findByIdAndUpdate(
      id,
      { title, description, price, image, ptype, address, city, state, country, pincode, updatedAt: Date.now() ,isactive},
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
