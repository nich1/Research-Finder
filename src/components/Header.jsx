import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar'; // Ensure the correct path
import { auth } from '../config/firebase'; // Import Firebase Auth
import { signOut } from 'firebase/auth'; // Import signOut function

function Header({ user, onSignOut }) {
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      
  };

  // Sign Out Handler
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Firebase sign out
      onSignOut(); // Callback to update the parent state
      navigate('/signin'); // Redirect to sign-in page
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <header className="home-header">
      <h1>
        <a href="/" className="home-link">Research Finder App</a>
      </h1>
      <SearchBar onSearch={handleSearch} /> {/* Primary SearchBar */}

      <div className="header-buttons">
        {/* Conditionally Render Buttons Based on Auth State */}
        {user ? (
          <>
            <span className="user-email">Welcome, {user.email}</span> {/* Show user email */}
            <button
              className="btn user-page-button"
              onClick={() => navigate('/user')} // Navigate to User Page
            >
              User Page
            </button>
            <button
              className="btn sign-out-button"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <button
              className="btn sign-in-button"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </button>
            <button
              className="btn register-button"
              onClick={() => navigate('/register')}
            >
              Register
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
