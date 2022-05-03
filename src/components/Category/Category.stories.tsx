import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Category from './Category';

export default {
  title: 'Category',
  component: Category,
} as ComponentMeta<typeof Category>;

const Template: ComponentStory<typeof Category> = (args) => (
  <Category {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'category name',
  movies: [
    {
      src: '/Netflix_Logo.svg',
      alt: 'sample',
    },
    {
      src: '/Netflix_Logo.svg',
      alt: 'sample',
    },
    {
      src: '/Netflix_Logo.svg',
      alt: 'sample',
    },
  ],
};
