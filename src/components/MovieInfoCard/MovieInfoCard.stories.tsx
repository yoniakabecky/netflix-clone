import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MovieModel } from 'models';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';

import MovieInfoCard from './MovieInfoCard';

export default {
  title: 'MovieInfoCard',
  component: MovieInfoCard,
} as ComponentMeta<typeof MovieInfoCard>;

export const Default: ComponentStory<typeof MovieInfoCard> = () => (
  <MovieInfoCard
    movie={new MovieModel(featuredMovieDummy, releaseDatesDummy)}
  />
);
