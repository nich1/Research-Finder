import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from 'firebase/auth';
import './Auth.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const BACKEND_URL = 'https://research-finder-server.vercel.app';

  const handleSignIn = async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const payload = {
        userEmail: user.email,
        provider: 'email',
        signInDate: new Date().toISOString(),
        userID: user.uid,
      };

      const response = await fetch(`${BACKEND_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage('Sign In successful! Redirecting...');
        setTimeout(() => navigate('/'), 3000);
      } else {
        throw new Error('Failed to sign in.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign In</h2>
        <p>Welcome back! Please sign in to continue.</p>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="auth-submit-button" onClick={handleSignIn}>
          Sign In
        </button>

        <p className="auth-message">{message}</p>

        <p className="auth-toggle">
          Don't have an account? <a href="/register">Register</a>
        </p>
        <button className="auth-return-home" onClick={() => navigate('/')}>
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default SignIn;
