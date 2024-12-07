import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const isRegister = mode === 'register'; // Determine if the mode is 'register' or 'sign in'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // State for password
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password
  const [message, setMessage] = useState(''); // State to display messages (success or error)

  const BACKEND_URL = 'https://research-finder-server.vercel.app'; // Firebase backend URL

  // Handle registration
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }

    try {
      // Register the user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send user data to the backend
      const payload = {
        userEmail: user.email,
        provider: 'email',
        creationDate: new Date().toISOString(),
        userID: user.uid,
      };

      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage('Registration successful! Redirecting...');
        setTimeout(() => navigate('/'), 3000); // Redirect to home after success
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to register.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const payload = {
        userEmail: user.email,
        provider: 'google',
        creationDate: user.metadata.creationTime,
        userID: user.uid,
      };

      const response = await fetch(`${BACKEND_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage(`Welcome, ${user.displayName}! Registration successful.`);
        setTimeout(() => navigate('/'), 3000);
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to sign in with Google.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? 'Register' : 'Sign In'}</h2>
        <p>Welcome! Please {isRegister ? 'register' : 'sign in'} to continue.</p>

        {isRegister && (
          <>
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
          </>
        )}

        {/* Registration Form */}
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {isRegister && (
          <>
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </>
        )}
        <button
          className="auth-submit-button"
          onClick={isRegister ? handleRegister : () => navigate('/signin')}
        >
          {isRegister ? 'Register' : 'Sign In'}
        </button>

        {/* Display message */}
        <p className="auth-message">{message}</p>

        {/* Link to toggle between Sign In and Register */}
        <p className="auth-toggle">
          {isRegister
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
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
