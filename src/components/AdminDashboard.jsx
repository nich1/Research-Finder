import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You have full control over this system.</p>
      <button onClick={() => navigate("/")}>Return to Home</button>
    </div>
  );
};

export default AdminDashboard;
