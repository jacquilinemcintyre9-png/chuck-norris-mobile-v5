import React from 'react';

export const HeroHeader: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: 16, marginBottom: 12 }}>
    <div
      style={{
        display: 'inline-block',
        padding: '12px 22px',
        borderRadius: 22,
        border: '1px solid rgba(255, 213, 79, 0.7)',
        boxShadow:
          '0 0 26px rgba(255, 213, 79, 0.7), 0 0 80px rgba(0, 0, 0, 0.9)',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,0,0,0.7))',
        backdropFilter: 'blur(16px)'
      }}
    >
      <div
        style={{
          letterSpacing: 4,
          fontSize: 18,
          fontWeight: 700,
          textTransform: 'uppercase'
        }}
      >
        Ч А К   Н О Р Р И С
      </div>
      <div
        style={{
          fontSize: 11,
          marginTop: 4,
          color: '#ffe082',
          textTransform: 'uppercase',
          letterSpacing: 2
        }}
      >
        Легендарные шутки
      </div>
    </div>

    <div style={{ marginTop: 10, fontSize: 10, color: '#ffd54f' }}>
      ● ● ● ● ●
    </div>
  </div>
);
