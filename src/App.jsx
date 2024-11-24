import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/UserPage';
import Auth from './components/Auth';
import Feed from './components/Feed';
import Header from './components/Header';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <Router>
      <div>
        {/* Header Component */}
        <Header />

        <main style={{ padding: '20px' }}>
          {/* Routes Configuration */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/signin" element={<Auth mode="signin" />} />
            <Route path="/register" element={<Auth mode="register" />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search" element={<SearchResults />} /> {/* Search Results Route */}
          </Routes>
        </main>

        {/* Footer Component */}
        <footer
          style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f0f0f0',
          }}
        >
          <p>&copy; 2024 Research Finder Project - Capstone</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
