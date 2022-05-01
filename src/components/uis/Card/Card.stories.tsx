import Card from '@mui/material/Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ThumbnailCard from './ThumbnailCard';

export default {
  title: 'UI/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Thumbnail: ComponentStory<typeof Card> = () => (
  <ThumbnailCard imgProps={{ src: '/Netflix_Logo.svg', alt: 'sample' }} />
);
