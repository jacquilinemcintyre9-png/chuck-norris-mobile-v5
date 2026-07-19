import React, { useMemo } from 'react';
import { ChuckCategory } from '../../api/chuckApi';
import { CategoryChip } from './CategoryChip';

interface CategoryListProps {
  categories: ChuckCategory[];
  activeCategory: ChuckCategory | null;
  onSelectCategory: (category: ChuckCategory) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  const sortedCategories = useMemo(
    () => [...categories].sort(),
    [categories]
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: 16 }}>
      {sortedCategories.map((category) => (
        <CategoryChip
          key={category}
          category={category}
          active={activeCategory === category}
          onSelect={onSelectCategory}
        />
      ))}
    </div>
  );
};
