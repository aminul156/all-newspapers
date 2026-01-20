
import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { NewsGrid } from './components/NewsGrid';
import { SplashScreen } from './components/SplashScreen';
import { Search } from './components/Search';
import { SettingsModal } from './components/SettingsModal';
import { FeedbackModal } from './components/FeedbackModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsOfUseModal } from './components/TermsOfUseModal';
import { MyAppsModal } from './components/MyAppsModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { NEWS_SOURCES, NATIONAL_DAILIES, ONLINE_PORTALS, INTERNATIONAL_BANGLA_PORTALS, INTERNATIONAL_NEWS_PORTALS, EPAPERS, TV_CHANNELS, ENGLISH_NEWSPAPERS, BUSINESS_NEWS, LOCAL_NEWS, CHATTOGRAM_DIVISION_NEWS, BARISHAL_DIVISION_NEWS, SYLHET_DIVISION_NEWS, DHAKA_DIVISION_NEWS, MYMENSINGH_DIVISION_NEWS, KHULNA_DIVISION_NEWS, RAJSHAHI_DIVISION_NEWS, MAGAZINES, BLOGS, TECHNOLOGY, JOB_SITES, SPORTS, EDUCATION } from './constants';
import type { NewsSource } from './types';

type View = 'categories' | 'all' | 'favorites';
type TextSize = 'sm' | 'base' | 'lg';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('darkMode', false);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [currentView, setCurrentView] = useState<View>('categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfUseOpen, setIsTermsOfUseOpen] = useState(false);
  const [isMyAppsOpen, setIsMyAppsOpen] = useState(false);
  const [textSize, setTextSize] = useLocalStorage<TextSize>('textSize', 'base');
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const sizeMap: Record<TextSize, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
    document.documentElement.classList.remove('text-sm', 'text-base', 'text-lg');
    document.documentElement.classList.add(sizeMap[textSize]);
  }, [textSize]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
            console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
        });
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
  };

  const filteredNews = useMemo<NewsSource[]>(() => {
    const sourceList = currentView === 'favorites'
      ? NEWS_SOURCES.filter(source => favorites.includes(source.id))
      : NEWS_SOURCES;
      
    if (!searchQuery) {
        return sourceList;
    }

    return sourceList.filter(source =>
        source.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentView, favorites, searchQuery]);
  
  const favoriteCount = favorites.length;

  const nationalFiltered = useMemo(() => filteredNews.filter(source => NATIONAL_DAILIES.some(s => s.id === source.id)), [filteredNews]);
  const epapersFiltered = useMemo(() => filteredNews.filter(source => EPAPERS.some(s => s.id === source.id)), [filteredNews]);
  const onlineFiltered = useMemo(() => filteredNews.filter(source => ONLINE_PORTALS.some(s => s.id === source.id)), [filteredNews]);
  const tvChannelsFiltered = useMemo(() => filteredNews.filter(source => TV_CHANNELS.some(s => s.id === source.id)), [filteredNews]);
  const englishFiltered = useMemo(() => filteredNews.filter(source => ENGLISH_NEWSPAPERS.some(s => s.id === source.id)), [filteredNews]);
  const businessNewsFiltered = useMemo(() => filteredNews.filter(source => BUSINESS_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const localFiltered = useMemo(() => filteredNews.filter(source => LOCAL_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const chattogramDivisionFiltered = useMemo(() => filteredNews.filter(source => CHATTOGRAM_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const barishalDivisionFiltered = useMemo(() => filteredNews.filter(source => BARISHAL_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const sylhetDivisionFiltered = useMemo(() => filteredNews.filter(source => SYLHET_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const dhakaDivisionFiltered = useMemo(() => filteredNews.filter(source => DHAKA_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const mymensinghDivisionFiltered = useMemo(() => filteredNews.filter(source => MYMENSINGH_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const khulnaDivisionFiltered = useMemo(() => filteredNews.filter(source => KHULNA_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const rajshahiDivisionFiltered = useMemo(() => filteredNews.filter(source => RAJSHAHI_DIVISION_NEWS.some(s => s.id === source.id)), [filteredNews]);
  const magazinesFiltered = useMemo(() => filteredNews.filter(source => MAGAZINES.some(s => s.id === source.id)), [filteredNews]);
  const blogsFiltered = useMemo(() => filteredNews.filter(source => BLOGS.some(s => s.id === source.id)), [filteredNews]);
  const technologyFiltered = useMemo(() => filteredNews.filter(source => TECHNOLOGY.some(s => s.id === source.id)), [filteredNews]);
  const jobSitesFiltered = useMemo(() => filteredNews.filter(source => JOB_SITES.some(s => s.id === source.id)), [filteredNews]);
  const sportsFiltered = useMemo(() => filteredNews.filter(source => SPORTS.some(s => s.id === source.id)), [filteredNews]);
  const educationFiltered = useMemo(() => filteredNews.filter(source => EDUCATION.some(s => s.id === source.id)), [filteredNews]);
  const internationalBanglaFiltered = useMemo(() => filteredNews.filter(source => INTERNATIONAL_BANGLA_PORTALS.some(s => s.id === source.id)), [filteredNews]);
  const internationalNewsFiltered = useMemo(() => filteredNews.filter(source => INTERNATIONAL_NEWS_PORTALS.some(s => s.id === source.id)), [filteredNews]);

  if (isLoading) {
    return <SplashScreen />;
  }
  
  const renderContent = () => {
    if (currentView === 'favorites' && favorites.length === 0) {
      return (
        <div className="text-center py-20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <p className="text-xl text-gray-500 dark:text-gray-400">No favorites yet</p>
          <p className="text-gray-400 dark:text-gray-500 mt-2">Mark newspapers as favorites to see them here.</p>
        </div>
      );
    }

    if (currentView === 'favorites' || currentView === 'all' || searchQuery) {
        // If searching or in favorites view, just show the grid of filtered results
        if (filteredNews.length === 0) {
             return (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 dark:text-gray-400">No newspapers found</p>
                </div>
             )
        }
        return <NewsGrid newsSources={filteredNews} favorites={favorites} toggleFavorite={toggleFavorite} />;
    }

    // Default 'categories' view with sections
    const categories = [
        { title: 'National Dailies', data: nationalFiltered },
        { title: 'ePapers', data: epapersFiltered },
        { title: 'Online Portals', data: onlineFiltered },
        { title: 'TV Channels', data: tvChannelsFiltered },
        { title: 'English Newspapers', data: englishFiltered },
        { title: 'Business News', data: businessNewsFiltered },
        { title: 'International (Bangla)', data: internationalBanglaFiltered },
        { title: 'International (World)', data: internationalNewsFiltered },
        { title: 'Sports', data: sportsFiltered },
        { title: 'Technology', data: technologyFiltered },
        { title: 'Education', data: educationFiltered },
        { title: 'Job Sites', data: jobSitesFiltered },
        { title: 'Magazines', data: magazinesFiltered },
        { title: 'Blogs', data: blogsFiltered },
        { title: 'Local News', data: localFiltered },
        { title: 'Dhaka Division', data: dhakaDivisionFiltered },
        { title: 'Chattogram Division', data: chattogramDivisionFiltered },
        { title: 'Rajshahi Division', data: rajshahiDivisionFiltered },
        { title: 'Khulna Division', data: khulnaDivisionFiltered },
        { title: 'Sylhet Division', data: sylhetDivisionFiltered },
        { title: 'Barishal Division', data: barishalDivisionFiltered },
        { title: 'Mymensingh Division', data: mymensinghDivisionFiltered },
    ];

    return (
        <div className="space-y-8">
            {categories.map((category) => {
                if (category.data.length === 0) return null;
                return (
                    <div key={category.title}>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4 border-l-4 border-primary pl-3">
                            {category.title}
                        </h2>
                        <NewsGrid newsSources={category.data} favorites={favorites} toggleFavorite={toggleFavorite} />
                    </div>
                );
            })}
        </div>
    );
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200 flex flex-col ${isFullscreen ? 'h-screen overflow-hidden' : ''}`}>
        <Header 
            onOpenSettings={() => setIsSettingsOpen(true)}
            onOpenFeedback={() => setIsFeedbackOpen(true)} 
            onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)}
            onOpenTermsOfUse={() => setIsTermsOfUseOpen(true)}
            onOpenMyApps={() => setIsMyAppsOpen(true)}
        />
        
        <main className={`flex-grow container mx-auto px-4 sm:px-6 py-6 overflow-y-auto ${isFullscreen ? 'h-full' : ''}`}>
             <div className="mb-6 space-y-4">
                <Search query={searchQuery} onSearch={setSearchQuery} />
                
                {/* View Toggles */}
                 <div className="flex flex-wrap justify-center gap-3">
                    <button
                        onClick={() => setCurrentView('categories')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            currentView === 'categories'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        Sections
                    </button>
                    <button
                        onClick={() => setCurrentView('all')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            currentView === 'all'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        All
                    </button>
                     <button
                        onClick={() => setCurrentView('favorites')}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2 ${
                            currentView === 'favorites'
                                ? 'bg-primary text-white shadow-md'
                                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`}
                    >
                        <span>Favorites</span>
                         {favoriteCount > 0 && (
                            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {favoriteCount}
                            </span>
                        )}
                    </button>
                 </div>
             </div>

             {renderContent()}
        </main>
        
        {/* Modals */}
        <SettingsModal 
            isOpen={isSettingsOpen} 
            onClose={() => setIsSettingsOpen(false)}
            isDarkMode={isDarkMode}
            toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
            textSize={textSize}
            setTextSize={setTextSize}
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
        />
        <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        <PrivacyPolicyModal isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
        <TermsOfUseModal isOpen={isTermsOfUseOpen} onClose={() => setIsTermsOfUseOpen(false)} />
        <MyAppsModal isOpen={isMyAppsOpen} onClose={() => setIsMyAppsOpen(false)} />
        
    </div>
  );
};

export default App;
