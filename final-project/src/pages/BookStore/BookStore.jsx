import React from 'react';
import Header from '../../layout/Header/Header';
import Brands from '../../components/Brands/Brands';
import FeatureBooks from '../../components/FeartureBooks/FeatureBooks';
import BestSellingBook from '../../components/BestSellingBook/BestSellingBook';
import PopularBooks from '../../components/PopularBooks/PopularBooks';
import Quote from '../../components/Quote/Quote';
import LatestArticle from '../../components/LatestArticle/LatestArticle';

function BookStore() {
  return (
    <>
      <Header />
      <Brands />
      <FeatureBooks />
      <BestSellingBook />
      <PopularBooks />
      <Quote />
      <LatestArticle />
    </>
  );
}

export default BookStore;
