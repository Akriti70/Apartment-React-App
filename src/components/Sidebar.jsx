import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{
      width: '200px',
      padding: 'var(--spacing)',
      backgroundColor: 'var(--secondary-color)',
      color: '#fff'
    }}>
      <h3>Menu</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/apartments" style={{ color: '#fff' }}>Apartments</Link></li>
        <li><Link to="/create" style={{ color: '#fff' }}>Create Apartment</Link></li>
        <li><Link to="/" style={{ color: '#fff' }}>Home</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;

