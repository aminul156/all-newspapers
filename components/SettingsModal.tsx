
import React from 'react';

type TextSize = 'sm' | 'base' | 'lg';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  isDarkMode,
  toggleDarkMode,
  textSize,
  setTextSize,
  isFullscreen,
  toggleFullscreen,
}) => {
  if (!isOpen) return null;

  const textSizeOptions: { value: TextSize; label: string }[] = [
    { value: 'sm', label: 'Small' },
    { value: 'base', label: 'Medium' },
    { value: 'lg', label: 'Large' },
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md m-4 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 id="settings-title" className="text-2xl font-bold text-gray-800 dark:text-white">
            Settings
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Close settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Dark Mode Setting */}
        <div className="flex items-center justify-between">
          <label htmlFor="darkModeToggle" className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Dark Mode
          </label>
          <button
            id="darkModeToggle"
            onClick={toggleDarkMode}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${isDarkMode ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'}`}
          >
            <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
          </button>
        </div>

        {/* Text Size Setting */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Text Size
          </h3>
          <div className="flex space-x-2 rounded-lg bg-gray-100 dark:bg-gray-700 p-1">
            {textSizeOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setTextSize(option.value)}
                className={`w-full py-2 text-sm font-semibold rounded-md transition-colors ${
                  textSize === option.value
                    ? 'bg-primary text-white shadow'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Full Screen Setting */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Display Mode
          </h3>
          <button
            onClick={toggleFullscreen}
            className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-primary hover:bg-opacity-90 transition-colors"
          >
            {isFullscreen ? 'Exit Full Screen' : 'Enter Full Screen'}
          </button>
        </div>
      </div>
    </div>
  );
};
