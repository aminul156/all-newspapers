import React from 'react';

export const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 z-50 animate-fadeOut">
      <div className="relative flex items-center justify-center">
         <div className="absolute h-24 w-24 bg-primary rounded-full animate-ping opacity-75"></div>
         <div className="relative h-20 w-20 bg-primary rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
         </div>
      </div>
      <h1 className="mt-8 text-2xl font-bold text-gray-800 dark:text-white tracking-wider animate-pulse">
        সকল পত্রিকা- All Newspaper
      </h1>
      <style>{`
        @keyframes fadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fadeOut {
          animation: fadeOut 2s forwards;
        }
      `}</style>
    </div>
  );
};