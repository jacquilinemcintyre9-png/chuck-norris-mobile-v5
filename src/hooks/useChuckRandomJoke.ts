import { useCallback, useState } from 'react';
import { chuckApi, ChuckJoke, ChuckCategory } from '../api/chuckApi';

// 🔥 Функция перевода шутки на русский
async function translateToRussian(text: string): Promise<string> {
  const res = await fetch("https://libretranslate.com/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      q: text,
      source: "en",
      target: "ru",
      format: "text"
    })
  });

  const data = await res.json();
  return data.translatedText;
}

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
      // 1. Получаем шутку с API
      const data = await chuckApi.getRandomJoke(category);

      // 2. Переводим текст шутки
      const translated = await translateToRussian(data.value);

      // 3. Сохраняем переведённую версию
      setJoke({
        ...data,
        value: translated
      });

    } catch (err) {
      console.error(err);
      setError('Не удалось загрузить шутку. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  }, []);

  return { joke, loading, error, fetchJoke };
}
