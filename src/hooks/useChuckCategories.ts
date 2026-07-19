import { useQuery } from "@tanstack/react-query";

export type UseChuckCategoriesState = {
  categories: string[] | undefined;
  error: unknown;
  isLoading: boolean;
};

export const useChuckCategories = (): UseChuckCategoriesState => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("https://api.chucknorris.io/jokes/categories");

      if (!res.ok) {
        throw new Error("Ошибка загрузки категорий");
      }

      return res.json();
    },
  });

  return {
    categories: data,
    error,
    isLoading,
  };
};
