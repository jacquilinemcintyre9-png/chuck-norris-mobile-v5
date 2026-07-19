import React from 'react';
import { ChuckJoke } from '../../api/chuckApi';

export const JokeCard: React.FC<{ joke: ChuckJoke }> = ({ joke }) => (
  <article
    style={{
      marginTop: 20,
      padding: '20px 22px',
      borderRadius: 24,
      background:
        'linear-gradient(145deg, rgba(255,255,255,0.09), rgba(0,0,0,0.7))',
      backdropFilter: 'blur(18px)',
      boxShadow:
        '0 0 34px rgba(255, 152, 0, 0.55), 0 0 90px rgba(0, 0, 0, 0.95)',
      border: '1px solid rgba(255, 255, 255, 0.14)',
      fontSize: 16,
      lineHeight: 1.6,
      color: '#ffffff'
    }}
  >
    <div style={{ fontSize: 26, color: '#ff9800', marginBottom: 8 }}>❝</div>

    {/* предполагаем, что API уже отдаёт joke.value на русском */}
    <p style={{ margin: 0 }}>{joke.value}</p>

    <div
      style={{
        fontSize: 26,
        color: '#ff9800',
        marginTop: 8,
        textAlign: 'right'
      }}
    >
      ❞
    </div>

    <div
      style={{
        marginTop: 12,
        fontSize: 12,
        color: '#ffcc80',
        borderTop: '1px solid rgba(255, 152, 0, 0.45)',
        paddingTop: 6,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <span>ФАКТ</span>
      <span>#ЧАКНОРРИС</span>
    </div>
  </article>
);
