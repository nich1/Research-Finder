import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Apply = ({ assistantId }) => {
  const { id: postId } = useParams(); // grabs postId from URL
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://research-finder-server.vercel.app/applications', {
        assistantId,
        postId,
        message
      });

      setStatus('Application submitted successfully!');
    } catch (err) {
      console.error('Application error:', err.response?.data || err.message);
      setStatus('Failed to submit application.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Apply to Research Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Why are you interested?
          <textarea
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', marginTop: '0.5rem' }}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '1rem' }}>
          Submit Application
        </button>
      </form>

      {status && <p>{status}</p>}
    </div>
  );
};

export default Apply;
