import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { auth, googleProvider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const isRegister = mode === 'register'; // Determine if the mode is 'register' or 'sign in'
  const [email, setEmail] = useState(''); // State to store user email input
  const [password, setPassword] = useState(''); // State to store user password input
  const [message, setMessage] = useState(''); // State to display messages (success or error)

  // Handle authentication with email and password
  const handleAuth = async () => {
    try {
      // Prepare payload to send to the backend
      const payload = {
        userEmail: email,
        provider: 'email',
        creationDate: new Date().toISOString(),
        signInDate: new Date().toISOString(),
        userID: 'user-id', // Placeholder; replace with actual user ID logic
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      };

      // Make a POST request to the backend API
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // If the request is successful, display a success message
        setMessage(`Sign-in successful! Account ID: ${data.id}`);
      } else {
        // If the request fails, display an error message
        throw new Error(data.message || 'Failed to sign in.');
      }
    } catch (error) {
      // Handle errors during the request
      setMessage(`Error: ${error.message}`);
    }
  };

  // Handle authentication with Google
  const handleGoogleSignIn = async () => {
    try {
      // Sign in using Firebase's Google provider
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Prepare payload with Google user data
      const payload = {
        userEmail: user.email,
        provider: 'google',
        creationDate: user.metadata.creationTime,
        signInDate: new Date().toISOString(),
        userID: user.uid,
        expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
      };

      // Make a POST request to the backend API
      const response = await fetch('https://research-finder-server.vercel.app', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        // Display a success message with user details
        setMessage(`Welcome, ${user.displayName}! Account ID: ${data.id}`);
      } else {
        // Handle errors from the backend
        throw new Error(data.message || 'Failed to sign in with Google.');
      }
    } catch (error) {
      // Catch and display errors during Google Sign-In
      console.error('Error during Google Sign-In:', error.message);
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Title based on mode */}
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
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />
        <button className="auth-submit-button" onClick={handleAuth}>
          {isRegister ? 'Register' : 'Sign In'}
        </button>

        {/* Display message */}
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
