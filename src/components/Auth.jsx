import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Terms from './Terms';

import './Auth.css';

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate('/dashboard');
    });
    return () => unsubscribe();
  }, [navigate]);

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

      const collectionName = role === "researcher" ? "researchers" : "assistants";

      await setDoc(doc(db, collectionName, user.uid), {
        firstName,
        lastName,
        email: user.email,
        role,
        age,
        gender,
        bio: "",
        userID: user.uid,
      });

      setMessage(`Account created successfully as a ${role}! Redirecting...`);
      setTimeout(() => navigate('/dashboard'), 3000);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate('/dashboard'), 2000);
    } catch (error) {
      setMessage(`Login Error: ${error.message}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>{isRegister ? "Register" : "Sign In"}</h2>
        <p>Welcome! Please {isRegister ? "register" : "sign in"} to continue.</p>

        <>
          {isRegister && (
            <>
              <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </>
          )}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          
          {isRegister && (
            <>
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
            </>
          )}

          {isRegister ? (
            <button className="auth-submit-button" onClick={handleRegister}>Register</button>
          ) : (
            <button className="auth-submit-button" onClick={handleLogin}>Sign In</button>
          )}
        </>

        <p className="auth-message">{message}</p>

        <p className="auth-toggle">
          {isRegister ? (
            <>Already have an account? <Link to="/signin">Sign In</Link></>
          ) : (
            <>Don't have an account? <Link to="/register">Register</Link></>
          )}
        </p>

        <button className="auth-return-home" onClick={() => navigate('/')}>Return to Home Page</button>
      </div>
    </div>
  );
};

export default Auth;
