import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RecoilRoot } from 'recoil';

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
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof BrowsePage>;

export const Default: ComponentStory<typeof BrowsePage> = () => (
  <BrowsePage
    featuredMovie={featuredMovieDummy}
    releaseDates={releaseDatesDummy}
    categories={[new CategoryModel('Trending', trendingResultDummy)]}
  />
);
