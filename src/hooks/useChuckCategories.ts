import { useEffect, useState } from 'react';
import { chuckApi, ChuckCategory } from '../api/chuckApi';

interface UseChuckCategoriesState {
  categories: ChuckCategory[];
  loading: boolean;
  error: string | null;
}

export function useChuckCategories(): UseChuckCategoriesState {
  const [categories, setCategories] = useState<ChuckCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    chuckApi
      .getCategories()
      .then((data) => {
        if (!isMounted) return;
        setCategories(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        if (!isMounted) return;
        console.error(err);
        setError('Не удалось загрузить категории. Попробуйте позже.');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return { categories, loading, error };
}
