import React from 'react';
import { Mail, Youtube, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-100 to-blue-100 dark:from-gray-900 dark:to-indigo-900 text-gray-700 dark:text-white py-8 overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.15),transparent_70%)] opacity-50 dark:opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Contact & Social Links */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-600 dark:text-indigo-300" />
              <a
                href="mailto:hocdungai003@gmail.com"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                hocdungai003@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-blue-600 dark:text-indigo-300" />
              <a
                href="https://www.youtube.com/@hocdungai003"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Rating Button */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCwLSyaeBtiZaOBikYzOZNQS_N9V3UNQzhUe4ydzrS9wB47A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-400 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-lg shadow-md transition-all duration-300"
          >
            <Star className="h-5 w-5 mr-2" />
            <span className="font-medium">Đánh Giá</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-300 dark:border-indigo-800/30 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">Livaan - No Copyright © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;