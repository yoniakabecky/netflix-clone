import Box from '@mui/material/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LikeButtons from './LikeButtons';

export default {
  title: 'UI/LikeButtons',
  component: LikeButtons,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof LikeButtons>;

export const Default: ComponentStory<typeof LikeButtons> = () => (
  <Box m={6}>
    <LikeButtons rating={null} handleLikes={() => null} />
  </Box>
);

export const Dislike: ComponentStory<typeof LikeButtons> = () => (
  <Box m={6}>
    <LikeButtons rating={'dislike'} handleLikes={() => null} />
  </Box>
);

export const Like: ComponentStory<typeof LikeButtons> = () => (
  <Box m={6}>
    <LikeButtons rating={'like'} handleLikes={() => null} />
  </Box>
);

export const Love: ComponentStory<typeof LikeButtons> = () => (
  <Box m={6}>
    <LikeButtons rating={'love'} handleLikes={() => null} />
  </Box>
);
