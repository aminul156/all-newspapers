
import React, { useState, useRef, useEffect } from 'react';
import { MoreMenu } from './MoreMenu';

interface HeaderProps {
  onOpenSettings: () => void;
  onOpenFeedback: () => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTermsOfUse: () => void;
  onOpenMyApps: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSettings, 
  onOpenFeedback, 
  onOpenPrivacyPolicy, 
  onOpenTermsOfUse, 
  onOpenMyApps 
}) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the menu is open and the click target is NOT inside the menu ref
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMoreMenuOpen(false);
      }
    };

    if (isMoreMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreMenuOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMoreMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-[100] transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Title/Logo Area */}
        <div className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
                সকল পত্রিকা
            </h1>
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          {/* Settings Button */}
          <button
            type="button"
            onClick={onOpenSettings}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800 transition-colors"
            aria-label="Open settings"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>

          {/* More Menu Button */}
           <div className="relative" ref={menuRef}>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-800 transition-colors cursor-pointer"
                    aria-label="More options"
                    aria-haspopup="true"
                    aria-expanded={isMoreMenuOpen}
                    id="more-options-button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01" />
                    </svg>
                </button>
                {isMoreMenuOpen && (
                    <MoreMenu 
                        onClose={() => setIsMoreMenuOpen(false)} 
                        onOpenFeedback={onOpenFeedback} 
                        onOpenPrivacyPolicy={onOpenPrivacyPolicy} 
                        onOpenTermsOfUse={onOpenTermsOfUse} 
                        onOpenMyApps={onOpenMyApps} 
                    />
                )}
            </div>
        </div>
      </div>
    </header>
  );
};
