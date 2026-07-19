import React from 'react';

export const ChuckAvatar: React.FC = () => (
  <div
    style={{
      marginTop: 12,
      marginBottom: 18,
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: '50%',
        border: '3px solid #ff9800',
        boxShadow:
          '0 0 30px rgba(255, 152, 0, 0.95), 0 0 80px rgba(255, 152, 0, 0.5)',
        overflow: 'hidden',
        background: '#000'
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Chuck_Norris_May_2015.jpg"
        alt="Chuck Norris"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
    </div>
  </div>
);
