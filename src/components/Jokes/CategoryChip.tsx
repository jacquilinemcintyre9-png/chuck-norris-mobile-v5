import React from 'react';
import { ChuckCategory } from '../../api/chuckApi';

interface CategoryChipProps {
  category: ChuckCategory;
  active: boolean;
  onSelect: (category: ChuckCategory) => void;
}

export const CategoryChip: React.FC<CategoryChipProps> = ({
  category,
  active,
  onSelect
}) => {
  return (
    <button
      onClick={() => onSelect(category)}
      style={{
        border: 'none',
        outline: 'none',
        borderRadius: 999,
        padding: '8px 14px',
        marginRight: 8,
        marginBottom: 8,
        fontSize: 14,
        fontWeight: 500,
        cursor: 'pointer',
        background: active ? '#ff9800' : '#1f1f1f',
        color: active ? '#000000' : '#ffffff'
      }}
    >
      {category}
    </button>
  );
};
