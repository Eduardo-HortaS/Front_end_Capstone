import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='App-header'>
      <Link to='/'><img src='/images/Logo.svg' alt="Little Lemon logo"/></Link>
      <Nav/>
    </header>
  );
}

export default Header;