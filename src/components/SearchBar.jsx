import './SearchBar.css';
import React, { useState } from 'react';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

 const handleSearch = async () => {
  if (!query.trim()) return; // Prevent empty searches

  // Clear previous results immediately
  onSearchResults([]); 

  try {
    const response = await fetch(
      `https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    const results = await response.json();
    onSearchResults(results); // Update parent with new results cool tests
  } catch (error) {
    console.error('Error searching posts:', error);
  }
};


  // Handle search when Enter key is pressed
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="home-header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for posts..."
          className="search-bar"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Trigger search on Enter
          aria-label="Search for posts"
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
