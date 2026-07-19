type ErrorMessageProps = {
  title: string;
  description: string;
  onRetry?: () => void;
};

export const ErrorMessage = ({
  title,
  description,
  onRetry,
}: ErrorMessageProps) => {
  return (
    <div className="error-card">
      <h3 className="error-title">{title}</h3>
      <p className="error-description">{description}</p>
      {onRetry && (
        <button className="error-button" onClick={onRetry}>
          Попробовать снова
        </button>
      )}
    </div>
  );
};
