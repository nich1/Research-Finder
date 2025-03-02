import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://your-backend-url/admin/users", {
          method: "GET",
          credentials: "include",
        });
        const data = await res.json();

        if (res.ok) {
          setUsers(data);
        } else {
          console.error("Failed to fetch users:", data.error);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
