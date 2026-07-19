import { useCallback, useState } from 'react';
import { chuckApi, ChuckJoke, ChuckCategory } from '../api/chuckApi';

interface UseChuckRandomJokeState {
  joke: ChuckJoke | null;
  loading: boolean;
  error: string | null;
  fetchJoke: (category?: ChuckCategory) => Promise<void>;
}

export function useChuckRandomJoke(): UseChuckRandomJokeState {
  const [joke, setJoke] = useState<ChuckJoke | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchJoke = useCallback(async (category?: ChuckCategory) => {
    setLoading(true);
    setError(null);
    try {
      const data = await chuckApi.getRandomJoke(category);
      setJoke(data);
    } catch (err) {
      console.error(err);
      setError('Не удалось загрузить шутку. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { joke, loading, error, fetchJoke };
}
