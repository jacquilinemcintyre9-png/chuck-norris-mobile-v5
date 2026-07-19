import { useQuery } from "@tanstack/react-query";

export type UseChuckRandomJokeState = {
  joke: string | undefined;
  error: unknown;
  isLoading: boolean;
  refetch: () => void;
};

export const useChuckRandomJoke = (): UseChuckRandomJokeState => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["random-joke"],
    queryFn: async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/random");

      if (!res.ok) {
        throw new Error("Ошибка загрузки шутки");
      }

      return res.json();
    },
  });

  return {
    joke: data?.value,
    error,
    isLoading,
    refetch,
  };
};
