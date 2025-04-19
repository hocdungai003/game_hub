import React from 'react';
import { Play, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewGameItemProps {
  game: {
    id: string;
    title: string;
    image: string;
    rating: number;
    playLink: string;
  };
}

const NewGameItem: React.FC<NewGameItemProps> = ({ game }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
      transition: { duration: 0.2, ease: 'easeOut' },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md group overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* New Badge with Star */}
      <motion.div
        className="absolute top-2 left-2 bg-amber-500 dark:bg-amber-400 rounded-full px-2 py-0.5 flex items-center space-x-1 z-10"
        variants={badgeVariants}
        initial="hidden"
        animate="visible"
      >
        <Star className="h-3 w-3 text-white" />
        <span className="text-xs font-semibold text-white uppercase">New</span>
      </motion.div>

      <div className="flex flex-col p-2 sm:p-3 space-y-2">
        <div className="flex items-center">
          {/* Square Image - slightly smaller */}
          <motion.img
            src={game.image}
            alt={game.title}
            className="w-16 h-16 sm:w-16 sm:h-16 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
          />

          {/* Text Content */}
          <div className="ml-2 flex-1 space-y-0.5">
            <motion.h3
              className="text-sm sm:text-sm font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200"
              initial={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {game.title}
            </motion.h3>
            <div className="flex items-center">
              <motion.div variants={iconVariants}>
                <Star className="h-3.5 w-3.5 text-amber-500 mr-1" />
              </motion.div>
              <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{game.rating}</span>
            </div>
          </div>
        </div>

        {/* Play Button - slightly shorter */}
        <motion.a
          href={game.playLink}
          className="flex items-center justify-center w-full px-3 py-1.5 bg-indigo-600 dark:bg-indigo-500 text-white text-sm font-medium rounded-md shadow-sm"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Play className="h-5 w-5 mr-2" />
          Chơi ngay
        </motion.a>
      </div>
    </motion.div>
  );
};

export default NewGameItem;
