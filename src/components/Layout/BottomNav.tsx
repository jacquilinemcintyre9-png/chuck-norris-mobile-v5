import React from 'react';

type TabKey = 'jokes' | 'categories' | 'favorites';

interface BottomNavProps {
  active: TabKey;
  onChange: (tab: TabKey) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ active, onChange }) => {
  const tabs: { key: TabKey; icon: string; label: string }[] = [
    { key: 'jokes', icon: '👊', label: 'Шутки' },
    { key: 'categories', icon: '📂', label: 'Категории' },
    { key: 'favorites', icon: '⭐', label: 'Избранное' }
  ];

  return (
    <div
      style={{
        marginTop: 20,
        paddingTop: 10,
        borderTop: '1px solid rgba(255, 255, 255, 0.14)',
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 12
      }}
    >
      {tabs.map((tab) => {
        const isActive = tab.key === active;
        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            style={{
              minWidth: 90,
              padding: '8px 10px',
              borderRadius: 16,
              border: 'none',
              outline: 'none',
              background: isActive
                ? 'rgba(255, 152, 0, 0.3)'
                : 'rgba(0, 0, 0, 0.7)',
              color: isActive ? '#ffcc80' : '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              boxShadow: isActive
                ? '0 0 20px rgba(255, 152, 0, 0.8)'
                : 'none',
              transition: 'transform 0.1s ease, box-shadow 0.2s ease'
            }}
          >
            <span style={{ fontSize: 16 }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};
