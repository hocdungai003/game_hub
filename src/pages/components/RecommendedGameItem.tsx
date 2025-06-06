import React from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { trackGameClick } from '../../utils/analytics';

interface RecommendedGameItemProps {
  game: {
    id: string;
    title: string;
    image: string;
    rating: number;
    playLink: string;
    category: string;
    new?: boolean;
    newupdate?: boolean;
  };
}

const RecommendedGameItem: React.FC<RecommendedGameItemProps> = ({ game }) => {
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

  // Determine star color based on new and newupdate
  const starColor = game.new ? 'text-amber-400' : game.newupdate ? 'text-indigo-600' : null;

  return (
    <motion.div
      className="relative bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.img
          src={game.image}
          alt={game.title}
          className="w-full h-36 object-cover group-hover:opacity-90"
          transition={{ duration: 0.2 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        ></motion.div>
        <motion.span
          className="absolute top-1 right-1 px-1.5 py-0.5 bg-blue-600 text-white text-xs font-medium rounded-full"
          initial={{ opacity: 0, x: 5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          {game.category}
        </motion.span>
      </div>
      <div className="p-2 space-y-1">
        <motion.h3
          className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-400"
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
        className="relative flex items-center justify-center w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm font-medium shadow-sm"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => trackGameClick(game.title)}
      >
        <Play className="h-4 w-4 mr-1" />
        Chơi ngay
      </motion.a>
      {starColor && (
        <motion.div
          className="absolute top-1 left-1 rounded-full bg-gradient-to-br from-white/30 to-transparent p-1.5 shadow-md"
          animate={glowVariants}
          style={{ color: starColor === 'text-amber-400' ? '#f59e0b' : '#4f46e5' }} // Match Tailwind colors
        >
          <Star className={`h-5 w-5 ${starColor} fill-current`} />
        </motion.div>
      )}
    </motion.div>
  );
};

export default RecommendedGameItem;