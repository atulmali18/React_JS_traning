import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">React Router DOM</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about"className="nav-link" href="#">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" href="#">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">Services</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
