// Auth.jsx
import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import GoogleAuth from './GoogleAuth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('User registered successfully');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('User signed in successfully');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth">
      <h3>{isSignUp ? 'Register' : 'Sign In'}</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isSignUp ? 'Register' : 'Sign In'}</button>
      <p>{message}</p>
      
      {/* Google Sign-In Button */}
      <div style={{ marginTop: '20px' }}>
        <p>Or sign in with Google</p>
        <GoogleAuth />
      </div>

      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => {
            setIsSignUp(!isSignUp);
            setMessage('');
          }}
        >
          {isSignUp ? 'Sign In' : 'Register'}
        </span>
      </p>
    </div>
  );
};

export default Auth;
