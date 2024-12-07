import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer'; // Import the Footer component
import { auth } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to="/signin" />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Monitor auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Set user state when auth state changes
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out.');
      setUser(null); // Clear user state after signing out
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Router>
      <div>
        {/* Header Component */}
        <Header user={user} onSignOut={handleSignOut} /> {/* Pass user and sign-out handler */}

        <main style={{ padding: '20px' }}>
          {/* Routes Configuration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Auth mode="signin" />} />
            <Route path="/register" element={<Auth mode="register" />} />

            {/* Protected Routes */}
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <ProtectedRoute>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
