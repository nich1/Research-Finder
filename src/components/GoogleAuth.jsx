import React from 'react';
import { auth, googleProvider } from '../config/firebase'; // Ensure this points to your Firebase config
import { signInWithPopup } from 'firebase/auth';

const GoogleAuth = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User signed in:', result.user); // Log user data for testing
    } catch (error) {
      console.error('Error during Google Sign-In:', error.message);
    }
  };

  return (
    <button className="auth-google-button" onClick={handleGoogleSignIn}>
      <img
        src="/assets/google-icon.png"
        alt="Google icon"
        className="google-icon"
      />
      Continue with Google
    </button>
  );
};

export default GoogleAuth;
