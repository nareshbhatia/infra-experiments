import { MovieGrid } from '@/components/MovieGrid';
import { MovieList } from '@/components/MovieList';
import { movies } from '@/data/movies';
import { showMovieGrid } from '@/lib/flags';

export default async function HomePage() {
  const isMovieGridEnabled = await showMovieGrid();

  return (
    <div className="container relative mx-auto max-w-screen-xl px-8 py-4">
      {isMovieGridEnabled ? (
        <MovieGrid movies={movies} />
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
}
