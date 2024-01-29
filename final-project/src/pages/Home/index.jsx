import React, { useEffect, useState } from 'react';
import Header from '../../layout/Header/Header';
import Brands from '../../components/Brands/Brands';
import FeatureBooks from '../../components/FeartureBooks/FeatureBooks';
import BestSellingBook from '../../components/BestSellingBook/BestSellingBook';
import { productList } from '../../common/product';

function Home() {
  //START DEMO CALL APi
  const [products, setProducts] = useState([]);
  const getListProduct = async () => {
    try {
      const response = await productList();
      if (response) {
        setProducts(response);
      }
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getListProduct();
  }, []);

  console.log({ products });

  //END DEMO CALL APi
  return (
    <>
      <Header />
      <Brands />
      <FeatureBooks products={products} />
      <BestSellingBook />
    </>
  );
}

export default Home;
