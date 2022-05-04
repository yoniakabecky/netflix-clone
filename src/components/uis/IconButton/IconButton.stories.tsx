import { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CloseButton from './CloseButton';
import MuteButton from './MuteButton';

export default {
  title: 'UI/IconButton',
  component: IconButton,
  parameters: {
    backgrounds: { default: 'dark' },
  },
} as ComponentMeta<typeof IconButton>;

export const Close: ComponentStory<typeof IconButton> = () => <CloseButton />;

export const Mute: ComponentStory<typeof IconButton> = () => {
  const [isMute, setIsMute] = useState(false);

  return (
    <MuteButton isMute={isMute} onClick={() => setIsMute((prev) => !prev)} />
  );
};
