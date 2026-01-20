
import React, { useState, useEffect } from 'react';
import type { NewsSource } from '../types';

interface NewsCardProps {
  source: NewsSource;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const FavoriteButton: React.FC<{isFavorite: boolean; onClick: (e: React.MouseEvent) => void}> = ({ isFavorite, onClick }) => (
    <button
        onClick={onClick}
        className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-200 z-10 ${
            isFavorite ? 'text-yellow-400 bg-yellow-400/20' : 'text-gray-400 dark:text-gray-500 bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-300/70 dark:hover:bg-gray-700/70'
        }`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
    >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    </button>
);


export const NewsCard: React.FC<NewsCardProps> = ({ source, isFavorite, onToggleFavorite }) => {
  const [imgSrc, setImgSrc] = useState(source.logoUrl);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgSrc(source.logoUrl);
    setImgError(false);
  }, [source.logoUrl]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(source.id);
  };

  const handleError = () => {
    if (imgSrc === source.logoUrl) {
        // Try Google Favicon service as a robust fallback
        try {
            const hostname = new URL(source.websiteUrl).hostname;
            // Using sz=128 to get a higher resolution icon if available
            setImgSrc(`https://www.google.com/s2/favicons?domain=${hostname}&sz=128`);
        } catch (e) {
            setImgError(true);
        }
    } else {
        // If favicon also fails, fallback to text
        setImgError(true);
    }
  };
  
  return (
    <div className="group relative h-full">
      <a
        href={source.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:hover:shadow-primary/50 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
      >
        <div className="relative p-4 flex-grow flex items-center justify-center aspect-[3/2] bg-white">
              {/* Note: bg-white is forced here because many logos are designed for white backgrounds */}
              {!imgError ? (
                <img
                  src={imgSrc}
                  alt={`${source.name} logo`}
                  className="max-h-20 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={handleError}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-2 w-full h-full">
                     <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 text-primary font-bold text-3xl mb-1 shadow-sm border border-gray-200">
                        {source.name.charAt(0)}
                    </div>
                </div>
              )}
        </div>
        <div className="p-3 text-center border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
          <h3 className="font-semibold text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary line-clamp-2 min-h-[2.5em] flex items-center justify-center">
            {source.name}
          </h3>
        </div>
      </a>
      <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick} />
    </div>
  );
};
