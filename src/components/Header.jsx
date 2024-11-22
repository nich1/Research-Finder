import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="home-header">
      <div className="logo" onClick={() => navigate('/')}>
        Research Finder
      </div>
      <input
        type="text"
        placeholder="Search research postings..."
        className="search-bar"
      />
      <div className="header-buttons">
        <button
          className="btn sign-in-button"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
