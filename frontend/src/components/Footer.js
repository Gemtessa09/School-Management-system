import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 MERN Stack School Management System by Gemtessa Deksisa | All Rights Reserved</p>
        <p>
          <a href="/terms">Terms of Service</a> | <a href="/privacy">Privacy Policy</a>
        </p>
        <p>Contact Me: +251903735890 | Email: gemtessadeksisa@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
