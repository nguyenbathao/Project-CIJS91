import React, { useContext } from 'react';

import { useParams } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

import { ProductContext } from '../../context/ProductContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section
        style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {' '}
        Loading...{' '}
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section
      style={{
        height: '100vh',
        paddingTop: '8rem',
        paddingBottom: '3rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{ maxWidth: '300px' }} src={image} alt="" />
          </div>
          <div style={{ flex: '1 1 0%', textAlign: 'center' }}>
            <h1
              style={{
                marginBottom: '0.5rem',
                fontWeight: '300',
                color: '26px',
              }}
            >
              {title}
            </h1>
            <div
              style={{
                fontSize: '1.25rem',
                lineHeight: '1,75rem',
                color: '#EF4444',
                marginBottom: '1.5rem',
                fontWeight: '500',
              }}
            >
              $ {price}
            </div>
            <p>{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              style={{
                backgroundColor: 'black',
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                color: ' #ffffff',
                cursor: 'pointer',
                marginTop:'1rem',
                marginBottom: '1rem'
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
