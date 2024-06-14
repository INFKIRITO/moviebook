import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Booking App</Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link to="/theaters">Theaters</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
