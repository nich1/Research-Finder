import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Feed from './components/Feed';

function App() {
  return (
    <Router>
      <div>
        <header style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <h1>Research Finder App</h1>
          <p style={{ fontStyle: 'italic', color: '#555' }}>
            🚀 Progress Update: Firebase and Frontend Integration Ongoing!
          </p>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/signin" element={<Auth mode="signin" />} />
          <Route path="/register" element={<Auth mode="register" />} />
          <Route path="/feed" element={<Feed />} /> {/* Feed route */}
        </Routes>
        <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0' }}>
          <p>&copy; 2024 Research Finder Project - Capstone</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
