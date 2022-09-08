import type { Details, Genre } from 'tmdb/types';

export type MovieDetailsModel = {
  movieId: number;
  releaseYear: string;
  runtime: string;
  genres: Array<string>;
};

export const parseDetailsResponse = (details: Details): MovieDetailsModel => {
  const { id, release_date, runtime, genres } = details;

  const releaseYear = release_date.split('-')?.[0] ?? '';

  return {
    movieId: id,
    releaseYear,
    runtime: formatRuntime(runtime),
    genres: genreNames(genres),
  };
};

const formatRuntime = (runtime: number | null) => {
  if (!runtime || runtime <= 0) return '';

  const hour = Math.floor(runtime / 60);
  const min = runtime % 60;

  return hour > 0 ? `${hour}h ${min}m` : `${min}m`;
};

const genreNames = (genres: Genre[]) => {
  if (genres.length <= 0) return [];

  return genres.map((genre) => genre.name);
};
