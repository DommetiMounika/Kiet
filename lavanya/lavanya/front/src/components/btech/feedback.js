// Feedback.js
import './feedback.css';
import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phonenum: '',
    branches: 'general',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', formData);
      console.log('Feedback form submitted:', formData);
      // Optionally, reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        phonenum: '',
        branches: 'general',
        comments: '',
      });
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="feedback">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            name="phonenum"
            value={formData.phonenum}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Branches:
          <select
            name="branches"
            value={formData.branches}
            onChange={handleChange}
          >
            <option value="general">Select</option>
            <option value="btech">B.Tech</option>
            <option value="polytechnic">Polytechnic</option>
            <option value="mba/mca/mtech">MBA/MCA/M.Tech</option>
          </select>
        </label>
        <br />
        <label>
          Comments:
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
