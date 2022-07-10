export type ApiError = {
  status_message: string;
  status_code: number;
};

export type Cast = {
  adult?: boolean;
  gender?: number;
  id: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
};

export type Company = {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
};

export type Country = {
  iso_3166_1: string;
  name: string;
};

export type Credit = {
  id: number;
  cast?: Array<Cast>;
  crew?: Array<Crew>;
};

export type Crew = {
  adult?: boolean;
  gender?: number;
  id: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  credit_id?: string;
  department?: string;
  job?: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Language = {
  iso_639_1: string;
  name: string;
  english_name: string;
};

export type List = {
  page: number;
  total_pages: number;
  total_results: number;
};

export type Movie = {
  adult?: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {};
  budget?: number;
  genres: Array<Genre>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language?: string;
  original_title?: string;
  overview: string | null;
  popularity?: number;
  poster_path: string | null;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages: Array<Language>;
  status: Status;
  tagline: string | null;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type MovieList = List & {
  results: Array<MovieListResult | MovieListResultAlt>;
};

export type MovieListResult = {
  adult?: boolean;
  backdrop_path: string | null;
  genre_ids: Array<number>;
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  popularity?: number;
};

export type MovieListResultAlt = {
  id: number;
  original_name?: string;
  origin_country?: Array<string>;
  original_language?: string;
  first_air_date?: string;
  name?: string;
  media_type?: string;
};

export type ReleaseDates = {
  id: number;
  results: Array<ReleaseDatesResults>;
};

export type ReleaseDatesResults = {
  iso_3166_1: string;
  release_dates: Array<ReleaseDatesResult>;
};

export type ReleaseDatesResult = {
  certification: string;
  iso_639_1: string | null;
  note: string;
  release_date: string;
  type: number;
};

export type Status =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';
