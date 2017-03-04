import React from 'react';
import Menu from './Menu';

function Header() {
  return (
    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
      <h1>Data FE Gallery</h1>
      <strong>
        A gallery of visualisation tools
      </strong>

      <Menu />
    </div>
  );
}

export default Header;
