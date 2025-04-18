import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME, GAMES } from '../data/games';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const recommendedGames = GAMES.slice(0, 10);

  // Animation variants for featured section
  const featuredTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const featuredVideoVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.02, 1],
      transition: { repeat: Infinity, duration: 2.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)',
      background: 'linear-gradient(to right, #2563eb, #4f46e5)',
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      boxShadow: '0 2px 5px rgba(59, 130, 246, 0.1)',
      transition: { duration: 0.1 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const sparkleTrailVariants = {
    animate: {
      x: [0, 40, 80],
      y: [0, -20, 0],
      opacity: [0, 0.8, 0],
      transition: { duration: 2, repeat: Infinity, delay: Math.random() * 1.5 },
    },
  };

  const starfieldVariants = {
    animate: {
      opacity: [0, 0.8, 0],
      x: [0, 10],
      y: [0, -5],
      transition: { duration: 3, repeat: Infinity, delay: Math.random() * 2 },
    },
  };

  const orbVariants = {
    animate: {
      x: [0, 30, 0],
      y: [0, -30, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const waveVariants = {
    animate: {
      opacity: [0.15, 0.3, 0.15],
      x: [-10, 10],
      transition: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
    },
  };

  const holographicVariants = {
    animate: {
      color: ['#ffffff', '#60a5fa', '#a78bfa', '#ffffff'],
      textShadow: [
        '0 0 3px rgba(59, 130, 246, 0.4)',
        '0 0 6px rgba(147, 51, 234, 0.4)',
        '0 0 3px rgba(59, 130, 246, 0.4)',
      ],
      transition: { repeat: Infinity, duration: 5 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
      {/* Featured Section */}
      <section className="relative pt-8 pb-8 md:pt-10 md:pb-10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-20">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-500/20 to-purple-500/20"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], opacity: [0.7, 0.9, 0.7] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 200%' }}
          ></motion.div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-300/15 to-purple-300/15"
            variants={waveVariants}
            animate="animate"
          ></motion.div>
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] bg-blue-400/30 rounded-full blur-2xl top-[15%] left-[15%]"
              animate={{
                x: [-10, 10],
                y: [-10, 10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
            ></motion.div>
            <motion.div
              className="absolute w-[120px] h-[120px] sm:w-[250px] sm:h-[250px] bg-indigo-400/30 rounded-full blur-2xl bottom-[20%] right-[20%]"
              animate={{
                x: [10, -10],
                y: [10, -10],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            ></motion.div>
          </div>
          {/* Starfield Effect */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute bg-white/50 dark:bg-white/30 rounded-full w-[1px] h-[1px]"
                variants={starfieldVariants}
                animate="animate"
                style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
              ></motion.div>
            ))}
          </div>
          {/* Sparkle Trail */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`trail-${i}`}
                className={`absolute rounded-full w-1.5 h-1.5 ${
                  ['bg-amber-300/50', 'bg-blue-300/50', 'bg-purple-300/50'][i % 3]
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
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <motion.div
              className="w-full space-y-3 text-center"
              initial="hidden"
              animate="visible"
              variants={featuredTextVariants}
            >
              <motion.div className="flex items-center justify-center space-x-2" variants={textChildVariants}>
                <motion.div variants={iconVariants}>
                  <Trophy className="h-4 w-4 text-amber-400" />
                </motion.div>
                <span className="text-amber-400 font-medium uppercase tracking-wider text-xs">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-2xl font-bold text-white dark:text-white leading-tight"
                variants={textChildVariants}
                animate={holographicVariants}
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
                  <motion.div variants={iconVariants}>
                    <Star className="h-3 w-3 text-amber-400 mr-1" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-white text-xs">{FEATURED_GAME.rating}</span>
                </div>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Users className="h-3 w-3 text-blue-400 mr-1" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-white text-xs">{FEATURED_GAME.players}</span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center justify-center w-full max-w-xs px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-medium rounded-full shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Play className="h-4 w-4 mr-1.5" />
                Chơi ngay
              </motion.a>
            </motion.div>
            <motion.div
              className="relative w-full max-w-sm group"
              initial="hidden"
              animate="visible"
              variants={featuredVideoVariants}
            >
              <motion.div
                className="absolute -inset-1 bg-blue-400/15 rounded-lg blur-lg group-hover:bg-blue-400/25"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[160px] object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </motion.div>
          </div>

          {/* Desktop Featured Section */}
          <div className="hidden lg:grid grid-cols-2 gap-6 items-center">
            <motion.div
              className="space-y-4 z-10"
              initial="hidden"
              animate="visible"
              variants={featuredTextVariants}
            >
              <motion.div className="flex items-center space-x-2" variants={textChildVariants}>
                <motion.div variants={iconVariants}>
                  <Trophy className="h-5 w-5 text-amber-400" />
                </motion.div>
                <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">
                  Trò chơi nổi bật
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl font-bold text-white dark:text-white leading-tight"
                variants={textChildVariants}
                animate={holographicVariants}
              >
                {FEATURED_GAME.title}
              </motion.h1>
              <motion.p
                className="text-base text-gray-600 dark:text-gray-300 max-w-sm"
                variants={textChildVariants}
              >
                {FEATURED_GAME.description}
              </motion.p>
              <motion.div className="flex items-center space-x-6" variants={textChildVariants}>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Star className="h-4 w-4 text-amber-400 mr-1" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-white text-sm">{FEATURED_GAME.rating}</span>
                </div>
                <div className="flex items-center">
                  <motion.div variants={iconVariants}>
                    <Users className="h-4 w-4 text-blue-400 mr-1" />
                  </motion.div>
                  <span className="text-gray-700 dark:text-white text-sm">{FEATURED_GAME.players}</span>
                </div>
              </motion.div>
              <motion.a
                href={FEATURED_GAME.playLink}
                className="inline-flex items-center justify-center w-56 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-base font-medium rounded-full shadow-md"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Play className="h-5 w-5 mr-1.5" />
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
                className="absolute -inset-1.5 bg-blue-400/15 rounded-xl blur-lg group-hover:bg-blue-400/25"
                animate={{
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ repeat: Infinity, duration: 3 }}
              ></motion.div>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[350px] object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <source src={FEATURED_GAME.video} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommended Games Section */}
      <section className="py-10 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Đề xuất game
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendedGames.map((game) => (
              <motion.div
                key={game.id}
                className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <motion.img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-44 object-cover group-hover:opacity-90"
                    transition={{ duration: 0.2 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.div>
                  <motion.span
                    className="absolute top-1.5 right-1.5 px-1.5 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full"
                    initial={{ opacity: 0, x: 5 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {game.category}
                  </motion.span>
                </div>
                <div className="p-3 space-y-2">
                  <motion.h3
                    className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-400"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {game.title}
                  </motion.h3>
                  <div className="flex items-center">
                    <motion.div variants={iconVariants}>
                      <Star className="h-3 w-3 text-amber-400 mr-1" />
                    </motion.div>
                    <span className="text-gray-600 dark:text-gray-300 text-xs">{game.rating}</span>
                  </div>
                </div>
                <motion.a
                  href={game.playLink}
                  className="relative flex items-center justify-center w-full px-3 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-medium shadow-sm"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Play className="h-4 w-4 mr-1.5" />
                  Chơi ngay
                </motion.a>
                <motion.div
                  className="absolute top-1.5 left-1.5 h-2 w-2 bg-amber-400 rounded-full"
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