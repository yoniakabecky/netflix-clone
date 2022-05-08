import { Movie, ReleaseDates, ReleaseDatesResults } from 'tmdb/types';

export class FeaturedMovieModel {
  backdropPath: string | null;
  id: number;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  title: string;
  video: boolean;
  releaseDatesResult: Array<ReleaseDatesResults>;

  constructor(movie: Movie, releaseDates: ReleaseDates) {
    this.id = movie.id;
    this.backdropPath = movie.backdrop_path;
    this.title = movie.title;
    this.originalTitle = movie.original_title;
    this.overview = movie.overview;
    this.popularity = movie.popularity;
    this.video = movie.video;
    this.releaseDatesResult = releaseDates?.results;
  }

  get usRating() {
    const usData = this.releaseDatesResult.find((x) => x.iso_3166_1 === 'US');

    if (!usData || usData.release_dates.length <= 0) return null;

    return usData.release_dates[0].certification;
  }
}
