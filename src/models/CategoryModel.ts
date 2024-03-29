import { MovieListItemModel, parseMovieListResult } from 'models';
import type { MovieList } from 'tmdb/types';

export type CategoryModel = {
  name: string;
  page: number;
  results: Array<MovieListItemModel>;
  totalPages: number;
  totalResults: number;
  api?: string;
};

// TODO: create camelCase function
export const parseCategoryResponse = (
  name: string,
  data: MovieList,
  api?: string
) => {
  return {
    name,
    page: data.page,
    totalPages: data.total_pages,
    totalResults: data.total_results,
    results: data.results.map((movie) => parseMovieListResult(movie)),
    api,
  };
};
