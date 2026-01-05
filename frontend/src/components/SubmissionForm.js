import React, { useState } from 'react';
import axios from 'axios';
import './SubmissionForm.css';
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle } from 'react-icons/fa';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/api/submit', formData);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '' }); // Clear form
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-container">
        <div className="success-animation">
          <FaCheckCircle className="success-icon" />
          <h2>Thank You!</h2>
          <p>Your submission has been received.</p>
          <button onClick={() => setIsSubmitted(false)} className="new-submission-btn">
            New Submission
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <form className="submission-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <FaUser className="input-icon" />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <FaPhone className="input-icon" />
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
