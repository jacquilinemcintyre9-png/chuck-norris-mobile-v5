import React from 'react';

interface LoaderProps {
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ text = 'Загрузка...' }) => (
  <div style={{ marginBottom: 12, fontSize: 14, color: '#b0bec5' }}>
    <span>{text}</span>
  </div>
);
