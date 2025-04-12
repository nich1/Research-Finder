import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Apply = ({ assistantId }) => {
  const { id: postId } = useParams(); // URL param for the post
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await axios.post('https://research-finder-server.vercel.app/applications', {
        assistantId,
        postId,
        message,
      });

      setStatus('✅ Application submitted successfully!');
    } catch (err) {
      console.error('❌ Application error:', err.response?.data || err.message);
      setStatus('❌ Failed to submit application.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
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
        <button type="submit" disabled={loading} style={{ marginTop: '1rem' }}>
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>

      {status && <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{status}</p>}
    </div>
  );
};

export default Apply;
