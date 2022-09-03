import { ReleaseDatesResults } from 'tmdb/types';

export type FeaturedMovieModel = {
  movieId: number;
  backdropPath: string | null;
  title: string;
  overview: string;
  usRating: string | null;
};

export const getUsRating = (results: ReleaseDatesResults[]) =>
  results.find((x) => x.iso_3166_1 === 'US')?.release_dates[0]?.certification ??
  null;
