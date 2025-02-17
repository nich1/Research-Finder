import './SearchBar.css';
import searchIcon from '../assets/search.png'
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
      setQuery(event.target.value);
      console.log("Query Updated:", event.target.value);
  };

    const handleSearch = async () => {
        setQuery((prevQuery) => {
            console.log("Using Latest Query:", prevQuery); // Debugging
            if (!prevQuery.trim()) {
                console.warn("Search query is empty, aborting search.");
                return prevQuery;
            }

            onSearch([]); // Clear results before new search

            fetch(`https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(prevQuery)}`)
                .then((response) => {
                    if (!response.ok) throw new Error("Failed to fetch search results");
                    return response.json();
                })
                .then((results) => onSearch(results))
                .catch((error) => console.error("Error searching posts:", error));
            console.log("made it", response); // Debugging
            return prevQuery;
        });
    };


  // Handle search when Enter key is pressed
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
          onKeyDown={handleKeyDown} // Trigger search on Enter
          aria-label="Search for posts"
                />
        <button className="search-button" onClick={handleSearch}>
          <img src={searchIcon} alt="Search" className='search-icon'/>
        </button>
      </div>
   
  );
};

export default SearchBar;
