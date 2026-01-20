
import React from 'react';

interface MyAppsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MyAppsModal: React.FC<MyAppsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const apps = [
    {
      id: 'muslim-day',
      name: "Muslim Day - Quran, Prayer",
      developer: "Md. Aminul Islam",
      description: "Everything for a Muslim in one app. Quran, Prayer Times, Qibla and more.",
      icon: "https://play-lh.googleusercontent.com/tHqg5adCjZ_XfXg_qJqX8Xg7xXXqXXqXXqXXqXXqXXqXXqXXqXXqXXqXXqXXqXXqXXq=s96-rw",
      url: "https://play.google.com/store/apps/details?id=com.aminul.muslimday",
      rating: 4.8
    },
    // Add more apps here
  ];

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-[60] flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="my-apps-title"
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary px-6 py-4 flex justify-between items-center">
          <h2 id="my-apps-title" className="text-xl font-bold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            Our Apps
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          <div className="space-y-6">
             {apps.map(app => (
                 <div key={app.id} className="flex flex-col sm:flex-row gap-5 items-start border-b border-gray-100 dark:border-gray-700 pb-6 last:border-0 last:pb-0">
                     <div className="flex-shrink-0 mx-auto sm:mx-0">
                         <img src={app.icon} alt={app.name} className="w-24 h-24 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300" />
                     </div>
                     <div className="flex-grow text-center sm:text-left space-y-2">
                         <h3 className="font-bold text-lg text-gray-800 dark:text-white leading-tight">{app.name}</h3>
                         <p className="text-xs font-semibold text-primary uppercase tracking-wide">{app.developer}</p>
                         <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{app.description}</p>
                         <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-2">
                             {app.rating && (
                                 <div className="flex items-center text-yellow-500 font-bold bg-yellow-50 dark:bg-yellow-900/30 px-2 py-1 rounded-md text-sm">
                                     <span>{app.rating}</span>
                                     <svg className="w-4 h-4 ml-1 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                 </div>
                             )}
                             <a 
                                 href={app.url} 
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 className="inline-flex items-center px-5 py-2 bg-primary hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-lg transform active:scale-95"
                             >
                                 Install App
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                 </svg>
                             </a>
                         </div>
                     </div>
                 </div>
             ))}
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Want to see more apps?
            </p>
            <a 
                href="https://play.google.com/store/apps/developer?id=Md.+Aminul+Islam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold hover:underline"
            >
                Visit Google Play Store
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
