import React from 'react';

interface PrimaryActionBarProps {
  loading: boolean;
  onNewJoke: () => void;
  onFavorite: () => void;
  onShare: () => void;
  onSpeak: () => void;
  onCopy: () => void;
  isFavorite: boolean;
}

export const PrimaryActionBar: React.FC<PrimaryActionBarProps> = ({
  loading,
  onNewJoke,
  onFavorite,
  onShare,
  onSpeak,
  onCopy,
  isFavorite
}) => (
  <div style={{ marginTop: 28, marginBottom: 20 }}>
    <button
      onClick={onNewJoke}
      disabled={loading}
      style={{
        width: '100%',
        border: 'none',
        outline: 'none',
        borderRadius: 22,
        padding: '16px 20px',
        fontSize: 18,
        fontWeight: 700,
        cursor: 'pointer',
        background:
          'linear-gradient(135deg, #ff6f00, #ff9800, #ffb74d)',
        color: '#000',
        boxShadow:
          '0 0 40px rgba(255, 152, 0, 0.95), 0 0 90px rgba(255, 152, 0, 0.5)',
        transition: 'transform 0.15s ease, box-shadow 0.3s ease'
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow =
          '0 0 60px rgba(255, 152, 0, 1), 0 0 110px rgba(255, 152, 0, 0.7)')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow =
          '0 0 40px rgba(255, 152, 0, 0.95), 0 0 90px rgba(255, 152, 0, 0.5)')
      }
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'scale(0.95)';
        if (navigator.vibrate) navigator.vibrate(12);
      }}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {loading ? 'Загружаем...' : '👊  Н О В А Я  Ш У Т К А'}
    </button>

    <div
      style={{
        marginTop: 18,
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 20
      }}
    >
      <IconButton icon={isFavorite ? '💛' : '⭐'} onClick={onFavorite} />
      <IconButton icon="📤" onClick={onShare} />
      <IconButton icon="🔊" onClick={onSpeak} />
      <IconButton icon="📋" onClick={onCopy} />
    </div>
  </div>
);

interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: 52,
      height: 52,
      borderRadius: 18,
      border: 'none',
      outline: 'none',
      background: 'rgba(255, 255, 255, 0.06)',
      color: '#ffb74d',
      backdropFilter: 'blur(14px)',
      boxShadow: '0 0 24px rgba(255, 183, 77, 0.8)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.1s ease, box-shadow 0.2s ease'
    }}
    onMouseDown={(e) => {
      e.currentTarget.style.transform = 'scale(0.9)';
      e.currentTarget.style.boxShadow =
        '0 0 14px rgba(255, 183, 77, 1)';
      if (navigator.vibrate) navigator.vibrate(8);
    }}
    onMouseUp={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow =
        '0 0 24px rgba(255, 183, 77, 0.8)';
    }}
  >
    {icon}
  </button>
);
