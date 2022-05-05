import { ComponentMeta, ComponentStory } from '@storybook/react';

import MovieInfoCard from './MovieInfoCard';

export default {
  title: 'MovieInfoCard',
  component: MovieInfoCard,
} as ComponentMeta<typeof MovieInfoCard>;

export const Default: ComponentStory<typeof MovieInfoCard> = () => (
  <MovieInfoCard
    movie={{ title: 'category name', src: '/Netflix_Logo.svg', alt: 'sample' }}
  />
);
