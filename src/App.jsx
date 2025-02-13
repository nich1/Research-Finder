import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import SignIn from './components/SignIn';
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import AddPostForm from './components/AddPostForm';
import { auth } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Terms from './components/Terms'; // Import Terms Component

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out.');
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  return (
    <Router>
      <div>
        <Header user={user} onSignOut={handleSignOut} />

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/terms" element={<Terms />} />  

            <Route
              path="/user"
              element={
                <ProtectedRoute user={user}>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/AddPostForm"
              element={
                <ProtectedRoute user={user}>
                  <AddPostForm researcherID={user?.uid} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/feed"
              element={
                <ProtectedRoute user={user}>
                  <Feed />
                </ProtectedRoute>
              }
            />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
