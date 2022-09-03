import axios, { AxiosResponse } from 'axios';

import ERROR from 'constants/errors';
import * as URL from 'constants/urls';
import { FeaturedMovieModel, getUsRating } from 'models/FeaturedMovieModel';

import type { ReleaseDates, Trending } from './types';

export const getMovie = async (movie_id: string) => {
  try {
    const [details, credits, lists] = await Promise.all([
      axios.get(
        `${URL.BASE}/movie/${movie_id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`
      ),
      axios.get(
        `${URL.BASE}/movie/${movie_id}?credits?api_key=${process.env.TMDB_API_KEY}&language=en-US`
      ),
      axios.get(
        `${URL.BASE}/movie/${movie_id}?lists?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
      ),
    ]);

    console.log(details, credits, lists);
  } catch (error) {
    console.error(error);
  }
};

export const fetchFeatured = async (): Promise<FeaturedMovieModel> => {
  const response: AxiosResponse<Trending> = await axios.get(
    URL.TRENDING_MOVIE_DAY
  );

  if (response.data.results.length < 0) throw new Error(ERROR.NO_DATA);

  const movieId = response.data.results[0].id;
  const releaseDate: AxiosResponse<ReleaseDates> = await axios.get(
    URL.RELEASE_DATES(movieId)
  );

  const { backdrop_path, title, overview } = response.data.results[0];
  const usRating = getUsRating(releaseDate.data.results);

  return {
    movieId,
    backdropPath: backdrop_path,
    title,
    overview,
    usRating,
  };
};
