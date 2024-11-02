// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Open Research Pojects </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">
          <button style={{ marginLeft: '10px' }}>Sign In</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
