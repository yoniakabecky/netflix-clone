import type { MovieListResult } from 'tmdb/types';

export type MovieListItemModel = {
  movieId: number;
  backdropPath: string | null;
  title: string;
  overview: string;
  releaseYear: string;
};

export const parseMovieListResult = (
  movie: MovieListResult
): MovieListItemModel => {
  const { id, backdrop_path, title, release_date, overview } = movie;

  const releaseYear = release_date?.split('-')?.[0] ?? '';

  return {
    movieId: id,
    backdropPath: backdrop_path,
    title,
    overview,
    releaseYear,
  };
};
