import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <p>
          <a href="https://www.yourwebsite.com" className="text-white text-decoration-none">
            Visit Our Website
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
