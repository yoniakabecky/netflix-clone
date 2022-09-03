const API_KEY = `api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;

export const BASE = 'https://api.themoviedb.org/3';

export const TRENDING_MOVIE_DAY = `${BASE}/trending/movie/day?${API_KEY}`;

export const RELEASE_DATES = (movieId: number) =>
  `${BASE}/movie/${movieId}/release_dates?${API_KEY}`;
