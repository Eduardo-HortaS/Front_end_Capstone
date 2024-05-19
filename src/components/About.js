import React from 'react';

function About() {
  return (
    <>
    <div className='about-desc-parent'>
        <div className='about-desc'>
          <p className="title desc-title text-primary-green">Little Lemon</p>
          <p className="subtitle desc-subtitle text-primary-yellow">Chicago</p>
          <p className="desc-text desc">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <img className='desc-image' src='/images/About_A.jpg' alt='About Call' />
      </div>
    </>
  );
}

export default About;