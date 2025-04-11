// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px' }}>
        &copy; {new Date().getFullYear()} Udl Info All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;