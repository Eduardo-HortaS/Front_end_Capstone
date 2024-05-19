import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (

    <div className="menu">
      <div className="menu-desc">
        <p className="title menu-title">Menu</p>
      </div>
      <div className="cards">
        <div className="card">
          <img className='menu-image' src='/images/Bruschetta.jpg' alt='Bruschetta'></img>
          <div className='name-price'>
            <h2 className="item-name">Bruschetta</h2>
            <p className="item-price">$5.99</p>
          </div>
          <div className='item-desc'>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          </div>
          <div className='delivery'>
            <Link to="/order">Order a delivery!</Link>
          </div>
        </div>
        <div className="card">
          <img className='menu-image' src='/images/Greek_Salad.jpg' alt='Greek Salad'></img>
          <div className='name-price'>
            <h2 className="item-name">Greek Salad</h2>
            <p className="item-price">$12.99</p>
          </div>
          <div className="item-desc">
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className="delivery">
            <Link to="/order">Order a delivery!</Link>
          </div>
        </div>
        <div className="card">
          <img className='menu-image' src='/images/Lemon_Dessert.jpg' alt='Lemon Dessert'></img>
          <div className='name-price'>
            <h2 className="item-name">Lemon Dessert</h2>
            <p className="item-price">$5.00</p>
          </div>
          <div className="item-desc">
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </div>
          <div className="delivery">
            <Link to="/order">Order a delivery!</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

//     <div>
//       <h1>Menu</h1>
//       <h2>Bruschetta</h2>
//       <h3>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</h3>
//       <p>$5.99</p>
//       <h2>Greek Salad</h2>
//       <h3>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</h3>
//       <p>$12.99</p>
//       <h2>Lemon Dessert</h2>
//       <h3>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</h3>
//       <p>$5.00</p>
//     </div>
//   );
// }

export default Menu;