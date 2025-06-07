const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const emailjs = require('@emailjs/node'); // Updated to use @emailjs/node

router.post('/', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  try {
    // Save to MongoDB
    const newContact = await contact.save();

    // Send email via EmailJS
    const templateParams = {
      from_name: req.body.name,
      from_email: req.body.email,
      message: req.body.message,
    };

    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams,
      {
        publicKey: process.env.EMAILJS_USER_ID, // Use publicKey for @emailjs/node
      }
    );

    res.status(201).json(newContact);
  } catch (err) {
    console.error('Error in /api/contact:', err);
    res.status(400).json({ message: `Failed to process contact form: ${err.message}` });
  }
});

module.exports = router;
