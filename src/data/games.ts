// data/games.ts
import ransanmoi01 from '../assets/ransanmoi01.png'
import phaohoa from '../assets/phaohoa.png'
import caro003 from '../assets/caro003.png'
import banca from '../assets/banca.png'
import chemhoaqua from '../assets/chemhoaqua.png'
import game2048 from '../assets/2048.png'
import latthebai from '../assets/latthebai.png'
import vuatiengviet from '../assets/vuatiengviet.png'
import ransanmoivideo from '../assets/featured/videoransanmoi.mp4'
import chemhoaquavideo from '../assets/featured/chemhoaquavideo.mp4'
import vuatiengvietvid from '../assets/featured/vuatiengviet.mp4'
import caro from '../assets/featured/caro.mp4'

export const CATEGORIES = ['All', 'Action', 'Strategy', 'Puzzle', 'Sports', 'Memory'] as const;

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
    players: '13K+',
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
  {
    id: 'game-5',
    title: 'Lật Thẻ Bài',
    category: 'Memory',
    image: latthebai,
    rating: 4.1,
    players: '12K+',
    playLink: 'https://hocdungai003.github.io/lat_the_bai_01/',
  },
  {
    id: 'game-6',
    title: 'Vua Tiếng Việt',
    category: 'Memory',
    image: vuatiengviet,
    rating: 4.9,
    players: '30K+',
    playLink: 'https://hocdungai003.github.io/vua_tieng_viet_003/',
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
  }
];

export const FEATURED_GAME = {
  id: 'featured-1',
  title: 'Caro',
  description: '',
  rating: 4.3,
  image: vuatiengviet,
  video:vuatiengvietvid,
  views: '13K+',
  players: '13K+',
  playLink: 'https://hocdungai003.github.io/vua_tieng_viet_003/',
  sourceLink: 'https://github.com/hocdungai003/vua_tieng_viet_003',
  featured: true,
};