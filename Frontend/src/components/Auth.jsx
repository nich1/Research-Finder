// Auth.jsx
import React, { useState } from 'react';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import GoogleAuth from './GoogleAuth';

const Auth = ({ mode }) => {
  const isRegister = mode === 'register'; // Check if the mode is 'register'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAuth = async () => {
    try {
      if (isRegister) {
        // Register new user
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('User registered successfully');
      } else {
        // Sign in existing user
        await signInWithEmailAndPassword(auth, email, password);
        setMessage('User signed in successfully');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth">
      <h3>{isRegister ? 'Register' : 'Sign In'}</h3>
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
      <button onClick={handleAuth}>{isRegister ? 'Register' : 'Sign In'}</button>
      <p>{message}</p>
      
      {/* Google Sign-In Button */}
      <div style={{ marginTop: '20px' }}>
        <p>Or {isRegister ? 'register' : 'sign in'} with Google</p>
        <GoogleAuth isRegister={isRegister} />
      </div>

      <p>
        {isRegister ? "Already have an account?" : "Don't have an account?"}{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
        >
          <a href={isRegister ? "/signin" : "/register"} style={{ color: 'blue', textDecoration: 'underline' }}>
            {isRegister ? 'Sign In' : 'Register'}
          </a>
        </span>
      </p>
    </div>
  );
};

export default Auth;
