import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(
          `https://research-finder-server.vercel.app/search/posts?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.body}</p>
              <p>
                <strong>Organization:</strong> {result.organization}
              </p>
              <p>
                <strong>Work Type:</strong> {result.workType}
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
