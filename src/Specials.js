import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Specials() {
  return (
    <div>
      <h1> This week's specials! </h1>
      <Link to="/menu"> Full menu</Link>
      <h2>Bruschetta</h2>
      <h3>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</h3>
      <p>$5.99</p>
      <Link to="/order">Order a delivery!</Link>
      <h2>Greek Salad</h2>
      <h3>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h3>
      <p>$12.99</p>
      <Link to="/order">Order a delivery!</Link>
      <h2>Lemon Dessert</h2>
      <h3>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</h3>
      <p>$5.00</p>
      <Link to="/order">Order a delivery!</Link>
    </div>
  );
}

export default Specials;