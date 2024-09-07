import type { Movie } from '@/models/Movie';
import Image from 'next/image';

interface MovieGridProps {
  movies: Movie[];
}

export function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {movies.map((movie) => (
        <div className="cursor-pointer" key={movie.id}>
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
        </div>
      ))}
    </div>
  );
}
