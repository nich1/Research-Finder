import React from 'react';
import { auth } from '../config/firebase';

const Dashboard = () => {
  const user = auth.currentUser; // Access the currently signed-in user

  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <p>Your UID: {user.uid}</p>
        </div>
      ) : (
        <p>No user is signed in.</p>
      )}
    </div>
  );
};

export default Dashboard;
