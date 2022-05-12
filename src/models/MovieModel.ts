import { Genre, Movie, ReleaseDates, ReleaseDatesResults } from 'tmdb/types';

export class MovieModel {
  backdropPath: string | null;
  id: number;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  title: string;
  video: boolean;
  releaseDatesResult: Array<ReleaseDatesResults>;
  posterPath: string | null;
  genres: Array<Genre>;
  runtime: number;

  constructor(movie: Movie, releaseDates: ReleaseDates) {
    this.id = movie.id;
    this.backdropPath = movie.backdrop_path;
    this.posterPath = movie.poster_path;
    this.title = movie.title;
    this.originalTitle = movie.original_title;
    this.overview = movie.overview;
    this.popularity = movie.popularity;
    this.video = movie.video;
    this.releaseDatesResult = releaseDates?.results;
    this.genres = movie.genres;
    this.runtime = movie.runtime;
  }

  get usRating() {
    const usData = this.releaseDatesResult.find((x) => x.iso_3166_1 === 'US');

    if (!usData || usData.release_dates.length <= 0) return null;

    return usData.release_dates[0].certification;
  }

  get formatRuntime() {
    const hour = Math.floor(this.runtime / 60);
    const min = this.runtime % 60;

    return hour > 0 ? `${hour}h ${min}m` : `${min}m`;
  }
}
