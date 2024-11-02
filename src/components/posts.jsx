// Posts.jsx
import React from 'react';
import postsData from './postsData';
import './Posts.css';

const Posts = () => {
  return (
    <div className="posts">
      <h2>Recent Posts</h2>
      {postsData.length > 0 ? (
        <ul>
          {postsData.map((post) => (
            <li key={post.id} className="post">
              <h3>{post.title}</h3>
              <p><strong>By:</strong> {post.author} | <strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
              <p>{post.content}</p>
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
