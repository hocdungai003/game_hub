import React, { useState, useRef, useEffect } from 'react';
import { GamepadIcon, Search, Moon, Sun, Menu } from 'lucide-react'; // Thêm Menu icon
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import AnimationPage from './pages/AnimationPage';
import Footer from './components/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true); // Mặc định là true (dark mode)
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage('games');
  };

  const handleSearchFocus = () => {
    setCurrentPage('games');
    if (searchInputRef.current) {
      searchInputRef.current.select();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-1">
          {/* Sidebar - ẩn trên mobile */}
          <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} isOpen={isSidebarOpen} onClose={toggleSidebar} />

          <div className="flex-1">
            <header className="fixed top-0 right-0 left-0 md:left-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-20">
              <div className="flex items-center justify-between h-full px-6">
                {/* Nút Menu trên mobile */}
                <button
                  onClick={toggleSidebar}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </button>

                {/* Logo */}
                <div className="flex items-center group cursor-pointer" onClick={() => setCurrentPage('home')}>
                  <GamepadIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 transform group-hover:scale-110 transition-transform" />
                  <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 hidden md:inline">
                    GameHub
                  </span>
                </div>

                {/* Search */}
                <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search games..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={handleSearchFocus}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-white dark:hover:bg-gray-700"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-400 pointer-events-none">
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-md">⏎</kbd>
                    </div>
                  </div>
                </form>

                {/* Theme Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <Sun className="h-6 w-6 text-yellow-500 transform group-hover:rotate-45 transition-transform" />
                  ) : (
                    <Moon className="h-6 w-6 text-gray-600 transform group-hover:-rotate-12 transition-transform" />
                  )}
                </button>
              </div>
            </header>

            <main className="pt-16 md:ml-16 flex-1">
              {currentPage === 'home' ? (
                <HomePage />
              ) : currentPage === 'games' ? (
                <GamesPage searchQuery={searchQuery} />
              ) : (
                <AnimationPage searchQuery={searchQuery} />
              )}
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;