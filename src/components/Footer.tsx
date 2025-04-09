import React from 'react';
import { Mail, Youtube } from 'lucide-react'; // Thêm Youtube icon

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

        {/* No Copyright */}
        <p>Livaan - No Copyright © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;