import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

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
    movie={{
      title: 'the suicide squat',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      alt: 'the suicide squat',
      src: '/Netflix_Logo.svg',
    }}
  />
);
