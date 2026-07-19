type LoaderProps = {
  text?: string;
};

export const Loader = ({ text = "Загрузка…" }: LoaderProps) => {
  return (
    <div className="loader">
      <div className="loader-spinner" />
      <span className="loader-text">{text}</span>
    </div>
  );
};
