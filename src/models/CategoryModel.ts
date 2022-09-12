import { MovieListItemModel, parseMovieListResult } from 'models';
import type { MovieListAlt, MovieListResult } from 'tmdb/types';

export class CategoryModel {
  name: string;
  page: number;
  results: Array<MovieListItemModel>;
  totalPages: number;
  totalResults: number;

  constructor(name: string, data: MovieListAlt) {
    this.name = name;
    this.results = data.results.map((x) =>
      parseMovieListResult(x as MovieListResult)
    );
    this.page = data.page;
    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;
  }
}
