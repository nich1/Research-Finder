import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const isRegister = mode === 'register';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    try {
      const payload = {
        userEmail: email,
        provider: 'email',
        creationDate: new Date().toISOString(),
        signInDate: new Date().toISOString(),
        userID: 'user-id', // Replace this with real user ID or generate dynamically
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Example: 30 days from now
      };

      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Sign-in successful! Account ID: ${data.id}`);
      } else {
        throw new Error(data.message || 'Failed to sign in.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const payload = {
        userEmail: user.email,
        provider: 'google',
        creationDate: user.metadata.creationTime,
        signInDate: new Date().toISOString(),
        userID: user.uid,
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // Example: 30 days from now
      };

      const response = await fetch('https://research-finder-server.vercel.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Welcome, ${user.displayName}! Account ID: ${data.id}`);
      } else {
        throw new Error(data.message || 'Failed to sign in with Google.');
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <p>Welcome! Please {isRegister ? 'register' : 'sign in'} to continue.</p>

        {/* Google Sign-In Button */}
        <button className="auth-google-button" onClick={handleGoogleSignIn}>
          <img
            src="/assets/google-icon.png"
            alt="Google icon"
            className="google-icon"
          />
          Continue with Google
        </button>

        <div className="auth-divider">
          <span>or</span>
        </div>

        {/* Email and Password Inputs */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-submit-button" onClick={handleAuth}>
          {isRegister ? 'Register' : 'Sign In'}
        </button>

        <p className="auth-message">{message}</p>

        {/* Link to toggle between Sign In and Register */}
        <p className="auth-toggle">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{' '}
          <a href={isRegister ? '/signin' : '/register'}>
            {isRegister ? 'Sign In' : 'Register'}
          </a>
        </p>

        {/* Return to Home link */}
        <button className="auth-return-home" onClick={() => navigate('/')}>
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default Auth;
