import React, { useState } from 'react';
import axios from 'axios';
import './AddPostForm.css';

const AddPostForm = ({ researcherID }) => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    organization: '',
    compensation: '',
    workType: '',
    approvalMessage: '',
    expirationDate: '',
  });
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [success, setSuccess] = useState(null); // Success state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!researcherID) {
      setError('Invalid researcher ID. Please sign in again.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        `https://research-finder-server.vercel.app/researcher/${researcherID}/posts`,
        formData
      );
      
      console.log('Post added successfully:', response.data);
      setSuccess('Post added successfully!');
      setFormData({
        title: '',
        body: '',
        organization: '',
        compensation: '',
        workType: '',
        approvalMessage: '',
        expirationDate: '',
      }); // Reset form after success
    } catch (error) {
      console.error('Error adding post:', error.response || error.message);
      setError(error.response?.data?.message || 'Failed to add post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      {success && <p style={{ color: 'green', fontWeight: 'bold' }}>{success}</p>}
      
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="body"
        placeholder="Body"
        value={formData.body}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="organization"
        placeholder="Organization"
        value={formData.organization}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="compensation"
        placeholder="Compensation"
        value={formData.compensation}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="workType"
        placeholder="Work Type (e.g., remote, on-site)"
        value={formData.workType}
        onChange={handleChange}
        required
      />
      <textarea
        name="approvalMessage"
        placeholder="Approval Message"
        value={formData.approvalMessage}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="expirationDate"
        value={formData.expirationDate}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Add Post'}
      </button>
    </form>
  );
};

export default AddPostForm;
