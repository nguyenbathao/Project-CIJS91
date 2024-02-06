import React from 'react';
import Banner from '../../assets/orange-pattern.jpg';

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   height: '100%',
//   width: '100%',
// };

const Subscribe = () => {
  return (
    <div
      style={{
        color: '#e4d4d4',
        backgroundColor: 'white',
        backgroundImage: `url(${Banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          display: 'flex',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ marginTop: ' 1.5rem', maxWidth: '36rem' }}>
          <h1 style={{ fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '600' }}>
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            style={{ padding: '0.75rem', width: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
