import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME, GAMES } from '../data/games';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const recommendedGames = GAMES.slice(0, 10);

  // Animation variants cho featured section
  const featuredTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const featuredVideoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const glowVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.4, 0.3],
      transition: { repeat: Infinity, duration: 4 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 0 10px rgba(99, 102, 241, 0.4)' },
    tap: { scale: 0.95 },
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section - Tối ưu cho mobile */}
      <section className="relative pt-10 pb-10 overflow-hidden md:pt-16 md:pb-16">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/25 via-purple-600/25 to-pink-500/25"></div>
          <div className="absolute inset-0 animate-aurora">
            <div className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-indigo-500/30 rounded-full blur-3xl animate-float top-[10%] left-[10%]"></div>
            <div className="absolute w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] bg-purple-500/30 rounded-full blur-3xl animate-float-slow bottom-[15%] right-[15%]"></div>
            <div className="hidden sm:block absolute w-[300px] h-[300px] bg-pink-500/25 rounded-full blur-3xl animate-float-fast top-[30%] left-[50%]"></div>
          </div>
          {/* Particle Sparkles - Chỉ trên desktop */}
          <div className="absolute inset-0 hidden sm:block">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/40 dark:bg-white/20 rounded-full w-1 h-1 animate-sparkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Mobile Featured Section */}
          <div className="lg:hidden flex flex-col items-center space-y-5">
            <motion.div
              className="w-full space-y-3 text-center"
              initial="hidden"
              animate="visible"
              variants={featuredTextVariants}
            >
              <motion.div className="flex items-center justify-center space-x-2" variants={textChildVariants}>
                <Trophy className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 font-semibold uppercase tracking-wider text-xs">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight"
                variants={textChildVariants}
              >
                {FEATURED_GAME.title}
              </motion.h1>
              <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 max-w-xs mx-auto"
                variants={textChildVariants}
              >
                {FEATURED_GAME.description}
              </motion.p>
              <motion.div className="flex items-center justify-center space-x-4" variants={textChildVariants}>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" />
                  <span className="text-gray-700 dark:text-white font-medium text-xs">
                    {FEATURED_GAME.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-3 w-3 text-blue-400 mr-1" />
                  <span className="text-gray-700 dark:text-white font-medium text-xs">
                    {FEATURED_GAME.players}
                  </span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg shadow-sm"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Play className="h-4 w-4 mr-1" />
                Chơi ngay
              </motion.a>
            </motion.div>
            <motion.div
              className="relative w-full max-w-sm group"
              initial="hidden"
              animate="visible"
              variants={featuredVideoVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl -z-10"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[180px] object-cover rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </motion.div>
          </div>

          {/* Desktop Featured Section */}
          <div className="hidden lg:grid grid-cols-2 gap-8 items-center">
            <motion.div
              className="space-y-6 z-10"
              initial="hidden"
              animate="visible"
              variants={featuredTextVariants}
            >
              <motion.div className="flex items-center space-x-3" variants={textChildVariants}>
                <Trophy className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold uppercase tracking-wider text-sm">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight relative animate-glow-underline"
                variants={textChildVariants}
              >
                {FEATURED_GAME.title}
              </motion.h1>
              <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-md" variants={textChildVariants}>
                {FEATURED_GAME.description}
              </motion.p>
              <motion.div className="flex items-center space-x-6" variants={textChildVariants}>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1.5" />
                  <span className="text-gray-700 dark:text-white font-medium text-sm">
                    {FEATURED_GAME.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-400 mr-1.5" />
                  <span className="text-gray-700 dark:text-white font-medium text-sm">
                    {FEATURED_GAME.players}
                  </span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base font-semibold rounded-xl shadow-lg animate-pulse-glow"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.span
                  className="flex items-center"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Play className="h-5 w-5 mr-2" />
                  Chơi ngay
                </motion.span>
              </motion.a>
            </motion.div>
            <motion.div
              className="relative group"
              initial="hidden"
              animate="visible"
              variants={featuredVideoVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl -z-10"></div>
              <div className="absolute -inset-2 bg-indigo-500/15 rounded-2xl -z-20 animate-vignette-pulse group-hover:bg-indigo-500/25 transition-colors"></div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl group-hover:scale-105 transition-all duration-500"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Games Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Đề xuất game
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recommendedGames.map((game) => (
              <motion.div
                key={game.id}
                className="group relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.span
                    className="absolute top-2 right-2 px-2 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {game.category}
                  </motion.span>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {game.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{game.rating}</span>
                    </div>
                    <motion.a
                      href={game.playLink}
                      className="flex items-center px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      Chơi
                    </motion.a>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-1 -left-1 h-4 w-4 bg-indigo-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;