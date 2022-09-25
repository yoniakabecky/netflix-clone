import * as genre from 'constants/genres';

const API_KEY = `api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`;
const LANG_EN_US = 'language=en-US';
const NO_ADULT = 'include_adult=false';

export const BASE = 'https://api.themoviedb.org/3';

export const TRENDING_MOVIE_DAY = `${BASE}/trending/movie/day?${API_KEY}`;

export const RELEASE_DATES = (movieId: number) =>
  `${BASE}/movie/${movieId}/release_dates?${API_KEY}`;

export const MOVIE_CREDIT = (movieId: number) =>
  `${BASE}/movie/${movieId}/credits?${API_KEY}&${LANG_EN_US}`;

export const MOVIE_DETAILS = (movieId: number) =>
  `${BASE}/movie/${movieId}?${API_KEY}&${LANG_EN_US}`;

export const SIMILAR_MOVIES = (movieId: number) =>
  `${BASE}/movie/${movieId}/similar?${API_KEY}&${LANG_EN_US}`;

export const NOW_PLAYING_MOVIES = `${BASE}/movie/now_playing?${API_KEY}`;
export const TOP_RATED_MOVIES = `${BASE}/movie/top_rated?${API_KEY}`;
export const UPCOMING_MOVIES = `${BASE}/movie/upcoming?${API_KEY}`;

const DISCOVER_M_GENRE = `${BASE}/discover/movie?${API_KEY}&${LANG_EN_US}&${NO_ADULT}&with_genres=`;
export const COMEDY_MOVIES = `${DISCOVER_M_GENRE}${genre.movie.comedy}`;
export const FAMILY_MOVIES = `${DISCOVER_M_GENRE}${genre.movie.family}`;
export const DOCUMENTARY_MOVIES = `${DISCOVER_M_GENRE}${genre.movie.documentary}`;
export const MYSTERY_MOVIES = `${DISCOVER_M_GENRE}${genre.movie.mystery}`;
export const ROMANCE_MOVIES = `${DISCOVER_M_GENRE}${genre.movie.romance}`;
