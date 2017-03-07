import React from 'react';
import { Link } from 'react-router';

function Menu() {
  return (
      <ul style={{ marginTop: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/graphD3">Graph D3</Link></li>
        <li><Link to="/chartJs">Chart JS</Link></li>
        <li><Link to="/plotly">Plotly</Link></li>
        <li><Link to="/mapbox">MapBox</Link></li>
        <li><Link to="/sigmaJs">SigmaJs</Link></li>
        <li><Link to="/alchemy">Alchemy</Link></li>
        <li><Link to="/popoto">Popoto JS</Link></li>
      </ul>
  );
}

export default Menu;
