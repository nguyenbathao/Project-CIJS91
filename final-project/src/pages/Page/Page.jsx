import './Page.css';

import React, { useContext } from 'react';

import { ProductContext } from '../../context/ProductContext';
import Product from '../../components/Product/Product';
import Hero from '../../components/Hero/Hero';

function Page() {
  const { products } = useContext(ProductContext);
  const filteredProducts = products.filter((item) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });
  return (
    <div>
      <Hero />
      <section className="Pages">
        <div
          style={{
            marginBottom: '2.5rem',
            fontSize: '1.875rem',
            lineHeight: '2.25rem',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Explore Our Products
        </div>
        <div className="page-container">
          <div className="page-list">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
