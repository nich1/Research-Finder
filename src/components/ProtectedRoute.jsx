import React from 'react';
import { Navigate } from 'react-router-dom'; // Used to redirect
import { useAuthState } from 'react-firebase-hooks/auth'; // Simplifies auth state handling
import { auth } from '../config/firebase'; // Your Firebase auth configuration

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth); // Retrieves the current user (null if not signed in)

  if (!user) {
    return <Navigate to="/signin" />; // Redirect to sign-in page if no user is authenticated
  }

  return children; // Render the child components if user is authenticated
};

export default ProtectedRoute;
