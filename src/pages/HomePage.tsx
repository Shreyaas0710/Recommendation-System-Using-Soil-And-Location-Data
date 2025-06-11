import React from 'react';
import Hero from '../components/sections/home/Hero';
import Stats from '../components/sections/home/Stats';
import WhyVelaan from '../components/sections/home/WhyVelaan';
import Testimonials from '../components/sections/home/Testimonials';
import CallToAction from '../components/sections/home/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <WhyVelaan />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default HomePage;