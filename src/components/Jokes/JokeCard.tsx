type JokeCardProps = {
  joke?: string;
};

export const JokeCard = ({ joke }: JokeCardProps) => {
  if (!joke) {
    return (
      <div className="joke-card joke-card--empty">
        <p>Шутка пока не загружена. Нажмите «Случайная» внизу экрана.</p>
      </div>
    );
  }

  return (
    <div className="joke-card">
      <p className="joke-text">{joke}</p>
    </div>
  );
};
