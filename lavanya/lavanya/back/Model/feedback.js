// feedbackSchema.js
const mongoose = require('mongoose');

// Define MongoDB schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenum: String,
  branches: String,
  comments: String,
});

// Create MongoDB model
const FeedbackModel = mongoose.model('Feedback', feedbackSchema);

module.exports = FeedbackModel;
