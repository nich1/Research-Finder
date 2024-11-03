// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="centered-header">
      <h1>Welcome to Research Finder</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/signin">
          <button className="nav-button" style={{ color: 'blue', marginLeft: '10px' }}>
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="nav-button" style={{ color: 'blue', marginLeft: '10px' }}>
            Register
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
