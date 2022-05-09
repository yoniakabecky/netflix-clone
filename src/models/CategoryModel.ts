import { MovieList } from 'tmdb/types';

import { MovieListModel } from './MovieListModel';

export class CategoryModel {
  name: string;
  page: number;
  results: Array<MovieListModel>;
  totalPages: number;
  totalResults: number;

  constructor(name: string, data: MovieList) {
    this.name = name;
    this.results = data.results.map((x) => new MovieListModel(x as any));
    this.page = data.page;
    this.totalPages = data.total_pages;
    this.totalResults = data.total_results;
  }
}
