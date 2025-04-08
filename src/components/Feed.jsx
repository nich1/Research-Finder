import React from 'react';
import FeedDisplay from './FeedDisplay';
import './Feed.css';

function Feed({ posts }) {
  return (
    <div className="feed-container">
      {posts.length === 0 ? (
        <p>No posts available at the moment.</p>
      ) : (
        <div className="feed-list">
          {posts.map((post) => (
            <FeedDisplay key={post.id} data={post} className="post-card" />
          ))}
        </div>
      )}
    </div>
  );
}

export default Feed;
