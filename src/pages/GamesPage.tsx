// GamesPage.tsx
import React, { useState } from 'react';
import { Play, Star, Users } from 'lucide-react';
import { CATEGORIES, GAMES } from '../data/games';

interface GamesPageProps {
  searchQuery: string;
}

const GamesPage: React.FC<GamesPageProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredGames = GAMES.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
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

      {/* Games Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Game Image */}
            <div className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="absolute top-3 right-3 px-2 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {game.category}
              </span>
            </div>
            {/* Game Info */}
            <div className="p-4 sm:p-5 space-y-3">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white line-clamp-1 group-hover:text-indigo-500 transition-colors">
                {game.title}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-gray-600 dark:text-gray-300">{game.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-gray-600 dark:text-gray-300">{game.players}</span>
                </div>
              </div>
              <a
                href={game.playLink}
                className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
              >
                <Play className="h-4 w-4 mr-1" />
                Play
              </a>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-2 -left-2 h-6 w-6 bg-indigo-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredGames.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No games found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default GamesPage;