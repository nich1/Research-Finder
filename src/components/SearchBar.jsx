// SearchBar.jsx
import './SearchBar.css';
import searchIcon from '../assets/search.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (!query.trim()) {
      console.warn("Search query is empty, aborting search.");
      return;
    }

    // Navigate to search results page
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for posts..."
        className="search-bar"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        aria-label="Search for posts"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
