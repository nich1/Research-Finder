import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out the user
      console.log('User signed out.');
      navigate('/signin'); // Redirect to the sign-in page
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <nav>
      <h1>Research Finder App</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </nav>
  );
};

export default Navbar;
