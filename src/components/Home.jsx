import React, { useState, useEffect } from 'react';
import SidebarFilter from './SidebarFilter';
import './Home.css';
import Feed from './Feed';

// Filter posts based on selected filters
const filterPosts = (filters, posts) => {
  if (filters.length === 0) return posts;

  return posts.filter((post) => {
    const searchableFields = [
      post.department,
      post.researchType,
      post.workType,
      post.body,
    ]
      .filter(Boolean)
      .map((val) => val.toLowerCase());

    return filters.every((filter) =>
      searchableFields.some((val) => val.includes(filter.toLowerCase()))
    );
  });
};

const groupedFilters = {
  Department: ['Biology', 'Computer Science'],
  'Research Type': ['Field Work', 'AI'],
  Location: ['Remote', 'In-Person'],
};
function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const groupedFilters = {
    Department: ['Biology', 'Computer Science'],
    ResearchType: ['Field Work', 'AI'],
    'Work Type': ['Remote', 'In-Person'], 
  };
  
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
        setPosts(data);
        setFilteredPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load research opportunities.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleFilterChange = (filterValue) => {
    const updatedFilters = selectedFilters.includes(filterValue)
      ? selectedFilters.filter((f) => f !== filterValue)
      : [...selectedFilters, filterValue];

    setSelectedFilters(updatedFilters);
    setFilteredPosts(filterPosts(updatedFilters, posts));
  };

  return (
    <div className="home-container">
      <div className="main-content">
      <SidebarFilter
  groupedFilters={groupedFilters}
  selectedFilters={selectedFilters}
  onChange={handleFilterChange}
  onClear={() => {
    setSelectedFilters([]);
    setFilteredPosts(posts); // reset
  }}
/>

        <div className="postings-container">
          <h2>Research Opportunities</h2>
          {loading && <p>Loading research opportunities...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && (
            <Feed posts={filteredPosts} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
