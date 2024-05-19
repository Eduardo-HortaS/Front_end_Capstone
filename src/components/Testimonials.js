import React from 'react';

function Testimonials() {
  return (
    <div className='testimonials-parent'>
        <p className='testimonials-title'> Testimonials </p>
        <div className='testimonials'>

          <div className='testimonial'>
            <img className='critic-image' src="./images/Sarah_Jones.jpg" alt="A customer" />
            <div className='critic-name-rating'>
              <p className='critic-name'> Sarah Jones </p>
              <p className='critic-rating'> 5/5 </p>
            </div>
            <div className='criticism'>
                <p className='criticism'>
                Me and my friends had a really good time here, the bruschetta was amazing!
                Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
                leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.
                </p>
            </div>
          </div>

          <div className='testimonial'>
            <img className='critic-image' src="./images/Alexa_Smith.jpg" alt="A customer" />
            <div className='critic-name-rating'>
              <p className='critic-name'> Alexa Smith </p>
              <p className='critic-rating'> 5/5 </p>
            </div>
            <div className='criticism'>
                <p className='criticism'>
                I'd definitely recommend this spot for family outings, really comfy vibes!
                Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
                leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.
                </p>
            </div>
          </div>

          <div className='testimonial'>
            <img className='critic-image' src="./images/Julie_Hayashida.jpg" alt="A customer" />
            <div className='critic-name-rating'>
              <p className='critic-name'> Julie Hayashida </p>
              <p className='critic-rating'> 5/5 </p>
            </div>
            <div className='criticism'>
                <p className='criticism'>
                Pretty nice place, loved the decor and the pasta was top-notch!
                Donec massa massa, semper sed enim at, faucibus mattis lorem. Donec vehicula,
                leo ut auctor ullamcorper, diam tortor dignissim velit, ac iaculis libero lacus non diam.
                </p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Testimonials;