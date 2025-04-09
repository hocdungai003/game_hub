// HomePage.tsx
import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME, GAMES } from '../data/games';

const HomePage: React.FC = () => {
  const recommendedGames = GAMES.slice(0, 3); // Take first 3 games as recommended

  return (
    <div className="p-6 mx-auto">
      {/* Featured Game */}
      <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8 group">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 mix-blend-multiply group-hover:opacity-75 transition-opacity duration-300"></div>
        <img
          src={FEATURED_GAME.image}
          alt={FEATURED_GAME.title}
          className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
          <div className="flex items-center space-x-2 mb-2">
            <Trophy className="h-5 w-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Featured Game</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-3">{FEATURED_GAME.title}</h1>
          <p className="text-gray-200 mb-4 max-w-2xl text-lg">{FEATURED_GAME.description}</p>
          <div className="flex items-center space-x-6 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span className="text-white">{FEATURED_GAME.rating}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-400 mr-1" />
              <span className="text-white">{FEATURED_GAME.players} Players</span>
            </div>
          </div>
          <a
            href={FEATURED_GAME.playLink}
            className="w-40 flex items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-xl shadow-indigo-500/25"
          >
            <Play className="h-6 w- mr-2" />
            Play Now
          </a>
        </div>
      </div>

      {/* Recommended Games */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recommended Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendedGames.map((game) => (
          <div
            key={game.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          >
            <div className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{game.title}</h3>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                  {game.category}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="text-gray-600 dark:text-gray-300">{game.rating}</span>
              </div>
              <a
                href={game.playLink}
                className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
              >
                <Play className="h-4 w-4 mr-1" />
                Play
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;