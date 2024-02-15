import React from 'react';

import { TestimonialData } from '../../data/dataStoreCloth';

function Feedback() {
  return (
    <div className="container">
      {/* header section */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center', marginTop: '70px' }}>
        <p style={{ fontSize: '0.875rem', lineHeight: '1.25rem' }}>What our customers are saying</p>
        <h1 style={{ fontSize: '1.875rem', lineHeight: '2.25rem', fontWeight: '700' }}>
          Testimonials
        </h1>
        <p style={{ fontSize: '0.75rem', lineHeight: '1rem', color: '#9CA3AF' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit
          asperiores modi
        </p>
      </div>
      <div
        style={{
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          marginBottom: '2.5rem',
          gap: '90px',
          display: 'table-cell',
          columnCount: '2',
        }}
      >
        {/* Testimonial cards */}
        <div style={{ maxWidth: '600px' }}>
          <div>
            {TestimonialData.map((data) => (
              <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                <div
                  key={data.id}
                  style={{
                    display: 'flex',
                    position: 'relative',
                    paddingLeft: '1.5rem',
                    paddingRight: '1.5rem',
                    paddingTop: '2rem',
                    paddingBottom: ' 2rem',
                    marginLeft: '1rem',
                    marginRight: '1rem',
                    flexDirection: 'column',
                    gap: '1rem',
                    borderRadius: '0.75rem',
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  }}
                >
                  <div style={{ marginBottom: '1rem' }}>
                    <img
                      src={data.img}
                      alt=""
                      style={{ borderRadius: '9999px', width: '5rem', height: '5rem' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    <div style={{ marginTop: '0.75rem' }}>
                      <p style={{ fontSize: '0.75rem', lineHeight: '1rem', color: '#6B7280' }}>
                        {data.text}
                      </p>
                      <h1 style={{ fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700', marginTop: '1rem' }}>
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                      fontSize: '8rem',
                      lineHeight: 1,
                    }}
                  >
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
