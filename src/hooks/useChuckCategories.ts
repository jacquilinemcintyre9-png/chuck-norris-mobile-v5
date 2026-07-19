import { useCallback, useState } from 'react';
import { chuckApi, ChuckJoke, ChuckCategory } from '../api/chuckApi';

// 🔥 Локальный перевод без API
function localTranslate(text: string): string {
  let t = text;

  // Базовые замены
  const dictionary: Record<string, string> = {
    "Chuck Norris": "Чак Норрис",
    "roundhouse kick": "удар ногой с разворота",
    "can": "может",
    "cannot": "не может",
    "doesn't": "не делает",
    "never": "никогда",
    "always": "всегда",
    "kill": "убить",
    "kills": "убивает",
    "killed": "убил",
    "death": "смерть",
    "fear": "страх",
    "joke": "шутка",
    "jokes": "шутки",
    "fact": "факт",
    "truth": "правда",
    "world": "мир",
    "earth": "земля",
    "punch": "удар",
    "hit": "ударить",
    "kick": "пнуть",
    "fight": "драться",
    "strong": "сильный",
    "power": "сила",
    "man": "человек",
    "guy": "парень",
    "people": "люди",
    "time": "время",
    "space": "пространство",
    "infinity": "бесконечность",
    "infinite": "бесконечный",
    "computer": "компьютер",
    "program": "программа",
    "code": "код",
    "virus": "вирус",
    "fire": "огонь",
    "water": "вода",
    "air": "воздух",
    "hand": "рука",
    "face": "лицо",
    "eye": "глаз",
    "head": "голова",
    "body": "тело",
    "pain": "боль",
    "run": "бежать",
    "walk": "идти",
    "stop": "остановиться",
    "win": "победить",
    "wins": "побеждает",
    "won": "победил",
    "lose": "проиграть",
    "lost": "проиграл"
  };

  // Перевод слов по словарю
  Object.keys(dictionary).forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, "gi");
    t = t.replace(regex, dictionary[key]);
  });

  // Простые грамматические конструкции
  t = t.replace(/can\snot/gi, "не может");
  t = t.replace(/can't/gi, "не может");
  t = t.replace(/does\snot/gi, "не делает");
  t = t.replace(/don't/gi, "не делают");
  t = t.replace(/is\snot/gi, "не является");
  t = t.replace(/is/gi, "является");
  t = t.replace(/are/gi, "являются");
  t = t.replace(/was/gi, "был");
  t = t.replace(/were/gi, "были");

  // Фразы Чака
  t = t.replace(/Chuck Norrises/gi, "Чаки Норрисы");
  t = t.replace(/Chuck Norris's/gi, "Чака Норриса");

  // Улучшение читаемости
  t = t.replace(/\s+/g, " ").trim();

  return t;
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
      // 1. Получаем шутку
      const data = await chuckApi.getRandomJoke(category);

      // 2. Локальный перевод
      const translated = localTranslate(data.value);

      // 3. Сохраняем переведённую версию
      setJoke({
        ...data,
        value: translated
      });

    } catch (err) {
      console.error(err);
      setError("Не удалось загрузить шутку. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { joke, loading, error, fetchJoke };
}
