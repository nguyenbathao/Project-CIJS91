import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../../components/Hero/Hero';
import ClothProduct from '../../components/ClothProduct/ClothProduct';
import TopProduct from '../../components/TopProduct/TopProduct';
import Subscribe from '../../components/Subcribe/Subcribe';
import Feedback from '../../components/Feedback/Feedback';

function Home() {
  return (
    <div>
      <Hero />
      <ClothProduct />
      <TopProduct />
      <Feedback />
      <Subscribe />
    </div>
  );
}
export default Home;
