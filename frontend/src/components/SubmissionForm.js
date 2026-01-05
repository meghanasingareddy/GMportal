import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionForm.css';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData);
      setMessage(response.data.message);
      setFormData({ name: '', phone: '', email: '' }); // Clear form
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
