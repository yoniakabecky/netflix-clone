import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CategoryModel } from 'models';
import { trendingResultDummy } from 'tmdb/dummy';

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

export const Default = Template.bind({});
Default.args = {
  category: new CategoryModel('Category Name', trendingResultDummy),
};
