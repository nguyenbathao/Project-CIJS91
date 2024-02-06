import React from 'react';

import { ProductsData } from '../../data/dataStoreCloth';

import { FaStar } from 'react-icons/fa6';

function ClothProduct() {
  return (
    <div style={{ marginBottom: '3rem', marginTop: ' 3.5rem' }}>
      <div className="container">
        {/* Header section */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: ' 0.875rem', lineheight: '1.25rem' }}>
            Top Selling Products for you
          </p>
          <h1 style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: 700 }}>Products</h1>
          <p style={{ fontSize: '0.75rem', lineHeight: ' 1rem', color: '#9CA3AF' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit
            asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            style={{
              display: 'flex',
              gap: '6.25rem',
              justifyContent: 'center',
            }}
          >
            {/* card section */}
            {ProductsData.map((data) => (
              <div key={data.id} style={{ marginTop: '0.875rem' }}>
                <img
                  src={data.img}
                  alt=""
                  style={{
                    objectFit: 'cover',
                    borderRadius: '0.375rem',
                    height: '220px',
                    width: '150px',
                  }}
                />
                <div>
                  <h3 style={{ fontWeight: 600 }}>{data.title}</h3>
                  <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem', color: '#4B5563' }}>
                    {data.color}
                  </p>
                  <div style={{ display: 'flex', gap: '0.25rem', alignTtems: 'center' }}>
                    <FaStar style={{ color: '#FBBF24' }} />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{
                paddingTop: '0.25rem',
                paddingBottom: '0.25rem',
                paddingLeft: '1.25rem',
                paddingRight: '1.25rem',
                marginTop: '2.5rem',
                borderRadius: '0.375rem',
                textAlign: 'center',
                color: '#ee6161',
                cursor: 'pointer',
              }}
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClothProduct;
