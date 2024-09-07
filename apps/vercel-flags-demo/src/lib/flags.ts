import { unstable_flag as flag } from '@vercel/flags/next';

export const showMovieGrid = flag({
  key: 'movie-grid',
  decide: () => false,
});
