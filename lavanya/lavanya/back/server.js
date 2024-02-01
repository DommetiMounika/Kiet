const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const feedbackModel = require('./Model/feedback');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/feedback', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database connected..');
}).catch((err) => {
  console.error('Database connection error:', err);
});

app.post('/api/feedback', async (req, res) => {
  const feedbackData = req.body;

  try {
    const newFeedback = await feedbackModel.create(feedbackData);
    res.status(201).json({
      status: 'Success',
      data: {
        newFeedback,
      },
    });
  } catch (err) {
    console.error('Error saving feedback to MongoDB:', err);
    res.status(500).json({
      status: 'Failed',
      message: err.message,
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});
