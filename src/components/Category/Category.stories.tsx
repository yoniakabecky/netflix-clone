import { ComponentMeta, ComponentStory } from '@storybook/react';

import { parseCategoryResponse } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';
import type { MovieList } from 'tmdb/types';

import Category from './Category';

export default {
  title: 'Category',
  component: Category,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

const category = parseCategoryResponse(
  'category name',
  trendingResultDummy as MovieList
);

export const Default = Template.bind({});
Default.args = {
  category,
};

export const Loading = Template.bind({});
Loading.args = {
  category,
  loading: true,
};
