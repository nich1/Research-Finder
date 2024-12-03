import React from 'react';
import ReactDOM from 'react-dom'; // Ensure ReactDOM is imported
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar'; // Ensure the correct path


// The Header component
function Header() {
  const navigate = useNavigate();

  const handleSearch = (searchQuery) => {
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="home-header">
      <h1>Research Finder App</h1>
      
   
      
      <SearchBar onSearch={handleSearch} /> {/* Primary SearchBar */}
      
      <div className="header-buttons">
        <button
          className="btn home-button"
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className="btn sign-in-button"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header; // Ensure it is a default export