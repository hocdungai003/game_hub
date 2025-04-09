// data/games.ts
export const CATEGORIES = ['All', 'Action', 'Strategy', 'Puzzle', 'Sports'] as const;

export const GAMES = [
  {
    id: 'game-1',
    title: 'Space Explorer',
    category: 'Action',
    image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.5,
    players: '5K+',
    playLink: '/games/space-explorer',
  },
  {
    id: 'game-2',
    title: 'Racing Legends',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.7,
    players: '8K+',
    playLink: '/games/racing-legends',
  },
  {
    id: 'game-3',
    title: 'Puzzle Master',
    category: 'Puzzle',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.3,
    players: '3K+',
    playLink: '/games/puzzle-master',
  },
  {
    id: 'game-4',
    title: 'Kingdom Wars',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.8,
    players: '12K+',
    playLink: '/games/kingdom-wars',
  },
];

export const ANIMATIONS = [
  {
    id: 'animation-1',
    title: 'Cosmic Journey',
    category: 'Action',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.6,
    viewers: '7K+',
    viewLink: '/animations/cosmic-journey',
  },
  {
    id: 'animation-2',
    title: 'Speed Chase',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.4,
    viewers: '6K+',
    viewLink: '/animations/speed-chase',
  },
  {
    id: 'animation-3',
    title: 'Mind Bender',
    category: 'Puzzle',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.2,
    viewers: '4K+',
    viewLink: '/animations/mind-bender',
  },
  {
    id: 'animation-4',
    title: 'Epic Saga',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=400&h=300',
    rating: 4.9,
    viewers: '10K+',
    viewLink: '/animations/epic-saga',
  },
];

export const FEATURED_GAME = {
  id: 'featured-1',
  title: 'Epic Adventure Quest',
  description: 'Embark on an epic journey through mystical lands and face challenging quests.',
  image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1200&h=600',
  rating: 4.8,
  players: '10K+',
  playLink: 'https://hocdungai003.github.io/ran_san_moi_01/',
  featured: true,
};