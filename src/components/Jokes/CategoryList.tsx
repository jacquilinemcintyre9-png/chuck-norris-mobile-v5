type CategoryListProps = {
  categories?: string[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  if (!categories || categories.length === 0) {
    return <p className="category-empty">Категории не найдены.</p>;
  }

  return (
    <div className="category-list">
      {categories.map((cat) => (
        <button key={cat} className="category-chip">
          {cat}
        </button>
      ))}
    </div>
  );
};
