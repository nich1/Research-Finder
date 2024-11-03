import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const handleAuth = async () => {
    setLoading(true);
    setMessage(''); // Clear previous message
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('User registered successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('User signed in successfully');
      }
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth">
      <h3>{isSignUp ? 'Register' : 'Sign In'}</h3>

      {/* Email and Password Inputs */}
      <label>
        Email:
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button onClick={handleAuth} disabled={loading}>
        {loading ? 'Loading...' : isSignUp ? 'Register' : 'Sign In'}
      </button>

      {/* Display Success/Error Message */}
      <p>{message}</p>

      {/* Toggle between Sign In and Register */}
      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => {
            setIsSignUp(!isSignUp);
            setMessage(''); // Clear message when toggling
          }}
        >
          {isSignUp ? 'Sign In' : 'Register'}
        </span>
      </p>
    </div>
  );
};

export default Auth;
