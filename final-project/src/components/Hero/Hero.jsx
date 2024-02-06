import React from 'react';

import Herobanner from '../../assets/herobanner.png';

import WomanImg from '../../assets/woman_hero.png';
import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="banner-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          height: '100%',
          backgroundImage: `url(${Herobanner})`,
          backgroundPosition: 'center',
          backgroundRepeat: ' no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            <div
              style={{
                marginRight: '0.75rem',
                width: '2.5rem',
                backgroundColor: '#EF4444',
                height: '2px',
              }}
            ></div>
            New Trend
          </div>
          <h1 style={{ marginBottom: '1rem', fontWeight: 300, color: 'black' }}>
            AUTUM SALE STYLISH <br />
            <span style={{ fontWeight: 600 }}>WOMENS</span>
          </h1>
          <Link
            to={'/store'}
            style={{
              alignSelf: 'flex-start',
              borderBottomWidth: '2px',
              fontWeight: 600,
              textTransform: 'uppercase',
            }}
          >
            Discover More
          </Link>
        </div>
        <div>
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
