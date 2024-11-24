import React, { useState } from 'react';

const SignInForm = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    provider: '',
    creationDate: '',
    signInDate: '',
    userID: '',
    expirationDate: '',
  });
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('https://research-finder-server.vercel.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to submit account data');
      }

      setResponse(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Sign In Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            User Email:
            <input
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Provider:
            <input
              type="text"
              name="provider"
              value={formData.provider}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Creation Date:
            <input
              type="date"
              name="creationDate"
              value={formData.creationDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Sign In Date:
            <input
              type="date"
              name="signInDate"
              value={formData.signInDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            User ID:
            <input
              type="text"
              name="userID"
              value={formData.userID}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Expiration Date:
            <input
              type="date"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div>
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SignInForm;
