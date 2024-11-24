import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import SearchBar from './SearchBar'; // Ensure this is correctly imported

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
          
      <div className="logo" onClick={() => navigate('/')}>
  
      </div>
      <SearchBar onSearch={handleSearch} /> {/* Primary SearchBar */}
      <div className="header-buttons">
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

export default Header;
