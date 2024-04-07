import './App.css';
import React from 'react';
import logo from './images/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo"/>
    </header>
  );
}

export default Header;