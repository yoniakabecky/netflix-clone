import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MovieModel } from 'models';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';

import FeaturedMovie from './FeaturedMovie';

export default {
  title: 'FeaturedMovie',
  component: FeaturedMovie,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FeaturedMovie>;

export const Default: ComponentStory<typeof FeaturedMovie> = () => (
  <FeaturedMovie
    movie={new MovieModel(featuredMovieDummy, releaseDatesDummy)}
  />
);
