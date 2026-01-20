
import React from 'react';
import type { NewsSource } from '../types';
import { NewsCard } from './NewsCard';

interface NewsGridProps {
  newsSources: NewsSource[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

export const NewsGrid: React.FC<NewsGridProps> = ({ newsSources, favorites, toggleFavorite }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {newsSources.map(source => (
        <NewsCard
          key={source.id}
          source={source}
          isFavorite={favorites.includes(source.id)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};
