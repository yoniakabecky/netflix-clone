import React from 'react';

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
    <LikeButtons
      handleDislike={() => null}
      handleLike={() => null}
      handleLove={() => null}
    />
  </Box>
);
