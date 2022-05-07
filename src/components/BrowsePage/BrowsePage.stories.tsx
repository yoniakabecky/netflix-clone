import { ComponentMeta, ComponentStory } from '@storybook/react';

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
    featuredMovie={{
      title: 'the suicide squat',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
      alt: 'the suicide squat',
      src: '/Netflix_Logo.svg',
    }}
    categories={[
      {
        name: 'My List',
        list: [
          {
            title: '',
            description: '',
            src: '/Netflix_Logo.svg',
            alt: 'sample',
          },
          {
            title: '',
            description: '',
            src: '/Netflix_Logo.svg',
            alt: 'sample',
          },
          {
            title: '',
            description: '',
            src: '/Netflix_Logo.svg',
            alt: 'sample',
          },
        ],
      },
    ]}
  />
);
