import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q'); // Match parameter name 'q'
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state
      try {
        const response = await fetch(
          `https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch search results');
        }

        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('Failed to load search results. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query || ''}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3>{result.title || 'No Title Available'}</h3>
              <p>{result.body || 'No Description Available'}</p>
              <p>
                <strong>Organization:</strong> {result.organization || 'N/A'}
              </p>
              <p>
                <strong>Work Type:</strong> {result.workType || 'N/A'}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;