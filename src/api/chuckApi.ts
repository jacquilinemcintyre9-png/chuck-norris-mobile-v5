export type ChuckCategory = string;

export interface ChuckJoke {
  id: string;
  url: string;
  value: string;
  categories: ChuckCategory[];
}

const BASE_URL = 'https://api.chucknorris.io';

async function safeFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`);
  if (!res.ok) {
    throw new Error(`Ошибка загрузки: ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const chuckApi = {
  getCategories: () => safeFetch<ChuckCategory[]>('/jokes/categories'),
  getRandomJoke: (category?: ChuckCategory) => {
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    return safeFetch<ChuckJoke>(`/jokes/random${query}`);
  }
};
