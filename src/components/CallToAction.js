import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className='call-to-action'>
      <div className='call-to-action-content'>
        <div className='call-to-action-desc'>
          <p className='title'>Little Lemon</p>
          <p className='subtitle'>Chicago</p>
          <p className='desc'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/reservations">
            <button className='reserve-button button' aria-label='Go to reservation form'> Reserve a table </button>
          </Link>
        </div>
        <div className='image-wrapper'>
          <img className='call-to-action-image' src='/images/Call_To_Action.jpg' alt='Some inviting bruschetta' />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;