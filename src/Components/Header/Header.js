import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header-container">
      <h1 className="header-title">
        <span className="freelance">Freelance</span> <span className="portafolio">portafolio</span>
      </h1>
      <nav className="nav-menu">
        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About me</Link>
        <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Projects</Link>
        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
