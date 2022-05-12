import { MovieListResult } from 'tmdb/types';

export class MovieListModel {
  id: number;
  backdropPath: string;
  posterPath: string;
  overview: string;
  title: string;

  constructor(data: MovieListResult) {
    this.id = data.id;
    this.backdropPath = data.backdrop_path ?? '';
    this.posterPath = data.poster_path ?? '';
    this.overview = data.overview;
    this.title = data.title;
  }
}
