import React from 'react';
import logo from './images/Logo.svg';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon logo"/>
      <h1>Welcome to Little Lemon</h1>
    </header>
  );
}

export default Header;