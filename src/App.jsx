// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Auth from './components/Auth';
import Footer from './components/Footer';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="main-container">
              <MainContent />
              <h1>Research Related Jobs</h1>
              <Posts />
            </div>
          } />
          <Route path="/signin" element={<Auth />} /> {/* Sign-in page route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
