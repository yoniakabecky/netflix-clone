import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CategoryModel } from 'models';
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
} as ComponentMeta<typeof BrowsePage>;

export const Default: ComponentStory<typeof BrowsePage> = () => (
  <BrowsePage
    featuredMovie={featuredMovieDummy}
    releaseDates={releaseDatesDummy}
    categories={[new CategoryModel('Trending', trendingResultDummy)]}
  />
);
