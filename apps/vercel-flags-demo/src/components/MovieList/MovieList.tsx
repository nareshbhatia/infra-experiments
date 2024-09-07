import type { Movie } from '@/models/Movie';
import Image from 'next/image';

interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm leading-none text-muted-foreground">
        <thead className="hidden sm:table-header-group">
          <tr className="h-[39px] border-b">
            <th className="w-8 px-3 text-right font-normal">#</th>
            <th className="px-3 text-left font-normal">Title</th>
            <th className="w-12 px-3 text-center font-normal">Rating</th>
            <th className="w-12 px-3 text-right font-normal">Year</th>
            <th className="w-12 px-3 text-right font-normal">Runtime</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr className="h-28" key={movie.id}>
              <td className="hidden px-3 text-right sm:table-cell">
                {movie.rank}
              </td>
              <td className="px-3">
                <div className="flex items-center space-x-3">
                  {movie.image ? (
                    <div className="relative flex h-24 w-16 shrink-0 overflow-hidden rounded-md">
                      <Image
                        alt={movie.name}
                        className="aspect-[2/3] w-full object-cover"
                        height={movie.image.height}
                        src={movie.image.url}
                        width={movie.image.width}
                      />
                    </div>
                  ) : undefined}
                  <div>
                    <h3 className="line-clamp-2 text-base leading-5 text-accent-foreground">
                      {movie.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {movie.genres
                        .slice(0, 3)
                        .map((genre) => genre.toLowerCase())
                        .join(' • ')}
                    </p>
                  </div>
                </div>
              </td>
              <td className="hidden px-3 text-center sm:table-cell">
                {movie.certificate}
              </td>
              <td className="hidden px-3 text-right sm:table-cell">
                {movie.releaseYear}
              </td>
              <td className="hidden px-3 text-right sm:table-cell">
                {movie.runtime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
