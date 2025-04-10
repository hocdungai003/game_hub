// HomePage.tsx
import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME, GAMES } from '../data/games';

const HomePage: React.FC = () => {
  const recommendedGames = GAMES.slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Featured Game Info */}
            <div className="space-y-6 z-10">
              <div className="flex items-center space-x-3">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <span className="text-yellow-400 font-semibold uppercase tracking-wider">
                  Featured Game
                </span>
              </div>
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {FEATURED_GAME.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                {FEATURED_GAME.description}
              </p>
              <div className="flex items-center space-x-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-2" />
                  <span className="text-gray-700 dark:text-white font-medium">
                    {FEATURED_GAME.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-gray-700 dark:text-white font-medium">
                    {FEATURED_GAME.players} Players
                  </span>
                </div>
              </div>
              <a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Play className="h-6 w-6 mr-3" />
                Play Now
              </a>
            </div>
            {/* Featured Game Video */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl transform rotate-3 scale-105"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[450px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Games Section (giữ nguyên như trước) */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Recommended Games
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedGames.map((game) => (
              <div
                key={game.id}
                className="group relative bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="absolute top-3 right-3 px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {game.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-1" />
                      <span className="text-gray-600 dark:text-gray-300">{game.rating}</span>
                    </div>
                    <a
                      href={game.playLink}
                      className="flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Play
                    </a>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 h-6 w-6 bg-indigo-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;