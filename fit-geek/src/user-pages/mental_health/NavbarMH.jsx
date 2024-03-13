import React from 'react';
import '../../stylesheets/navbarMH.css';
import logo from '../../images/mentalHealthLogo.png';

const NavbarMH = () => {
  return (
    <nav className="navbar">
      Mental Health
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <ul className="nav-links">
          <li>
            <a href="#">Meditation</a>
          </li>
          <li>
            <a href="#">Sleep</a>
          </li>
          <li>
            <a href="#">Mind Fullness</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavbarMH;
