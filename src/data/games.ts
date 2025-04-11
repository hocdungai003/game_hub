// data/games.ts
import ransanmoi01 from '../assets/ransanmoi01.png'
import phaohoa from '../assets/phaohoa.png'
import caro003 from '../assets/caro003.png'
import banca from '../assets/banca.png'
import chemhoaqua from '../assets/chemhoaqua.png'
import game2048 from '../assets/2048.png'
import ransanmoivideo from '../assets/videoransanmoi.mp4'

export const CATEGORIES = ['All', 'Action', 'Strategy', 'Puzzle', 'Sports'] as const;

export const GAMES = [
  {
    id: 'featured-1',
    title: 'Rắn Săn Mồi - 01',
    category: 'Action',
    image: ransanmoi01,
    rating: 4.5,
    views: '18K+',
    players: '10K+',
    playLink: 'https://hocdungai003.github.io/ran_san_moi_01/',
    sourceLink: 'https://github.com/hocdungai003/ran_san_moi_01',
    featured: true,
  },
  {
    id: 'game-1',
    title: 'Cờ caro',
    category: 'Strategy',
    image: caro003,
    rating: 4.5,
    players: '5K+',
    playLink: 'https://hocdungai003.github.io/caro003/',
  },
  {
    id: 'game-2',
    title: 'Bắn Cá',
    category: 'Strategy',
    image: banca,
    rating: 4.7,
    players: '8K+',
    playLink: 'https://hocdungai003.github.io/ban_ca/',
  },
  {
    id: 'game-3',
    title: 'Chém hoa quả',
    category: 'Action',
    image: chemhoaqua,
    rating: 4.3,
    players: '3K+',
    playLink: 'https://hocdungai003.github.io/chem_hoa_qua-01/',
  },
  {
    id: 'game-4',
    title: 'Game 2048',
    category: 'Strategy',
    image: game2048,
    rating: 4.0,
    players: '12K+',
    playLink: 'https://hocdungai003.github.io/2048_game/',
  },
];
export const ANIMATIONS = [
  {
    id: 'animation-1',
    title: 'Pháo hoa năm mới',
    category: 'Action',
    image: phaohoa,
    views: '15K+',
    viewers: '7K+',
    viewLink: 'https://hocdungai003.github.io/phao_hoa_nam_moi/',
    sourceLink: 'https://github.com/hocdungai003/phao_hoa_nam_moi',
  },
  // {
  //   id: 'animation-2',
  //   title: 'Speed Chase',
  //   category: 'Sports',
  //   image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&h=300',
  //   views: '12K+',
  //   viewers: '6K+',
  //   viewLink: '/animations/speed-chase',
  //   sourceLink: '/source/speed-chase',
  // },
  // {
  //   id: 'animation-3',
  //   title: 'Mind Bender',
  //   category: 'Puzzle',
  //   image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300',
  //   views: '8K+',
  //   viewers: '4K+',
  //   viewLink: '/animations/mind-bender',
  //   sourceLink: '/source/mind-bender',
  // },
  // {
  //   id: 'animation-4',
  //   title: 'Epic Saga',
  //   category: 'Strategy',
  //   image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400&h=300',
  //   views: '20K+',
  //   viewers: '10K+',
  //   viewLink: '/animations/epic-saga',
  //   sourceLink: '/source/epic-saga',
  // },
];

export const FEATURED_GAME = {
  id: 'featured-1',
  title: 'Rắn Săn Mồi - 01',
  description: '',
  rating: 4.5,
  image: ransanmoi01,
  video:ransanmoivideo,
  views: '18K+',
  players: '10K+',
  playLink: 'https://hocdungai003.github.io/ran_san_moi_01/',
  sourceLink: 'https://github.com/hocdungai003/ran_san_moi_01',
  featured: true,
};