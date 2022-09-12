import { ComponentMeta, ComponentStory } from '@storybook/react';

import { getUsRating } from 'models';
import { featuredMovieDummy, releaseDatesDummy } from 'tmdb/dummy';

import FeaturedMovie from './FeaturedMovie';

export default {
  title: 'FeaturedMovie',
  component: FeaturedMovie,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof FeaturedMovie>;

const data = {
  movieId: featuredMovieDummy.id,
  backdropPath: featuredMovieDummy.backdrop_path,
  title: featuredMovieDummy.title,
  overview: featuredMovieDummy.overview ?? '',
  usRating: getUsRating(releaseDatesDummy.results),
};

export const Default: ComponentStory<typeof FeaturedMovie> = () => (
  <FeaturedMovie movie={data} />
);
