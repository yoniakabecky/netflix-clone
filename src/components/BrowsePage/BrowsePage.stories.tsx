import { ComponentMeta, ComponentStory } from '@storybook/react';

import { FeaturedMovieModel, getUsRating, parseCategoryResponse } from 'models';
import {
  featuredMovieDummy,
  releaseDatesDummy,
  trendingResultDummy,
} from 'tmdb/dummy';
import type { MovieList } from 'tmdb/types';

import BrowsePage from './BrowsePage';

export default {
  title: 'BrowsePage',
  component: BrowsePage,
} as ComponentMeta<typeof BrowsePage>;

const featured: FeaturedMovieModel = {
  movieId: featuredMovieDummy.id,
  backdropPath: featuredMovieDummy.backdrop_path,
  title: featuredMovieDummy.title,
  overview: featuredMovieDummy.overview ?? '',
  usRating: getUsRating(releaseDatesDummy.results),
};

const category = parseCategoryResponse(
  'trending',
  trendingResultDummy as MovieList
);

export const Default: ComponentStory<typeof BrowsePage> = () => (
  <BrowsePage featuredMovie={featured} categories={[category]} />
);
