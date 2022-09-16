import { ComponentMeta, ComponentStory } from '@storybook/react';

import { parseMovieListResult } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';
import type { MovieListResult } from 'tmdb/types';

import MovieInfoCard from './MovieInfoCard';

export default {
  title: 'MovieInfoCard',
  component: MovieInfoCard,
} as ComponentMeta<typeof MovieInfoCard>;

export const Default: ComponentStory<typeof MovieInfoCard> = () => (
  <MovieInfoCard
    movie={parseMovieListResult(
      trendingResultDummy.results[0] as MovieListResult
    )}
  />
);
