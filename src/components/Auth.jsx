import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setPersistence, browserLocalPersistence } from 'firebase/auth';
import Terms from './Terms';

import './Auth.css';
import { Link } from 'react-router-dom';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const isRegister = mode === 'register';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('assistant');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [message, setMessage] = useState('');

  const BACKEND_URL = 'https://research-finder-server.vercel.app';

  const validatePassword = (pwd) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pwd);
  };

  const handleRegister = async () => {
    if (!agreedToTerms) {
      setMessage('You must agree to the Terms and Conditions.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      return;
    }
    if (!validatePassword(password)) {
      setMessage('Password must be at least 8 characters, include one uppercase letter, one number, and one special character.');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const payload = {
        firstName,
        lastName,
        email: user.email,
        role,
        age,
        gender,
        userID: user.uid,
      };

      const response = await fetch(`${BACKEND_URL}/assistant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage('Account created successfully! Redirecting...');
        setTimeout(() => navigate('/signin'), 3000);
      } else {
        throw new Error('Failed to create account.');
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        <p>Welcome! Please register to continue.</p>

        <>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="assistant">Assistant</option>
            <option value="researcher">Researcher</option>
          </select>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label>
  <input type="checkbox" checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)} />
  I agree to the <Link to="/terms">Terms of Service</Link> and Conditions
</label>
          <button className="auth-submit-button" onClick={handleRegister}>Register</button>
        </>

        <p className="auth-message">{message}</p>

        <p className="auth-toggle">
          Already have an account? <a href="/signin">Sign In</a>
        </p>

        <button className="auth-return-home" onClick={() => navigate('/')}>Return to Home Page</button>
      </div>
    </div>
  );
};

export default Auth;