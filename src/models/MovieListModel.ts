import { MovieListResult } from 'tmdb/types';

export class MovieListModel {
  id: number;
  backdropPath: string | null;
  overview: string;
  title: string;

  constructor(data: MovieListResult) {
    this.id = data.id;
    this.backdropPath = data.backdrop_path ?? '';
    this.overview = data.overview;
    this.title = data.title;
  }
}
