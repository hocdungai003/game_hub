import React from 'react';
import { Mail, Youtube, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
        {/* Thông tin */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <p>Học dùng AI để tạo trải nghiệm tốt hơn</p>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-1" />
            <a href="mailto:hocdungai003@gmail.com" className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
              Liên hệ: hocdungai003@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <Youtube className="h-4 w-4 mr-1" />
            <a
              href="https://www.youtube.com/@hocdungai003"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              YouTube: Học Dùng AI
            </a>
          </div>
        </div>

        {/* Nút Đánh giá */}
        <div className="flex items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCwLSyaeBtiZaOBikYzOZNQS_N9V3UNQzhUe4ydzrS9wB47A/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors duration-200"
          >
            <Star className="h-4 w-4 mr-1" />
            <span>Đánh giá</span>
          </a>
        </div>

        {/* No Copyright */}
        <p>Livaan - No Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;