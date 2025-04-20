import React, { useState } from 'react';
import { Play, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { CATEGORIES, ANIMATIONS } from '../data/games';
import Footer from '../components/Footer';
import { trackGameClick } from '../utils/analytics';

interface Game {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  players: string;
  playLink: string;
  new?: boolean;
  newupdate?: boolean;
  featured?: boolean;
  views?: string;
  sourceLink?: string;
}

interface Animation {
  id: string;
  title: string;
  category: string;
  image: string;
  views: string;
  viewers: string;
  viewLink: string;
  sourceLink?: string;
}

// Union type for display items
type DisplayItem =
  | { type: 'game'; id: string; title: string; category: string; image: string; rating: number; players: string; playLink: string; new?: boolean; newupdate?: boolean; featured?: boolean; views?: string; sourceLink?: string }
  | { type: 'animation'; id: string; title: string; category: string; image: string; views: string; viewers: string; viewLink: string; sourceLink?: string };

interface GamesPageProps {
  searchResults: Game[];
  searchQuery: string;
}

const GamesPage: React.FC<GamesPageProps> = ({ searchResults, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Combine games and animations for search results when searchQuery is non-empty
  const combinedResults: DisplayItem[] = searchQuery
    ? [
        ...searchResults.map((game) => ({ ...game, type: 'game' as const })),
        ...ANIMATIONS.map((animation) => ({ ...animation, type: 'animation' as const })),
      ].filter((item) =>
        selectedCategory === 'All' || item.category === selectedCategory
      ).filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Filter games only for non-search state
  const filteredGames = searchResults.filter((game) =>
    selectedCategory === 'All' || game.category === selectedCategory
  );

  // Choose which data to display based on searchQuery
  const displayItems: DisplayItem[] = searchQuery ? combinedResults : filteredGames.map((game) => ({ ...game, type: 'game' }));

  const glowVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.6, 1, 0.6],
      boxShadow: [
        '0 0 8px rgba(255, 255, 255, 0.4), 0 0 12px currentColor',
        '0 0 12px rgba(255, 255, 255, 0.6), 0 0 18px currentColor',
        '0 0 8px rgba(255, 255, 255, 0.4), 0 0 12px currentColor',
      ],
      transition: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games/Animations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {displayItems.map((item, index) => {
            // Determine star color for games only
            const starColor = item.type === 'game' ? (item.new ? 'text-amber-400' : item.newupdate ? 'text-indigo-600' : null) : null;
            return (
              <motion.div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={searchQuery ? { opacity: 0, y: 20 } : {}}
                animate={searchQuery ? { opacity: 1, y: 0 } : {}}
                transition={searchQuery ? { duration: 0.3, delay: index * 0.1 } : {}}
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 px-2 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.category}
                  </span>
                </div>
                {/* Info */}
                <div className="p-4 sm:p-5 space-y-3">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-500 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm">
                    {'rating' in item ? (
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-gray-600 dark:text-gray-300">{item.rating}</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-gray-600 dark:text-gray-300">{item.views}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-blue-400 mr-1" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {'players' in item ? item.players : item.viewers}
                      </span>
                    </div>
                  </div>
                  <a
                    href={'playLink' in item ? item.playLink : item.viewLink}
                    className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
                    onClick={() => trackGameClick(item.title)}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    {'playLink' in item ? 'Play' : 'View'}
                  </a>
                </div>
                {/* Star Icon */}
                {starColor && (
                  <motion.div
                    className="absolute top-1 left-1 rounded-full bg-gradient-to-br from-white/30 to-transparent p-1.5 shadow-md"
                    animate={glowVariants}
                    style={{ color: starColor === 'text-amber-400' ? '#f59e0b' : '#4f46e5' }}
                  >
                    <Star className={`h-5 w-5 ${starColor} fill-current`} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {displayItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No games or animations found for "{searchQuery}" in category "{selectedCategory}".
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default GamesPage;