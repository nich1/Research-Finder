import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
    fetchUnapprovedPosts();
  }, []);

  const fetchUsers = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("https://research-finder-server.vercel.app/users", { 
        method: "GET", 
        credentials: "include" 
      });
      const data = await res.json();
      if (res.ok) {
        setUsers(data);
      } else {
        throw new Error(data.error || "Failed to fetch users");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchUnapprovedPosts = async () => {
    try {
      const res = await fetch("https://research-finder-server.vercel.app/unapproved-posts", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      if (res.ok) {
        setPosts(data);
      } else {
        throw new Error(data.error || "Failed to fetch posts");
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error.message);
    }
  };

  const approvePost = async (postId) => {
    try {
      const res = await fetch(`https://research-finder-server.vercel.app/approve-post/${postId}`, {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setPosts(posts.filter((post) => post.id !== postId));
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to approve post");
      }
    } catch (error) {
      console.error("Error approving post:", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* User Management */}
      <h3>Manage Users</h3>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} ({user.email})
              <button onClick={() => deleteUser(user.id)} style={{ marginLeft: "10px" }}>
                ❌ Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Post Approval */}
      <h3>Pending Research Posts</h3>
      {posts.length === 0 ? (
        <p>No pending posts.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> - {post.author}
              <button onClick={() => approvePost(post.id)} style={{ marginLeft: "10px" }}>
                ✅ Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
