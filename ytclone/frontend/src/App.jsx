import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Upload from './components/Upload';

const App = () => {
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/upload">Upload</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </div>
  );
};

export default App;