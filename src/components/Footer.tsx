import React from 'react';
import { Mail, YouTube, Facebook, MusicNote, Star } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950 dark:to-indigo-950 text-gray-700 dark:text-white py-4 overflow-hidden">
      {/* Wave pattern for light mode, starry effect for dark mode */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23dbeafe%22 fill-opacity=%220.3%22 d=%22M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,245.3C960,224,1056,160,1152,149.3C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22%3E%3C/path%3E%3C/svg%3E')] bg-bottom bg-no-repeat bg-[length:100%_100%] dark:bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%225%22 cy=%225%22 r=%221%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2220%22 cy=%2215%22 r=%221.5%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2270%22 cy=%2210%22 r=%221%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2240%22 cy=%2230%22 r=%221.2%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2290%22 cy=%2250%22 r=%221%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2215%22 cy=%7070%22 r=%221.5%22 fill=%22%23c7d2fe%22/%3E%3Ccircle cx=%2260%22 cy=%2280%22 r=%221%22 fill=%22%23c7d2fe%22/%3E%3C/svg%3E')] dark:bg-[length:200px_200px] dark:opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
        {/* Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:hocdungai003@gmail.com"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            <Mail sx={{ fontSize: 16, color: 'inherit' }} className="text-blue-600 dark:text-indigo-300" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://www.youtube.com/@hocdungai003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            <YouTube sx={{ fontSize: 16, color: 'inherit' }} className="text-blue-600 dark:text-indigo-300" />
            <span className="text-sm">YouTube</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            <Facebook sx={{ fontSize: 16, color: 'inherit' }} className="text-blue-600 dark:text-indigo-300" />
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-indigo-300 transition-colors duration-300"
          >
            <MusicNote sx={{ fontSize: 16, color: 'inherit' }} className="text-blue-600 dark:text-indigo-300" />
            <span className="text-sm">TikTok</span>
          </a>
        </div>

        {/* Rating Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfCwLSyaeBtiZaOBikYzOZNQS_N9V3UNQzhUe4ydzrS9wB47A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-3 py-1.5 bg-blue-500 hover:bg-blue-400 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white rounded-md shadow-sm text-sm font-medium transition-all duration-300"
        >
          <Star sx={{ fontSize: 16, marginRight: '4px' }} />
          Đánh Giá
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">Livaan - No Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;