import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Thumbnail from './Thumbnail';

export default {
  title: 'UI/Thumbnail',
  component: Card,
} as ComponentMeta<typeof Card>;

export const Default: ComponentStory<typeof Card> = () => (
  <Box width={'14vw'} height={'7.875vw'}>
    <Thumbnail
      imgProps={{
        src: '/Netflix_Logo.svg',
        alt: 'sample',
      }}
    />
  </Box>
);
