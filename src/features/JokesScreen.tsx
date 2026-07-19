import { useChuckCategories } from "../hooks/useChuckCategories";
import { useChuckRandomJoke } from "../hooks/useChuckRandomJoke";
import { JokeCard } from "../components/Jokes/JokeCard";
import { CategoryList } from "../components/Jokes/CategoryList";
import { Loader } from "../components/Common/Loader";
import { ErrorMessage } from "../components/Common/ErrorMessage";
import { BottomNav } from "../components/Layout/BottomNav";
import { HeroHeader } from "../components/Layout/HeroHeader";

export const JokesScreen = () => {
  const {
    categories,
    isLoading: isCategoriesLoading,
    error: categoriesError,
  } = useChuckCategories();

  const {
    joke,
    isLoading: isJokeLoading,
    error: jokeError,
    refetch,
  } = useChuckRandomJoke();

  const isLoading = isCategoriesLoading || isJokeLoading;
  const hasError = Boolean(categoriesError || jokeError);

  const errorText = (() => {
    if (categoriesError instanceof Error) return categoriesError.message;
    if (jokeError instanceof Error) return jokeError.message;
    return "Неизвестная ошибка";
  })();

  return (
    <div className="screen">
      <HeroHeader
        title="Шутки про Чака Норриса"
        subtitle="Случайный юмор на каждый день"
      />

      <main className="screen-content">
        {isLoading && <Loader text="Загрузка…" />}

        {hasError && (
          <ErrorMessage
            title="Произошла ошибка"
            description={errorText}
            onRetry={refetch}
          />
        )}

        {!isLoading && !hasError && (
          <>
            <section className="section">
              <h2 className="section-title">Шутка дня</h2>
              <JokeCard joke={joke} />
            </section>

            <section className="section">
              <h2 className="section-title">Категории</h2>
              <CategoryList categories={categories} />
            </section>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};
