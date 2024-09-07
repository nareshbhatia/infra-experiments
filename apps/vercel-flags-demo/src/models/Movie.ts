export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface MovieRatingsSummary {
  aggregateRating: number;
  voteCount: number;
}

export interface Movie {
  cast: string[];
  certificate: string;
  description: string;
  genres: string[];
  id: string;
  image?: Image;
  isFeatured: boolean;
  name: string;
  rank: number;
  ratingsSummary: MovieRatingsSummary;
  releaseYear: number;
  runtime: number;
  tagline?: string;
}
