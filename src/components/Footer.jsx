import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '10px',
      backgroundColor: 'var(--primary-color)',
      color: '#fff',
    }}>
      © 2025 Apartment App | <a href="https://github.com/Akriti70/Apartment-React-App" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>GitHub</a>
    </footer>
  );
};

export default Footer;

