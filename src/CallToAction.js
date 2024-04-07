import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button><Link to="/reservations">Reserve a table</Link></button>
    </div>
  );
}

export default CallToAction;