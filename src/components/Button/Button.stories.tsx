import Button from '@mui/material/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import MoreInfoButton from './MoreInfoButton';
import PlayButton from './PlayButton';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Play: ComponentStory<typeof Button> = () => <PlayButton />;

export const MoreInfo: ComponentStory<typeof Button> = () => <MoreInfoButton />;
