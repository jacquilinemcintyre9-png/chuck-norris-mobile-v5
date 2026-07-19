import React from 'react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div
    style={{
      marginBottom: 12,
      padding: '10px 12px',
      borderRadius: 12,
      background: 'rgba(244, 67, 54, 0.12)',
      color: '#ffcdd2',
      fontSize: 14
    }}
  >
    Ошибка: {message}
  </div>
);
