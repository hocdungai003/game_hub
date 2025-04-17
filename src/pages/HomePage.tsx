import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME, GAMES } from '../data/games';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const recommendedGames = GAMES.slice(0, 10);

  // Animation variants for featured section
  const featuredTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.15 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const featuredVideoVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const glowVariants = {
    animate: {
      opacity: [0.2, 0.6, 0.2],
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 3 },
    },
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
      background: 'linear-gradient(to right, #2563eb, #4f46e5)',
      border: '2px solid rgba(59, 130, 246, 0.5)',
      transition: { duration: 0.3 },
    },
    tap: {
      y: 0,
      boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)',
      border: '2px solid rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const sparkleTrailVariants = {
    animate: {
      x: [0, 60, 120],
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      transition: { duration: 2.5, repeat: Infinity, delay: Math.random() * 2 },
    },
  };

  const starfieldVariants = {
    animate: {
      opacity: [0, 1, 0],
      x: [0, 20],
      y: [0, -10],
      transition: { duration: 4, repeat: Infinity, delay: Math.random() * 3 },
    },
  };

  const orbVariants = {
    animate: {
      x: [0, 50, 0],
      y: [0, -50, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const waveVariants = {
    animate: {
      opacity: [0.2, 0.4, 0.2],
      x: [-20, 20],
      transition: { repeat: Infinity, duration: 10, ease: 'easeInOut' },
    },
  };

  const holographicVariants = {
    animate: {
      color: ['#ffffff', '#60a5fa', '#a78bfa', '#ffffff'],
      textShadow: [
        '0 0 5px rgba(59, 130, 246, 0.5)',
        '0 0 10px rgba(147, 51, 234, 0.5)',
        '0 0 5px rgba(59, 130, 246, 0.5)',
      ],
      transition: { repeat: Infinity, duration: 6 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
      {/* Featured Section - Compact with enhanced animations */}
      <section className="relative pt-10 pb-10 md:pt-12 md:pb-12 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-indigo-500/30 to-purple-500/30"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 200%' }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-purple-300/20"
            variants={waveVariants}
            animate="animate"
          ></motion.div>
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-blue-400/40 rounded-full blur-3xl top-[10%] left-[10%]"
              animate={{
                x: [-20, 20],
                y: [-15, 15],
                rotate: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute w-[180px] h-[180px] sm:w-[350px] sm:h-[350px] bg-indigo-400/40 rounded-full blur-3xl bottom-[15%] right-[15%]"
              animate={{
                x: [20, -20],
                y: [15, -15],
                rotate: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="hidden sm:block absolute w-[300px] h-[300px] bg-purple-400/35 rounded-full blur-3xl top-[30%] left-[50%]"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            ></motion.div>
          </div>
          {/* Starfield Effect */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-white/60 dark:bg-white/40 rounded-full w-[1px] h-[1px]"
                variants={starfieldVariants}
                animate="animate"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              ></motion.div>
            ))}
          </div>
          {/* Sparkle Trail */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className={`absolute rounded-full w-${[2, 3, 1.5][i % 3]} h-${[2, 3, 1.5][i % 3]} ${
                  ['bg-amber-300/60', 'bg-blue-300/60', 'bg-purple-300/60'][i % 3]
                }`}
                variants={sparkleTrailVariants}
                animate="animate"
                style={{ top: `${20 + i * 15}%`, left: `${10 + i * 10}%` }}
              ></motion.div>
            ))}
          </div>
          {/* Floating Orbs */}
          <div className="absolute inset-0 hidden sm:block">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`orb-${i}`}
                className="absolute bg-blue-300/50 dark:bg-blue-200/50 rounded-full w-3 h-3"
                variants={orbVariants}
                animate="animate"
                style={{
                  top: `${40 + i * 10}%`,
                  left: `${30 + i * 15}%`,
                  transform: `translate(-50%, -50%)`,
                }}
              ></motion.div>
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Mobile Featured Section */}
          <div className="lg:hidden flex flex-col items-center space-y-6">
            <motion.div
              className="w-full space-y-4 text-center"
              initial="hidden"
              animate="visible"
              variants={featuredTextVariants}
            >
              <motion.div className="flex items-center justify-center space-x-2" variants={textChildVariants}>
                <motion.div variants={iconVariants}>
                  <Trophy className="h-5 w-5 text-amber-400 animate-bounce" />
                  <motion.div
                    className="absolute -top-1 -right-1 bg-amber-300/50 rounded-full w-2 h-2"
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  ></motion.div>
                </motion.div>
                <span className="text-amber-400 font-semibold uppercase tracking-widest text-sm">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-3xl font-extrabold text-white dark:text-white leading-tight"
                variants={textChildVariants}
                animate={holographicVariants}
              >
                {FEATURED_GAME.title}
              </motion.h1>
              <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 max-w-sm mx-auto"
                variants={textChildVariants}
              >
                {FEATURED_GAME.description}
              </motion.p>
              <motion.div className="flex items-center justify-center space-x-6" variants={textChildVariants}>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Star className="h-4 w-4 text-amber-400 mr-1 animate-pulse" />
                    <motion.div
                      className="absolute -top-1 -right-1 bg-amber-300/50 rounded-full w-2 h-2"
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    ></motion.div>
                  </motion.div>
                  <span className="text-gray-700 dark:text-white font-medium text-sm">
                    {FEATURED_GAME.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Users className="h-4 w-4 text-blue-400 mr-1 animate-spin-slow" />
                    <motion.div
                      className="absolute -top-1 -right-1 bg-blue-300/50 rounded-full w-2 h-2"
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    ></motion.div>
                  </motion.div>
                  <span className="text-gray-700 dark:text-white font-medium text-sm">
                    {FEATURED_GAME.players}
                  </span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center justify-center w-full max-w-sm px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-base font-semibold rounded-full shadow-lg"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Play className="h-5 w-5 mr-2" />
                </motion.div>
                Chơi ngay
              </motion.a>
            </motion.div>
            <motion.div
              className="relative w-full max-w-md group"
              initial="hidden"
              animate="visible"
              variants={featuredVideoVariants}
            >
              <motion.div
                className="absolute -inset-2 bg-blue-400/20 rounded-xl blur-xl group-hover:bg-blue-400/30"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(59, 130, 246, 0.3)',
                    '0 0 25px rgba(59, 130, 246, 0.5)',
                    '0 0 15px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              ></motion.div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[180px] object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-400"
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
                <motion.div variants={iconVariants}>
                  <Trophy className="h-6 w-6 text-amber-400 animate-bounce" />
                  <motion.div
                    className="absolute -top-1 -right-1 bg-amber-300/50 rounded-full w-2 h-2"
                    animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  ></motion.div>
                </motion.div>
                <span className="text-amber-400 font-semibold uppercase tracking-widest text-base">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-5xl font-extrabold text-white dark:text-white leading-tight"
                variants={textChildVariants}
                animate={holographicVariants}
              >
                {FEATURED_GAME.title}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 max-w-md"
                variants={textChildVariants}
              >
                {FEATURED_GAME.description}
              </motion.p>
              <motion.div className="flex items-center space-x-8" variants={textChildVariants}>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Star className="h-5 w-5 text-amber-400 mr-1.5 animate-pulse" />
                    <motion.div
                      className="absolute -top-1 -right-1 bg-amber-300/50 rounded-full w-2 h-2"
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    ></motion.div>
                  </motion.div>
                  <span className="text-gray-700 dark:text-white font-medium">
                    {FEATURED_GAME.rating}
                  </span>
                </div>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Users className="h-5 w-5 text-blue-400 mr-1.5 animate-spin-slow" />
                    <motion.div
                      className="absolute -top-1 -right-1 bg-blue-300/50 rounded-full w-2 h-2"
                      animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    ></motion.div>
                  </motion.div>
                  <span className="text-gray-700 dark:text-white font-medium">
                    {FEATURED_GAME.players}
                  </span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center justify-center w-64 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-lg font-semibold rounded-full shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                >
                  <Play className="h-6 w-6 mr-2" />
                </motion.div>
                Chơi ngay
              </motion.a>
            </motion.div>
            <motion.div
              className="relative group"
              initial="hidden"
              animate="visible"
              variants={featuredVideoVariants}
            >
              <motion.div
                className="absolute -inset-3 bg-blue-400/20 rounded-2xl blur-xl group-hover:bg-blue-400/30"
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(59, 130, 246, 0.3)',
                    '0 0 25px rgba(59, 130, 246, 0.5)',
                    '0 0 15px rgba(59, 130, 246, 0.3)',
                  ],
                }}
                transition={{ repeat: Infinity, duration: 3.5 }}
              ></motion.div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-400"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Games Section - Unchanged */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Đề xuất game
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedGames.map((game) => (
              <motion.div
                key={game.id}
                className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover group-hover:opacity-95"
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  <motion.span
                    className="absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {game.category}
                  </motion.span>
                </div>
                <div className="p-4 space-y-3">
                  <motion.h3
                    className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-400"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {game.title}
                  </motion.h3>
                  <div className="flex items-center">
                    <motion.div variants={iconVariants}>
                      <Star className="h-4 w-4 text-amber-400 mr-1 animate-pulse" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{game.rating}</span>
                  </div>
                </div>
                <motion.a
                  href={game.playLink}
                  className="relative flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-base font-semibold shadow-md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                  >
                    <Play className="h-5 w-5 mr-2" />
                  </motion.div>
                  Chơi ngay
                </motion.a>
                <motion.div
                  className="absolute top-2 left-2 h-3 w-3 bg-amber-400 rounded-full"
                  animate={glowVariants}
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