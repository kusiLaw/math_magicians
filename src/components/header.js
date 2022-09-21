import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Math Magician</h1>
    <nav>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/calculator">Calculator</Link></li>
        <li><Link to="/quote">Quote</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
