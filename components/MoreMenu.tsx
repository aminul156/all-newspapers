
import React from 'react';

interface MoreMenuProps {
  onClose: () => void;
  onOpenFeedback: () => void;
  onOpenPrivacyPolicy: () => void;
  onOpenTermsOfUse: () => void;
  onOpenMyApps: () => void;
}

type MenuItem = {
    label: string;
    href?: string;
    action?: 'share' | 'feedback' | 'privacy' | 'terms' | 'myapps';
    target?: '_blank';
}

export const MoreMenu: React.FC<MoreMenuProps> = ({ onClose, onOpenFeedback, onOpenPrivacyPolicy, onOpenTermsOfUse, onOpenMyApps }) => {
  const menuItems: MenuItem[] = [
    { label: 'Feedback', action: 'feedback' },
    { label: 'Share this app', action: 'share' },
    { label: 'Like us on Facebook', href: 'https://www.facebook.com/aminul156cop', target: '_blank' },
    { label: 'About Us', href: '#' },
    { label: 'Contact Us', href: 'mailto:aminul156@gmail.com' },
    { label: 'Privacy Policy', action: 'privacy' },
    { label: 'Term of Use', action: 'terms' },
    { label: 'More apps', action: 'myapps' },
  ];

  const handleShare = async () => {
    const title = 'সকল পত্রিকা- All Newspaper';
    const text = 'Check out this great app for reading all Bangladeshi newspapers!';
    let url = '';

    try {
      const currentUrl = new URL(window.location.href);
      if (['http:', 'https:'].includes(currentUrl.protocol)) {
        url = currentUrl.href;
      }
    } catch (e) {
      console.warn("Could not create a valid URL for sharing.", e);
    }

    try {
      if (navigator.share) {
        const shareData: ShareData = { title, text };
        if (url) shareData.url = url;
        await navigator.share(shareData);
      } else if (navigator.clipboard && url) {
        await navigator.clipboard.writeText(url);
        alert('App link copied to clipboard!');
      } else {
        alert('Sharing is not supported on this browser.');
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'AbortError') {
        // Ignored
      } else {
        console.error('Error sharing:', err);
      }
    }
    
    onClose();
  };
  
  const handleItemClick = (e: React.MouseEvent<HTMLButtonElement>, item: MenuItem) => {
     if (item.action === 'share') {
        e.preventDefault();
        handleShare();
     } else if (item.action === 'feedback') {
        e.preventDefault();
        onOpenFeedback();
        onClose();
     } else if (item.action === 'privacy') {
        e.preventDefault();
        onOpenPrivacyPolicy();
        onClose();
     } else if (item.action === 'terms') {
        e.preventDefault();
        onOpenTermsOfUse();
        onClose();
     } else if (item.action === 'myapps') {
        e.preventDefault();
        onOpenMyApps();
        onClose();
     } else if (item.href) {
        if (item.target === '_blank') {
            window.open(item.href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = item.href;
        }
        onClose();
     } else {
        onClose();
     }
  };

  return (
    <div 
        className="absolute top-full right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-xl ring-1 ring-black ring-opacity-5 z-[50] origin-top-right animate-scale-in"
        role="menu" 
        aria-orientation="vertical" 
        aria-labelledby="more-options-button"
    >
      <div className="py-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={(e) => handleItemClick(e, item)}
            className="w-full text-left block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-100 dark:border-gray-700 last:border-0"
            role="menuitem"
          >
            {item.label}
          </button>
        ))}
      </div>
      <style>{`
        @keyframes scale-in {
            0% { opacity: 0; transform: scale(0.95) translateY(-10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scale-in {
            animation: scale-in 0.15s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
