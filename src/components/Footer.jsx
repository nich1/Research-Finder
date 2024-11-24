import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-links">
        {/* Internal Links */}
        <a href="/terms">Terms of Service</a>
        <a href="/help">Help</a>
      </div>
      <div className="social-links">
        {/* Social Media Links */}
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <p>&copy; 2024 Research Finder. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;
