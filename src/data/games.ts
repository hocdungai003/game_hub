import ransanmoi01 from '../assets/ransanmoi01.png';
import phaohoa from '../assets/phaohoa.png';
import caro003 from '../assets/caro003.png';
import banca from '../assets/banca.png';
import chemhoaqua from '../assets/chemhoaqua.png';
import game2048 from '../assets/2048.png';
import latthebai from '../assets/latthebai.png';
import vuatiengviet from '../assets/vuatiengviet.png';
import doantu002 from '../assets/doantu002.png';
import tiengduchoc from '../assets/tiengduchoc.png';
import domin from '../assets/domin.png';
import sudoku from '../assets/sudoku.png';
import truotso from '../assets/truotso.png';
import phanbietmau from '../assets/phanbietmau.png';
import covua from '../assets/covua.png';
import ailatrieuphu from '../assets/ailatrieuphu.jpg';
import ransanmoivideo from '../assets/featured/videoransanmoi.mp4';
import chemhoaquavideo from '../assets/featured/chemhoaquavideo.mp4';
import vuatiengvietvid from '../assets/featured/vuatiengviet.mp4';
import caro from '../assets/featured/caro.mp4';
import ailatrieuphuv from '../assets/featured/ailatrieuphu.mp4';

export const CATEGORIES = ['All', 'Action', 'Strategy', 'Puzzle', 'Sports', 'Memory', 'Study'] as const;

export interface Game {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  players: string;
  playLink: string;
  new?: boolean;
  featured?: boolean;
  views?: string;
  sourceLink?: string;
  newupdate?: boolean; // Added newupdate property
}

export interface Animation {
  id: string;
  title: string;
  category: string;
  image: string;
  views: string;
  viewers: string;
  viewLink: string;
  sourceLink: string;
}

export const GAMES: Game[] = [
  {
    id: 'game-8',
    title: 'Deutsch Lernen',
    category: 'Study',
    image: tiengduchoc,
    rating: 4.1,
    players: '3K+',
    playLink: 'https://hocdungai003.github.io/hoc_tieng_duc/',
    new: false,
    newupdate: true, // Added newupdate
  },
  {
    id: 'game-10',
    title: 'Sudoku',
    category: 'Memory',
    image: sudoku,
    rating: 4.3,
    players: '11K+',
    playLink: 'https://hocdungai003.github.io/sudoku003/',
    new: true,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-9',
    title: 'Dò Mìn',
    category: 'Memory',
    image: domin,
    rating: 4.5,
    players: '12K+',
    playLink: 'https://hocdungai003.github.io/do_min_003/',
    new: true,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-1',
    title: 'Cờ caro',
    category: 'Strategy',
    image: caro003,
    rating: 4.5,
    players: '5K+',
    playLink: 'https://hocdungai003.github.io/caro003/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-4',
    title: 'Game 2048',
    category: 'Strategy',
    image: game2048,
    rating: 4.2,
    players: '12K+',
    playLink: 'https://hocdungai003.github.io/2048_game/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-5',
    title: 'Lật Thẻ Bài',
    category: 'Memory',
    image: latthebai,
    rating: 4.1,
    players: '12K+',
    playLink: 'https://hocdungai003.github.io/lat_the_bai_01/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-6',
    title: 'Vua Tiếng Việt',
    category: 'Memory',
    image: vuatiengviet,
    rating: 4.3,
    players: '30K+',
    playLink: 'https://hocdungai003.github.io/vua_tieng_viet_003/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-7',
    title: 'Đoán Từ - Trả lời câu hỏi',
    category: 'Memory',
    image: doantu002,
    rating: 4.2,
    players: '3K+',
    playLink: 'https://hocdungai003.github.io/doan_tu_002/',
    new: false,
    newupdate: true, // Added newupdate
  },
  {
    id: 'game-11',
    title: 'Puzzle Slider - Trượt số',
    category: 'Strategy',
    image: truotso,
    rating: 4.1,
    players: '3K+',
    playLink: 'https://hocdungai003.github.io/xepso003/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-2',
    title: 'Bắn Cá',
    category: 'Strategy',
    image: banca,
    rating: 3.9,
    players: '8K+',
    playLink: 'https://hocdungai003.github.io/ban_ca/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-3',
    title: 'Chém hoa quả',
    category: 'Action',
    image: chemhoaqua,
    rating: 3.9,
    players: '13K+',
    playLink: 'https://hocdungai003.github.io/chem_hoa_qua-01/',
    new: false,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-12',
    title: 'Phân biệt màu',
    category: 'Strategy',
    image: phanbietmau,
    rating: 4.2,
    players: '1K+',
    playLink: 'https://hocdungai003.github.io/phanbietmau003/',
    new: true,
    newupdate: false, // Added newupdate
  },
  {
    id: 'game-13',
    title: 'Ai là triệu phú',
    category: 'Strategy',
    image: ailatrieuphu,
    rating: 4.4,
    players: '1K+',
    playLink: 'https://hocdungai003.github.io/ailatrieuphu003/',
    new: true,
    newupdate: true, // Added newupdate
  },
  {
    id: 'game-14',
    title: 'Cờ Vua (Chess)',
    category: 'Strategy',
    image: covua,
    rating: 4.3,
    players: '1K+',
    playLink: 'https://hocdungai003.github.io/co_vua_chess003/',
    new: true,
    newupdate: false, // Added newupdate
  },
  {
    id: 'featured-1',
    title: 'Rắn Săn Mồi - 01',
    category: 'Action',
    image: ransanmoi01,
    rating: 3.3,
    views: '18K+',
    players: '10K+',
    playLink: 'https://hocdungai003.github.io/ran_san_moi_01/',
    sourceLink: 'https://github.com/hocdungai003/ran_san_moi_01',
    featured: true,
    new: false,
    newupdate: false, // Added newupdate
  },
];

export const ANIMATIONS: Animation[] = [
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
];

export const FEATURED_GAME = {
  id: 'featured-1',
  title: 'Ai là triệu phú',
  description: 'Triệu phú đâu hết rồi nhỉ 😒',
  rating: 4.4,
  image: ailatrieuphu,
  video: ailatrieuphuv,
  views: '13K+',
  players: '13K+',
  playLink: 'https://hocdungai003.github.io/ailatrieuphu003/',
  sourceLink: '',
  featured: true,
};