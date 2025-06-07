const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tech: { type: String, required: true },
  desc: { type: String, required: true },
  url: { type: String }, // Added optional URL field
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
