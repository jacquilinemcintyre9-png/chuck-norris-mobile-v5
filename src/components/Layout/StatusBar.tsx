import React from 'react';

interface StatusBarProps {
  time?: string;
  batteryPercent?: number;
}

export const StatusBar: React.FC<StatusBarProps> = ({
  time = '15:39',
  batteryPercent = 87
}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '8px 16px',
      fontSize: 12,
      color: '#ffd54f',
      background: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(255, 213, 79, 0.25)'
    }}
  >
    <span>{time}</span>
    <span>🔋 {batteryPercent}%</span>
  </div>
);
