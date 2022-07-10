import { Genre, Movie, ReleaseDates, ReleaseDatesResults } from 'tmdb/types';

export class MovieModel {
  id: number;
  backdropPath: string | null;
  posterPath: string | null;
  title: string;
  overview: string | null;
  originalTitle: string;
  popularity: number;
  video: boolean;
  releaseDate: string;
  releaseDatesResult: Array<ReleaseDatesResults>;
  genres: Array<Genre>;
  runtime: number;

  constructor(movie: Movie | null, releaseDates: ReleaseDates | null) {
    this.id = movie?.id ?? 0;
    this.backdropPath = movie?.backdrop_path ?? null;
    this.posterPath = movie?.poster_path ?? null;
    this.title = movie?.title ?? '';
    this.originalTitle = movie?.original_title ?? '';
    this.overview = movie?.overview ?? '';
    this.popularity = movie?.popularity ?? 0;
    this.video = movie?.video ?? false;
    this.releaseDate = movie?.release_date ?? '';
    this.releaseDatesResult = releaseDates?.results ?? [];
    this.genres = movie?.genres ?? [];
    this.runtime = movie?.runtime ?? 0;
  }

  get hasData() {
    return this.id !== 0;
  }

  get usRating() {
    const usData = this.releaseDatesResult.find((x) => x.iso_3166_1 === 'US');

    if (!usData || usData.release_dates.length <= 0) return null;

    return usData.release_dates[0].certification;
  }

  get formatRuntime() {
    if (this.runtime <= 0) return '';

    const hour = Math.floor(this.runtime / 60);
    const min = this.runtime % 60;

    return hour > 0 ? `${hour}h ${min}m` : `${min}m`;
  }

  get releaseYear() {
    if (this.releaseDate === '') return '';

    const splittedDate = this.releaseDate.split('-');
    return splittedDate[0];
  }

  get genreNames() {
    if (this.genres.length <= 0) return [];

    return this.genres.map((genre) => genre.name);
  }
}
