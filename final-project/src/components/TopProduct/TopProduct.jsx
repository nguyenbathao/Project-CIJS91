import './TopProduct.css'

import React from 'react';

import { TopProductsData } from '../../data/dataStoreCloth';

import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function TopProduct() {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div style={{ marginBottom: '6rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>Top Rated Products for you</p>
          <h1 style={{ fontSize: '1.875rem', lineheight: '2.25rem', fontWeight: 700 }}>
            Best Products
          </h1>
          <p style={{ fontSize: '0.75rem', lineHeight: '1rem', color: '#9CA3AF' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit
            asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div
          style={{
            display: 'flex',
            gap: '5rem',
            placeItems: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {TopProductsData.map((data) => (
            <div
              style={{
                position: 'relative',
                borderRadius: '1rem',
                backgroundColor: 'rgb(227 227 227)',
                textAlign: 'center',
                maxWidth: '300px',
              }}
            >
              {/* image section */}
              <div style={{ height: '250px', paddingLeft: '75px' }}>
                <img
                  src={data.img}
                  alt=""
                  style={{
                    display: 'block',
                    transitionDuration: '300ms',
                    dropShadow:
                      'drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06))',
                    maxWidth: '140px',
                  }}
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div
                  style={{
                    display: 'flex',
                    gap: '0.25rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <FaStar style={{ color: '#F59E0B' }} />
                  <FaStar style={{ color: '#F59E0B' }} />
                  <FaStar style={{ color: '#F59E0B' }} />
                  <FaStar style={{ color: '#F59E0B' }} />
                </div>
                <h1
                  className="text-xl font-bold"
                  style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: 700 }}
                >
                  {data.title}
                </h1>
                <p
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.25rem',
                    color: '#6B7280',
                    transitionDuration: '300ms',
                  }}
                >
                  {data.description}
                </p>
                <Link
                  to={'/store'}
                >
                  <button className='order-btn'>
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProduct;
