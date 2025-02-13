import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
     
     <div className="footer-links">
    {/* Internal Links */}
    <a href="/terms">Terms of Service</a>
    <a href="/privacy">Privacy Policy</a>
    <a href="/help">Help</a>
    <a href="/contact">Contact Us</a>
  </div>
  <div className="social-links">
    {/* Social Media Links */}
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
  </div>
  <div className="footer-info">
    <p>&copy; 2024 Research Finder. All rights reserved.</p>
    <p>For inquiries, email us at <a href="mailto:support@researchfinder.com">support@researchfinder.com</a></p>
  </div>
</footer>
  );
};

export default Footer;
