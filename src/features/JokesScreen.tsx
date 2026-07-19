import React, { useEffect, useState } from 'react';
import { useChuckRandomJoke } from '../hooks/useChuckRandomJoke';
import { JokeCard } from '../components/Jokes/JokeCard';
import { Loader } from '../components/Common/Loader';
import { ErrorMessage } from '../components/Common/ErrorMessage';
import { StatusBar } from '../components/Layout/StatusBar';
import { HeroHeader } from '../components/Layout/HeroHeader';
import { ChuckAvatar } from '../components/Jokes/ChuckAvatar';
import { PrimaryActionBar } from '../components/Actions/PrimaryActionBar';
import { BottomNav } from '../components/Layout/BottomNav';
import { ChuckJoke } from '../api/chuckApi';

type TabKey = 'jokes' | 'categories' | 'favorites';

export const JokesScreen: React.FC = () => {
  const {
    joke,
    loading: jokeLoading,
    error: jokeError,
    fetchJoke
  } = useChuckRandomJoke();

  const [activeTab, setActiveTab] = useState<TabKey>('jokes');
  const [favorites, setFavorites] = useState<ChuckJoke[]>([]);

  useEffect(() => {
    fetchJoke();

    const stored = localStorage.getItem('chuck-favorites');
    if (stored) {
      try {
        setFavorites(JSON.parse(stored));
      } catch {
        setFavorites([]);
      }
    }
  }, [fetchJoke]);

  const persistFavorites = (next: ChuckJoke[]) => {
    setFavorites(next);
    localStorage.setItem('chuck-favorites', JSON.stringify(next));
  };

  const handleNewJoke = () => {
    fetchJoke();
  };

  const handleFavorite = () => {
    if (!joke) return;

    const exists = favorites.some((f) => f.id === joke.id);
    const next = exists
      ? favorites.filter((f) => f.id !== joke.id)
      : [...favorites, joke];

    persistFavorites(next);
  };

  const handleCopy = async () => {
    if (!joke) return;
    await navigator.clipboard.writeText(joke.value);
  };

  const handleShare = async () => {
    if (!joke) return;

    if (navigator.share) {
      await navigator.share({
        title: 'Шутка про Чака Норриса',
        text: joke.value
      });
    } else {
      await navigator.clipboard.writeText(joke.value);
    }
  };

  const handleSpeak = () => {
    if (!joke) return;

    const utter = new SpeechSynthesisUtterance(joke.value);
    utter.lang = 'ru-RU';
    utter.rate = 1.0;
    utter.pitch = 1.0;

    const voices = speechSynthesis.getVoices();
    const russianVoice = voices.find((v) => v.lang === 'ru-RU');
    if (russianVoice) utter.voice = russianVoice;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  };

  const isFavorite = joke ? favorites.some((f) => f.id === joke.id) : false;

  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at 10% 0%, #1b2433 0, #050608 45%, #000000 100%)',
        color: '#ffffff'
      }}
    >
      <StatusBar />

      <main
        style={{
          padding: 12,
          maxWidth: 480,
          margin: '0 auto',
          paddingBottom: 24
        }}
      >
        <HeroHeader />
        <ChuckAvatar />

        {jokeError && <ErrorMessage message={jokeError} />}
        {jokeLoading && <Loader text="Загружаем шутку..." />}

        {joke && <JokeCard joke={joke} />}

        <PrimaryActionBar
          loading={jokeLoading}
          onNewJoke={handleNewJoke}
          onFavorite={handleFavorite}
          onShare={handleShare}
          onSpeak={handleSpeak}
          onCopy={handleCopy}
          isFavorite={isFavorite}
        />

        <BottomNav active={activeTab} onChange={setActiveTab} />
      </main>
    </div>
  );
};
