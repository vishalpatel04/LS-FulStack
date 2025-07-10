import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Home</Link>
      <Link to="/upload" style={{ color: '#fff' }}>Upload</Link>
    </nav>
  );
}

export default Navbar;