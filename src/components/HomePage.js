import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function HomePage() {
  return (
    <main>
      <CallToAction />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
}

export default HomePage;