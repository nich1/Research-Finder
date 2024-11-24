import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(query)}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      const results = await response.json();
      onSearchResults(results); // Pass results to the parent component
    } catch (error) {
      console.error('Error searching posts:', error);
    }
  };

  return (
    <div className="home-header">
    
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for posts..."
        className="search-bar"
      />
      <button className="search-button">Search</button>
    </div>
    <div className="header-buttons">

    </div>
  </div>
  );
};

export default SearchBar;
