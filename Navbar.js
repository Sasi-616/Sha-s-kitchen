import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#" title="Logo">
          <img src="images/logo.png" alt="Restaurant Logo" />
        </a>
      </div>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
