import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setError(null); // Reset errors before fetching

      try {
        const res = await fetch("https://research-finder-server.vercel.app", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (res.ok) {
          if (Array.isArray(data)) {
            setUsers(data);
          } else {
            throw new Error("Unexpected response format");
          }
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

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;
