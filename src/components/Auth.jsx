import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const isRegister = mode === 'register'; // Determine if it's Register or Sign In mode
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // For confirming passwords
  const [message, setMessage] = useState('');

  const BACKEND_URL = 'https://research-finder-server.vercel.app'; // Backend URL

  // Handle Register
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }
  
    try {
      // Create user with Firebase Authentication
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
        setMessage('Account created successfully! Redirecting to home...');
        setTimeout(() => navigate('/'), 3000); // Redirect after success
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create account.');
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage(
          'This email is already registered. Please sign in or use a different email address.'
        );
      } else {
        setMessage(`Error: ${error.message}`);
      }
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      const payload = {
        userEmail: user.email,
        provider: 'google',
        signInDate: new Date().toISOString(),
        userID: user.uid,
      };
  
      const response = await fetch(`${BACKEND_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        setMessage(`Welcome, ${user.displayName}! Redirecting to home...`);
        setTimeout(() => navigate('/'), 3000); // Redirect after successful sign-in
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to sign in with Google.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
  const handleSignIn = async () => {
    try {
      // Firebase Authentication with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Send data to backend (optional)
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
        setTimeout(() => navigate('/'), 3000); // Redirect after successful sign-in
      } else {
        const data = await response.json();
        throw new Error(data.message || 'Failed to sign in.');
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

        {isRegister ? (
          <>
            {/* Registration Form */}
            <button className="auth-google-button" onClick={handleGoogleSignIn}>
              <img
                src="/assets/google-icon.png"
                alt="Google icon"
                className="google-icon"
              />
              Register with Google
            </button>
            <div className="auth-divider">
              <span>or</span>
            </div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
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
            <button className="auth-submit-button" onClick={handleRegister}>
              Register
            </button>
          </>
        ) : (
          <>
            {/* Sign In Form */}
            <button className="auth-google-button" onClick={handleGoogleSignIn}>
              <img
                src="/assets/google-icon.png"
                alt="Google icon"
                className="google-icon"
              />
              Sign In with Google
            </button>
            <div className="auth-divider">
              <span>or</span>
            </div>
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
          </>
        )}

        {/* Display Message */}
        <p className="auth-message">{message}</p>

        {/* Toggle between Register and Sign In */}
        <p className="auth-toggle">
          {isRegister
            ? 'Already have an account?'
            : "Don't have an account?"}{' '}
          <a href={isRegister ? '/signin' : '/register'}>
            {isRegister ? 'Sign In' : 'Register'}
          </a>
        </p>

        {/* Return to Home */}
        <button className="auth-return-home" onClick={() => navigate('/')}>
          Return to Home Page
        </button>
      </div>
    </div>
  );
};

export default Auth;
