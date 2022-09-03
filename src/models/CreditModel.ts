import { Credit } from 'tmdb/types';

export type CreditModel = {
  movieId: number;
  mainCastNames: string[];
  castNames: string[];
  directorName: string;
  writerName: string;
};

const initialValues = {
  movieId: 0,
  mainCastNames: [],
  castNames: [],
  directorName: '',
  writerName: '',
};

export const parseCreditResponse = (data: Credit): CreditModel => {
  if (!Array.isArray(data.cast) || data.cast.length <= 0) return initialValues;
  if (!Array.isArray(data.crew) || data.crew.length <= 0) return initialValues;

  const { id, cast, crew } = data;

  const mainCastNames = cast.map((c) => c.name as string).slice(0, 3);
  const castNames = cast.slice(0, 10).map((c) => c.name as string);

  const directorName = crew.find((c) => c.job === 'Director')?.name ?? '';
  const writerName = crew.find((c) => c.job === 'Writer')?.name ?? '';

  return {
    movieId: id,
    mainCastNames,
    castNames,
    directorName,
    writerName,
  };
};
