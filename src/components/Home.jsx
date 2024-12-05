import React, { useState, useEffect } from 'react';
import SidebarFilter from './SidebarFilter';
import './Home.css';

// Filter posts based on selected filters
const filterPosts = (filters, posts) => {
  if (filters.length === 0) return posts; // No filters, show all posts
  return posts.filter((post) =>
    filters.every((filter) => post.body.toLowerCase().includes(filter.toLowerCase()))
  );
};

function Home() {
  const [posts, setPosts] = useState([]); // State for fetched posts
  const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered posts
  const [selectedFilters, setSelectedFilters] = useState([]); // State for selected filters
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  const filters = [
    { label: 'Department', value: 'department' },
    { label: 'Research Type', value: 'researchType' },
    { label: 'Location', value: 'location' },
  ];

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://research-finder-server.vercel.app/posts');
        if (!response.ok) {
          throw new Error(`Error fetching posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data); // Store all posts
        setFilteredPosts(data); // Initially, show all posts
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load research opportunities.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Handle filter changes
  const handleFilterChange = (filterValue) => {
    const updatedFilters = selectedFilters.includes(filterValue)
      ? selectedFilters.filter((f) => f !== filterValue) // Remove filter if already selected
      : [...selectedFilters, filterValue]; // Add new filter
    setSelectedFilters(updatedFilters);
    setFilteredPosts(filterPosts(updatedFilters, posts));
  };

  return (
    <div className="home-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar with filters */}
        <SidebarFilter
          filters={filters}
          renderFilter={(filter) => (
            <label>
              <input
                type="checkbox"
                value={filter.value}
                onChange={() => handleFilterChange(filter.value)}
              />
              {filter.label}
            </label>
          )}
        />

        {/* Research Postings */}
        <div className="postings-container">
          <h2>Research Opportunities</h2>
          {loading && <p>Loading research opportunities...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && filteredPosts.length === 0 && (
            <p>No research opportunities match your filters.</p>
          )}
          {!loading &&
            !error &&
            filteredPosts.length > 0 &&
            filteredPosts.map((post) => (
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>
                  <strong>Compensation:</strong> {post.compensation || 'Not specified'}
                </p>
                <p>
                  <strong>Organization:</strong> {post.organization || 'Unknown'}
                </p>
                <p>
                  <strong>Researcher:</strong> {post.researcherName || 'Unknown'}
                </p>
                <p>
                  <strong>Work Type:</strong> {post.workType || 'Not specified'}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
