// AnimationPage.tsx
import React, { useState } from 'react';
import { Eye, Star, Users } from 'lucide-react';
import { CATEGORIES, ANIMATIONS } from '../data/games';

interface AnimationPageProps {
  searchQuery: string;
}

const AnimationPage: React.FC<AnimationPageProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAnimations = ANIMATIONS.filter((animation) => {
    const matchesSearch = animation.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || animation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 transform hover:scale-105 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Animations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAnimations.map((animation) => (
          <div
            key={animation.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          >
            <div className="relative">
              <img
                src={animation.image}
                alt={animation.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{animation.title}</h3>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
                  {animation.category}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-gray-600 dark:text-gray-300">{animation.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-gray-600 dark:text-gray-300">{animation.viewers}</span>
                </div>
              </div>
              <a
                href={animation.viewLink}
                className="flex items-center justify-center w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600"
              >
                <Eye className="h-4 w-4 mr-1" />
                View
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredAnimations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No animations found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AnimationPage;