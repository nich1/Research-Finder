import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Apply = ({ assistantId }) => {
  const { id: postId } = useParams(); // Extract postId from URL
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const trimmedMessage = message.trim();
      if (!trimmedMessage) {
        setStatus("❗ Message cannot be empty.");
        setLoading(false);
        return;
      }

      const res = await axios.post('https://research-finder-server.vercel.app/applications', {
        assistantId,
        postId,
        message: trimmedMessage,
      });

      if (res.status === 201) {
        setStatus('✅ Application submitted successfully!');
        setMessage(''); // Clear message after success
      } else {
        setStatus('⚠️ Unexpected response. Try again later.');
      }
    } catch (err) {
      console.error('❌ Application error:', err.response?.data || err.message);
      setStatus(`❌ Failed to submit application: ${err.response?.data?.error || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Apply to Research Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="application-message">
          Why are you interested?
        </label>
        <textarea
          id="application-message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Write your message here..."
          style={{ width: '100%', marginTop: '0.5rem', padding: '0.5rem' }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>

      {status && (
        <p style={{ marginTop: '1rem', fontWeight: 'bold', color: status.startsWith('✅') ? 'green' : 'red' }}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Apply;
