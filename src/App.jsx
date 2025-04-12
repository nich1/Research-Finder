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
import AdminDashboard from './components/AdminDashboard';
import Terms from './components/Terms';
import Apply from './components/Apply'; 

import { auth, db } from './config/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

// ✅ Protect normal user pages
const ProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/signin" replace />;
  return children;
};

// ✅ Protect admin pages
const AdminProtectedRoute = ({ user, children }) => {
  if (!user) return <Navigate to="/signin" replace />; // Not logged in
  if (!user.isAdmin) return <Navigate to="/user" replace />; // Not an admin
  return children;
};

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // ✅ Track loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, 'researchers', currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const userData = userSnap.data();
            const adminStatus = !!userData.isAdmin; // Ensure boolean value
            setIsAdmin(adminStatus);
            setUser({ ...currentUser, isAdmin: adminStatus });
          } else {
            setUser(currentUser); // Normal user without Firestore data
            setIsAdmin(false);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // ✅ Add missing `handleSignOut` function
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAdmin(false);
    } catch (error) {
      console.error('Error signing out:', error.message);
    }
  };

  if (loading) return <h2>Loading...</h2>; // ✅ Prevents premature redirection

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
            <Route path="/search" element={<SearchResults />} />

            {/* ✅ Protect user pages */}
            <Route
              path="/user"
              element={
                <ProtectedRoute user={user}>
                  <UserPage />
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
            <Route
  path="/apply/:id"
  element={
    <ProtectedRoute user={user}>
      <Apply assistantId={user?.uid} />
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

            {/* ✅ Protect Admin Page */}
            <Route
              path="/admin-dashboard"
              element={
                <AdminProtectedRoute user={user}>
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;