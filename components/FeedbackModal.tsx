
import React, { useState } from 'react';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StarIcon: React.FC<{ filled: boolean; onMouseEnter: () => void; onMouseLeave: () => void; onClick: () => void }> = ({ filled, onMouseEnter, onMouseLeave, onClick }) => (
  <svg
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    className={`w-8 h-8 cursor-pointer transition-colors ${filled ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState('');

  if (!isOpen) return null;
  
  const handleSubmit = () => {
    const subject = "App Feedback";
    const body = `Rating: ${rating} out of 5 stars\n\nComments:\n${comments}`;
    window.location.href = `mailto:aminul156@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md m-4 p-6 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 id="feedback-title" className="text-2xl font-bold text-gray-800 dark:text-white">
            Feedback
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Close feedback form"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Rate our app
          </h3>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                filled={(hoverRating || rating) >= star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="comments" className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your comments
          </label>
          <textarea
            id="comments"
            rows={4}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Tell us what you think..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={rating === 0}
          className="w-full py-2 px-4 rounded-lg font-semibold text-white bg-primary hover:bg-opacity-90 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};
