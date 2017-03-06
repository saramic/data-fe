import React from 'react';
import { Link } from 'react-router';

function Menu() {
  return (
      <ul style={{ marginTop: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/graphD3">Graph D3</Link></li>
        <li><Link to="/pubnubEon">PubNub Eon</Link></li>
      </ul>
  );
}

export default Menu;
