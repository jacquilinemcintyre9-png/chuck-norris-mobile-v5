type HeroHeaderProps = {
  title: string;
  subtitle?: string;
};

export const HeroHeader = ({ title, subtitle }: HeroHeaderProps) => {
  return (
    <header className="hero-header">
      <div className="hero-header-inner">
        <h1 className="hero-title">{title}</h1>
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
};
