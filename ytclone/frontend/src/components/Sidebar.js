import React from 'react';

function Sidebar() {
  return (
    <div style={{ width: '200px', backgroundColor: '#ddd', padding: '10px' }}>
      <h4>Categories</h4>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
}

export default Sidebar;