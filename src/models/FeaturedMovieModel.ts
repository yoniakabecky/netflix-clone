import type { MovieList, ReleaseDates, ReleaseDatesResults } from 'tmdb/types';

import { MovieListItemModel } from './MovieListItemModel';

export type FeaturedMovieModel = {
  movieId: number;
  backdropPath: string | null;
  title: string;
  overview: string;
  usRating: string | null;
};

export const parseTrendingAndReleaseDate = (
  trending: MovieList,
  releaseDate?: ReleaseDates
): FeaturedMovieModel => {
  const { id, backdrop_path, title, overview } = trending.results[0];
  const usRating = getUsRating(releaseDate?.results ?? []);

  return {
    movieId: id,
    backdropPath: backdrop_path,
    title,
    overview,
    usRating,
  };
};

export const getUsRating = (results: ReleaseDatesResults[]) =>
  results.find((x) => x.iso_3166_1 === 'US')?.release_dates[0]?.certification ??
  null;

export const listItemToFeatured = (
  movie: MovieListItemModel,
  releaseDate?: ReleaseDates
): FeaturedMovieModel => {
  return {
    ...movie,
    usRating: getUsRating(releaseDate?.results ?? []),
  };
};
