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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

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
        'https://research-finder-server.vercel.app/posts/researcher/00hCu4Mle5HZxO3nW8iD/posts',
        {
          researcherID,  // now passed in the body, not in the URL
          ...formData
        }
      )

      setSuccess('Post added successfully!');
      setFormData({
        title: '',
        body: '',
        organization: '',
        compensation: '',
        workType: '',
        approvalMessage: '',
        expirationDate: '',
      });
    } catch (error) {
      console.error('Error adding post:', error.response || error.message);
      setError(error.response?.data?.message || 'Failed to add post. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
     <div className="form-wrapper">
    
 
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
      {success && <p style={{ color: 'green', fontWeight: 'bold' }}>{success}</p>}

      <label>
        What's the title of your research post?
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Could you describe the research opportunity?
        <textarea
          name="body"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        What organization is this affiliated with?
        <input
          type="text"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Is there any compensation offered?
        <input
          type="text"
          name="compensation"
          value={formData.compensation}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        What kind of work is this? (e.g., remote, on-site)
        <input
          type="text"
          name="workType"
          value={formData.workType}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        What message should be sent to the student upon approval?
        <textarea
          name="approvalMessage"
          value={formData.approvalMessage}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        When should this opportunity expire?
        <input
          type="date"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Add Post'}
      </button>
    </form>
    </div>
  );
};

export default AddPostForm;
