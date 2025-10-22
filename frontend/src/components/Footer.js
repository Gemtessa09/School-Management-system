import React from "react";
//import "./Footer.css"; // optional styling

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {year} MERN School Management System. All Rights Reserved.
        </p>
        <p>
          Developed by <strong>Gemtessa Deksisa</strong> 💻 | Powered by React & Node.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
