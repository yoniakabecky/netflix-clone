import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

import { CategoryModel } from 'models';
import { FeaturedMovieModel, getUsRating } from 'models/FeaturedMovieModel';
import {
  featuredMovieDummy,
  releaseDatesDummy,
  trendingResultDummy,
} from 'tmdb/dummy';

import BrowsePage from './BrowsePage';

export default {
  title: 'BrowsePage',
  component: BrowsePage,
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof BrowsePage>;

const featured: FeaturedMovieModel = {
  movieId: featuredMovieDummy.id,
  backdropPath: featuredMovieDummy.backdrop_path,
  title: featuredMovieDummy.title,
  overview: featuredMovieDummy.overview ?? '',
  usRating: getUsRating(releaseDatesDummy.results),
};

export const Default: ComponentStory<typeof BrowsePage> = () => (
  <BrowsePage
    featuredMovie={featured}
    categories={[new CategoryModel('Trending', trendingResultDummy)]}
  />
);
