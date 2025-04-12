// SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';
import { Link } from 'react-router-dom';



const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch search results: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Fetched search results:', data);
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError(error.message || 'Failed to load search results. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

return (
  <div className="search-results-container">
    <h1>Search Results for "{query || ''}"</h1>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p style={{ color: 'red' }}>{error}</p>
    ) : results.length > 0 ? (
      <ul className="search-results-list">
  {results.map((result) => (
    <li key={result.id} className="search-result-item">
      <h3>{result.title || 'No Title Available'}</h3>
      <p>{result.body || 'No Description Available'}</p>
      <p><strong>Compensation:</strong> {result.compensation || 'N/A'}</p>
      <p><strong>Organization:</strong> {result.organization || 'N/A'}</p>
      <p><strong>Researcher:</strong> {result.researcher || 'Unknown'}</p>
      <p><strong>Work Type:</strong> {result.workType || 'N/A'}</p>

      {/* Wrap Apply Button in a Link */}
      <Link to={`/apply/${result.id}`}>
        <button className="apply-button">Apply</button>
      </Link>
    </li>
  ))}
</ul>


    ) : (
      <p>No results found.</p>
    )}
  </div>
);
}

export default SearchResults;
