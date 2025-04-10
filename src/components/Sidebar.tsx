import React from 'react';
import { Home, GamepadIcon } from 'lucide-react';
import { MdAnimation } from 'react-icons/md';

interface SidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean; // Trạng thái mở/đóng trên mobile
  onClose: () => void; // Hàm đóng sidebar
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate, isOpen, onClose }) => {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    onClose(); // Đóng sidebar khi chọn mục trên mobile
  };

  return (
    <>
      {/* Overlay khi sidebar mở trên mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <button
            onClick={() => handleNavigate('home')}
            className={`p-3 rounded-lg transition-all duration-200 transform hover:scale-110 ${
              currentPage === 'home'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <Home className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleNavigate('games')}
            className={`p-3 rounded-lg transition-all duration-200 transform hover:scale-110 ${
              currentPage === 'games'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <GamepadIcon className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleNavigate('animations')}
            className={`p-3 rounded-lg transition-all duration-200 transform hover:scale-110 ${
              currentPage === 'animations'
                ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <MdAnimation size={24} />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;