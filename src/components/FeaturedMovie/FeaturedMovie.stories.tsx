import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import FeaturedMovie from './FeaturedMovie';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';
import { FeaturedMovieModel } from 'models';

export default {
  title: 'FeaturedMovie',
  component: FeaturedMovie,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FeaturedMovie>;

export const Default: ComponentStory<typeof FeaturedMovie> = () => (
  <FeaturedMovie
    movie={new FeaturedMovieModel(featuredMovieDummy, releaseDatesDummy)}
  />
);
