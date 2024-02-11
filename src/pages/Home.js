import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
// import Testimonials from '../components/Testimonial';

const Home = () => {
  return (
    <>
      <Header />
      <GetStarted />
      {/* <Testimonials /> */}
      <GetInTouch />
    </>
  );
}

export default Home