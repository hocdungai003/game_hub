import React from 'react';
import { Play, Star, Trophy, Users } from 'lucide-react';
import { FEATURED_GAME } from '../../data/games';
import { motion } from 'framer-motion';

const FeaturedGame: React.FC = () => {
  const featuredTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const textChildVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const featuredVideoVariants = {
    hidden: { opacity: 0, x: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const glowVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.05, 1],
      transition: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 6px 15px rgba(59, 130, 246, 0.3)',
      background: 'linear-gradient(to right, #3b82f6, #7c3aed)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    tap: {
      scale: 0.95,
      boxShadow: '0 2px 5px rgba(59, 130, 246, 0.2)',
      transition: { duration: 0.2 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const sparkleTrailVariants = {
    animate: {
      x: [0, 50, 100],
      y: [0, -30, 0],
      opacity: [0, 1, 0],
      transition: { duration: 2.5, repeat: Infinity, delay: Math.random() * 1.5 },
    },
  };

  const starfieldVariants = {
    animate: {
      opacity: [0, 0.9, 0],
      x: [0, 15],
      y: [0, -10],
      transition: { duration: 3.5, repeat: Infinity, delay: Math.random() * 2 },
    },
  };

  const orbVariants = {
    animate: {
      x: [0, 40, 0],
      y: [0, -40, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const waveVariants = {
    animate: {
      opacity: [0.2, 0.4, 0.2],
      x: [-15, 15],
      transition: { repeat: Infinity, duration: 7, ease: 'easeInOut' },
    },
  };

  const holographicVariants = {
    animate: {
      color: ['#ffffff', '#93c5fd', '#c4b5fd', '#ffffff'],
      textShadow: [
        '0 0 5px rgba(59, 130, 246, 0.5)',
        '0 0 8px rgba(147, 51, 234, 0.5)',
        '0 0 5px rgba(59, 130, 246, 0.5)',
      ],
      transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
    },
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-indigo-900 rounded-xl shadow-lg">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-600/20 to-purple-600/20"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'], opacity: [0.6, 0.9, 0.6] }}
          transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
          style={{ backgroundSize: '200% 200%' }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10"
          variants={waveVariants}
          animate="animate"
        ></motion.div>
        <div className="absolute inset-0">
          <motion.div
            className="absolute w-[120px] h-[120px] sm:w-[240px] sm:h-[240px] bg-blue-500/30 rounded-full blur-3xl top-[10%] left-[10%]"
            animate={{
              x: [-15, 15],
              y: [-15, 15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          ></motion.div>
          <motion.div
            className="absolute w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-indigo-500/30 rounded-full blur-3xl bottom-[15%] right-[15%]"
            animate={{
              x: [15, -15],
              y: [15, -15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
          ></motion.div>
        </div>
        {/* Starfield Effect */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute bg-white/60 dark:bg-white/40 rounded-full w-[1.5px] h-[1.5px]"
              variants={starfieldVariants}
              animate="animate"
              style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            ></motion.div>
          ))}
        </div>
        {/* Sparkle Trail */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`trail-${i}`}
              className={`absolute rounded-full w-2 h-2 ${
                ['bg-amber-400/60', 'bg-blue-400/60', 'bg-purple-400/60'][i % 3]
              }`}
              variants={sparkleTrailVariants}
              animate="animate"
              style={{ top: `${15 + i * 10}%`, left: `${5 + i * 15}%` }}
            ></motion.div>
          ))}
        </div>
        {/* Floating Orbs */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute bg-blue-400/60 dark:bg-blue-300/60 rounded-full w-2.5 h-2.5"
              variants={orbVariants}
              animate="animate"
              style={{
                top: `${35 + i * 15}%`,
                left: `${25 + i * 20}%`,
                transform: `translate(-50%, -50%)`,
              }}
            ></motion.div>
          ))}
        </div>
      </div>
      <div className="relative z-10 p-5 sm:p-6">
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
                <Trophy className="h-5 w-5 text-amber-500" />
              </motion.div>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-sm">
                Trò chơi nổi bật
              </span>
            </motion.div>
            <motion.h1
              className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              variants={textChildVariants}
              animate={holographicVariants}
            >
              {FEATURED_GAME.title}
            </motion.h1>
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-200 max-w-md mx-auto"
              variants={textChildVariants}
            >
              {FEATURED_GAME.description}
            </motion.p>
            <motion.div className="flex items-center justify-center space-x-4" variants={textChildVariants}>
              <div className="flex items-center">
                <motion.div variants={iconVariants}>
                  <Star className="h-4 w-4 text-amber-500 mr-1.5" />
                </motion.div>
                <span className="text-gray-700 dark:text-white text-sm">{FEATURED_GAME.rating}</span>
              </div>
              <div className="flex items-center">
                <motion.div variants={iconVariants}>
                  <Users className="h-4 w-4 text-blue-500 mr-1.5" />
                </motion.div>
                <span className="text-gray-700 dark:text-white text-sm">{FEATURED_GAME.players}</span>
              </div>
            </motion.div>
            <motion.a
              href={FEATURED_GAME.playLink}
              className="inline-flex items-center justify-center w-full max-w-sm px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-semibold rounded-full shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Play className="h-5 w-5 mr-2" />
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
              className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl group-hover:bg-blue-500/30"
              variants={glowVariants}
              animate="animate"
            ></motion.div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[160px] object-cover rounded-xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            >
              <source src={FEATURED_GAME.video} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </motion.div>
        </div>

        {/* Desktop Featured Section */}
        <div className="hidden lg:grid grid-cols-2 gap-6 items-center">
          <motion.div
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={featuredTextVariants}
          >
            <motion.div className="flex items-center space-x-3" variants={textChildVariants}>
              <motion.div variants={iconVariants}>
                <Trophy className="h-6 w-6 text-amber-500" />
              </motion.div>
              <span className="text-amber-500 font-semibold uppercase tracking-widest text-base">
                Trò chơi nổi bật
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              variants={textChildVariants}
              animate={holographicVariants}
            >
              {FEATURED_GAME.title}
            </motion.h1>
            <motion.p
              className="text-base text-gray-600 dark:text-gray-200 max-w-lg"
              variants={textChildVariants}
            >
              {FEATURED_GAME.description}
            </motion.p>
            <motion.div className="flex items-center space-x-6" variants={textChildVariants}>
              <div className="flex items-center">
                <motion.div variants={iconVariants}>
                  <Star className="h-5 w-5 text-amber-500 mr-2" />
                </motion.div>
                <span className="text-gray-700 dark:text-white text-base">{FEATURED_GAME.rating}</span>
              </div>
              <div className="flex items-center">
                <motion.div variants={iconVariants}>
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                </motion.div>
                <span className="text-gray-700 dark:text-white text-base">{FEATURED_GAME.players}</span>
              </div>
            </motion.div>
            <motion.a
              href={FEATURED_GAME.playLink}
              className="inline-flex items-center justify-center w-56 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Play className="h-6 w-6 mr-2" />
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
              className="absolute -inset-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl group-hover:bg-blue-500/30"
              variants={glowVariants}
              animate="animate"
            ></motion.div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-[280px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"
            >
              <source src={FEATURED_GAME.video} type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ video.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGame;