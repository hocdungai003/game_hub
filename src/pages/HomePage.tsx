import React from 'react';
import { GAMES } from '../data/games';
import { motion } from 'framer-motion';
import FeaturedGame from './components/FeaturedGame';
import NewGameItem from './components/NewGameItem';
import RecommendedGameItem from './components/RecommendedGameItem';
import styles from './styles/HomePage.module.css';

const HomePage: React.FC = () => {
  const recommendedGames = [...GAMES].sort((a, b) => b.rating - a.rating).slice(0, 10);
  const newGames = GAMES
  .filter(game => game.new)
  .reverse()
  .slice(0, 3)
  .sort((a, b) => b.rating - a.rating);


  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950 h-[calc(100vh-64px)] overflow-hidden max-md:min-h-screen max-md:overflow-auto max-md:h-auto">
      <div className="px-4 sm:px-6 lg:px-8 py-4 md:py-6 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-10 gap-4 lg:h-[calc(100vh-64px-2rem)] max-lg:min-h-screen">
          {/* Left Column: Featured and New Games (6 parts, Fixed on Desktop) */}
          <div className="lg:col-span-6 flex flex-col space-y-3 lg:h-[calc(100vh-64px-2rem)] max-lg:mb-4">
            {/* Featured Section */}
            <FeaturedGame />

            {/* New Games Section (Vertical Arrangement, No Title) */}
            <section className="rounded-lg flex-1">
              <div className="space-y-3">
                {newGames.map((game) => (
                  <NewGameItem key={game.id} game={game} />
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Recommended Games (4 parts, Scrollable on Desktop and Tablet) */}
          <div className="lg:col-span-4 lg:h-[calc(100vh-64px-2rem)] max-lg:min-h-[400px]">
            {/* Recommended Games Section */}
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md flex flex-col h-full">
              <motion.h2
                className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 px-4 py-3 text-left bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/50 dark:to-purple-900/50 rounded-lg shadow-sm tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Game đề xuất
              </motion.h2>
              <div
                className={`flex-1 px-4 pb-4 md:overflow-y-auto ${styles.customScrollbar}`}
                style={{
                  scrollbarWidth: 'thin', // For Firefox
                  scrollbarColor: 'rgba(156, 163, 175, 0.5) rgba(0, 0, 0, 0.1)', // For Firefox
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3">
                  {recommendedGames.map((game) => (
                    <RecommendedGameItem key={game.id} game={game} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;