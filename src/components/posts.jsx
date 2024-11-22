// Posts.jsx
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'; // Adjust the path based on your project structure
import './Posts.css';

const Posts = () => {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch posts from Firestore
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, 'posts'); // Replace 'posts' with your Firestore collection name
        const postsSnapshot = await getDocs(postsCollection);
        const postsList = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostsData(postsList);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <h2>Recent Posts</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : postsData.length > 0 ? (
        <ul>
          {postsData.map((post) => (
            <li key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>
                <strong>By:</strong> {post.author} | <strong>Date:</strong>{' '}
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p>{post.content}</p>
              <div className="tags">
                {post.tags &&
                  post.tags.map((tag, index) => (
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

