import React, { useState, useRef, useEffect } from 'react';
import { GamepadIcon, Search, Moon, Sun, Menu } from 'lucide-react';
import Fuse from 'fuse.js';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import AnimationPage from './pages/AnimationPage';
import Footer from './components/Footer';
import { initGA, logPageView } from './utils/analytics';
import { GAMES, ANIMATIONS, Game, type Animation } from './data/games';
import { normalizeVietnameseText } from './utils/normalizeText';
import { trackSearch } from './utils/analytics'

// Chuẩn hóa dữ liệu với các trường không dấu
const normalizedGames = GAMES.map((game) => ({
  ...game,
  normalizedTitle: normalizeVietnameseText(game.title),
  normalizedCategory: normalizeVietnameseText(game.category),
}));

const normalizedAnimations = ANIMATIONS.map((animation) => ({
  ...animation,
  normalizedTitle: normalizeVietnameseText(animation.title),
  normalizedCategory: normalizeVietnameseText(animation.category),
}));

function App() {
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  // Khởi tạo isDarkMode từ localStorage, mặc định là true nếu không có giá trị
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const [currentPage, setCurrentPage] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<(Game | Animation)[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Cấu hình Fuse.js
  const fuseOptions = {
    keys: ['normalizedTitle', 'normalizedCategory'],
    threshold: 0.2,
    includeScore: true,
    ignoreLocation: true,
  };

  // Khởi tạo Fuse.js với dữ liệu chuẩn hóa
  const fuseGames = new Fuse(normalizedGames, fuseOptions);
  const fuseAnimations = new Fuse(normalizedAnimations, fuseOptions);

  // Cập nhật localStorage và classList khi isDarkMode thay đổi
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Xử lý thay đổi truy vấn tìm kiếm
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const normalizedQuery = normalizeVietnameseText(query);
      const gameSuggestions = fuseGames.search(normalizedQuery, { limit: 3 }).map((result) => result.item);
      const animationSuggestions = fuseAnimations.search(normalizedQuery, { limit: 2 }).map((result) => result.item);
      setSuggestions([...gameSuggestions, ...animationSuggestions]);
      setShowSuggestions(true);
      // Debounce gửi sự kiện tìm kiếm
      const timeout = setTimeout(() => trackSearch(query), 1000);
      return () => clearTimeout(timeout);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Xử lý chọn gợi ý
  const handleSuggestionClick = (suggestion: Game | Animation) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    trackSearch(suggestion.title);
    setCurrentPage(suggestion instanceof Animation ? 'animations' : 'games');
  };

  // Ẩn gợi ý khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => !prev); // Thêm kiểu boolean cho prev
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    trackSearch(searchQuery.trim() || 'empty');
    setShowSuggestions(false);
    setCurrentPage('games');
  };

  const handleSearchFocus = () => {
    setCurrentPage('games');
    if (searchQuery.trim() && suggestions.length > 0) {
      setShowSuggestions(true);
    }
    if (searchInputRef.current) {
      searchInputRef.current.select();
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Hàm lấy kết quả tìm kiếm
  const getSearchResults = (): { games: Game[]; animations: Animation[] } => {
    if (!searchQuery.trim()) {
      return { games: GAMES, animations: ANIMATIONS };
    }

    const normalizedQuery = normalizeVietnameseText(searchQuery);
    const gameResults = fuseGames.search(normalizedQuery).map((result) => result.item);
    const animationResults = fuseAnimations.search(normalizedQuery).map((result) => result.item);

    return { games: gameResults, animations: animationResults };
  };

  const searchResults = getSearchResults();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-1">
          <Sidebar currentPage={currentPage} onNavigate={setCurrentPage} isOpen={isSidebarOpen} onClose={toggleSidebar} />
          <div className="flex-1">
            <header className="fixed top-0 right-0 left-0 md:left-40 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm z-20">
              <div className="flex items-center justify-between h-full px-6">
                <button
                  onClick={toggleSidebar}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                </button>
                <div className="flex items-center group cursor-pointer" onClick={() => setCurrentPage('home')}>
                  <GamepadIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400 transform group-hover:scale-110 transition-transform" />
                  <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400 hidden md:inline">
                    GameHub
                  </span>
                </div>
                <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
                  <div className="relative group">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search games..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={handleSearchFocus}
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent transition-all duration-200 ease-in-out hover:bg-white dark:hover:bg-gray-700"
                    />
                    <div className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-400 pointer-events-none">
                      <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded-md">⏎</kbd>
                    </div>
                    {showSuggestions && suggestions.length > 0 && (
                      <div
                        ref={suggestionsRef}
                        className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-30 max-h-60 overflow-y-auto"
                      >
                        {suggestions.map((suggestion) => (
                          <div
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-900 dark:text-white transition-colors"
                          >
                            <span className="font-medium">{suggestion.title}</span>
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({suggestion.category})</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </form>
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
            <main className="pt-16 md:ml-40 flex-1">
              {currentPage === 'home' ? (
                <HomePage />
              ) : currentPage === 'games' ? (
                <GamesPage searchResults={searchResults.games} searchQuery={searchQuery} />
              ) : (
                <AnimationPage searchResults={searchResults.animations} searchQuery={searchQuery} />
              )}
            </main>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;