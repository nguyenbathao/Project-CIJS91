import React from 'react'
import Header from '../../layout/Header/Header'
import Brands from '../../components/Brands/Brands'
import FeatureBooks from '../../components/FeartureBooks/FeatureBooks'
import BestSellingBook from '../../components/BestSellingBook/BestSellingBook'



function Home() {
  return (
    <>
    <Header />
    <Brands />
    <FeatureBooks />
    <BestSellingBook/>
    </>
  )
}

export default Home